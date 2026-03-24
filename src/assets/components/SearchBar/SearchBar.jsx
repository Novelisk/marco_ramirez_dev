import React, { useEffect, useMemo, useRef, useState } from 'react';

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&');

const normalizeText = (text) => text.replace(/\s+/g, ' ').trim();

const makeSnippet = (text, matchIndex, query) => {
  const around = 40;
  const start = Math.max(0, matchIndex - around);
  const end = Math.min(text.length, matchIndex + query.length + around);
  const prefix = start > 0 ? '…' : '';
  const suffix = end < text.length ? '…' : '';
  const snippet = text.slice(start, end).trim();

  // Highlight the first match inside the snippet.
  const escapedQuery = query.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&');
  const re = new RegExp(`(${escapedQuery})`, 'i');
  const parts = snippet.split(re);

  return (
    <span>
      {prefix}
      {parts.map((part, idx) =>
        idx % 2 === 1 ? (
          <mark key={idx} className="searchbar__highlight">
            {part}
          </mark>
        ) : (
          <span key={idx}>{part}</span>
        ),
      )}
      {suffix}
    </span>
  );
};

const findMatches = (query, root) => {
  if (!query) return [];
  const normalizedQuery = normalizeText(query);
  const regex = new RegExp(escapeRegExp(normalizedQuery), 'i');

  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;

        if (parent.closest('.searchbar'))
          return NodeFilter.FILTER_REJECT;
        if (
          parent.matches &&
          parent.matches('script, style, noscript, [aria-hidden="true"]')
        ) {
          return NodeFilter.FILTER_REJECT;
        }

        const text = normalizeText(node.nodeValue);
        if (!text) return NodeFilter.FILTER_REJECT;

        return regex.test(text)
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      },
    },
    false,
  );

  const results = [];
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const text = normalizeText(node.nodeValue);
    const match = regex.exec(text);
    if (!match) continue;

    results.push({
      node: node.parentElement,
      text,
      matchIndex: match.index,
    });

    if (results.length >= 20) break;
  }

  return results;
};

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const root = useMemo(() => document.body, []);
  const normalizedQuery = normalizeText(query);
  const results = useMemo(() => {
    if (!normalizedQuery) return [];

    return findMatches(normalizedQuery, root);
  }, [normalizedQuery, root]);

  function scrollToResult(item) {
    const el = item.node;
    if (!el || !el.scrollIntoView) return;

    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.classList.add('searchbar__flash');
    window.setTimeout(() => el.classList.remove('searchbar__flash'), 900);
  }

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      inputRef.current?.focus();
    }
  }, [isMobileOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!results.length) return;
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setActiveIndex((prev) => Math.min(prev + 1, results.length - 1));
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      }
      if (event.key === 'Enter') {
        event.preventDefault();
        const item = results[activeIndex];
        if (item) {
          scrollToResult(item);
        }
      }
      if (event.key === 'Escape') {
        setQuery('');
        setActiveIndex(0);
        setIsMobileOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [results, activeIndex]);

  const handleResultClick = (result) => {
    scrollToResult(result);
    setIsMobileOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div
      className={`searchbar ${isMobileOpen ? 'searchbar--mobile-open' : ''}`}
      ref={containerRef}
    >
      <button
        type="button"
        className="searchbar__toggle"
        onClick={() => {
          setIsMobileOpen((prev) => !prev);
          setActiveIndex(0);
        }}
        aria-label={isMobileOpen ? 'Close search' : 'Open search'}
        aria-expanded={isMobileOpen}
      >
        <svg
          className="searchbar__toggle-icon"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
          <path
            d="M16 16L21 21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="searchbar__panel">
        <input
          ref={inputRef}
          className="searchbar__input"
          placeholder="Search this page..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActiveIndex(0);
          }}
          aria-label="Search this page"
        />

        {query.trim() && (
          <ul className="searchbar__results">
            {results.length === 0 ? (
              <li className="searchbar__no-results">No matches found</li>
            ) : (
              results.map((result, index) => (
                <li
                  key={`${result.text}-${index}`}
                  className={`searchbar__item ${index === activeIndex ? 'searchbar__item-active' : ''}`}
                  onClick={() => handleResultClick(result)}
                >
                  <div className="searchbar__item-snippet">
                    {makeSnippet(result.text, result.matchIndex, query)}
                  </div>
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </div>
  );
};
