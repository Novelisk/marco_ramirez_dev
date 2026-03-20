import React from 'react';

export const Privacy = () => {
  return (
    <>
      <div className="top-line"></div>
      <div className="privacy">
        <div className="privacy__header">
          <h1 className="privacy__title">Privacy Policy</h1>
          <p className="privacy__paragraph">
            <strong>Effective Date:</strong> March 2026
          </p>
          <p className="privacy-paragraph">
            Welcome to www.novelisk.dev. Your privacy is important to us. This
            Privacy Policy explains how we collect, use, and protect your
            information when you visit the website.
          </p>
        </div>

        <div className="privacy-content">
          <h2 className="privacy__subtitle">1. Information We Collect</h2>
          <p className="privacy__paragraph">
            We may collect the following types of information:
          </p>
          <h3 className="privacy__subtitle-bold">a. Personal Information</h3>
          <ul className="privacy__list">
            <li className="privacy__list-item">Name</li>
            <li className="privacy__list-item">Email address</li>
            <li className="privacy__list-item">
              Any information you voluntarily provide through contact forms or
              email
            </li>
          </ul>
          <h3 className="privacy__subtitle-bold">
            b. Non-Personal Information
          </h3>
          <ul className="privacy__list">
            <li className="privacy__list-item">Browser type</li>
            <li className="privacy__list-item">IP address</li>
            <li className="privacy__list-item">Device information</li>
            <li className="privacy__list-item">
              Pages visited and time spent on the website
            </li>
          </ul>

          <h2 className="privacy__subtitle">2. How We Use Your Information</h2>
          <p className="privacy__paragraph">
            We use the information we collect to:
          </p>
          <ul className="privacy__list">
            <li className="privacy__list-item">
              Respond to inquiries or messages
            </li>
            <li className="privacy__list-item">
              Improve website performance and user experience
            </li>
            <li className="privacy__list-item">
              Monitor and analyze usage trends
            </li>
            <li className="privacy__list-item">
              Ensure security and prevent fraud
            </li>
          </ul>

          <h2 className="privacy__subtitle">
            3. Cookies and Tracking Technologies
          </h2>
          <p className="privacy__paragraph">
            We may use cookies and similar tracking technologies to:
          </p>
          <ul className="privacy__list">
            <li className="privacy__list-item">
              Enhance your browsing experience
            </li>
            <li className="privacy__list-item">Analyze site traffic</li>
            <li className="privacy__list-item">Remember user preferences</li>
          </ul>
          <p className="privacy__paragraph">
            You can disable cookies through your browser settings.
          </p>

          <h2 className="privacy__subtitle">4. Third-Party Services</h2>
          <p className="privacy__paragraph">
            We may use third-party services such as:
          </p>
          <ul className="privacy__list">
            <li className="privacy__list-item">
              Analytics tools (e.g., Google Analytics)
            </li>
            <li className="privacy__list-item">Hosting providers</li>
          </ul>
          <p className="privacy__paragraph">
            These third parties may collect information in accordance with their
            own privacy policies.
          </p>

          <h2 className="privacy__subtitle">5. Data Sharing</h2>
          <p className="privacy__paragraph">
            We do not sell, trade, or rent your personal information. We may
            share information only:
          </p>
          <ul className="privacy__list">
            <li className="privacy__list-item">
              To comply with legal obligations
            </li>
            <li className="privacy__list-item">
              To protect our rights and security
            </li>
          </ul>

          <h2 className="privacy__subtitle">6. Data Security</h2>
          <p className="privacy__paragraph">
            We implement reasonable security measures to protect your
            information. However, no method of transmission over the internet is
            100% secure.
          </p>

          <h2 className="privacy__subtitle">7. Your Rights</h2>
          <p className="privacy__paragraph">
            Depending on your location, you may have the right to:
          </p>
          <ul className="privacy__list">
            <li className="privacy__list-item">
              Access the personal data we hold about you
            </li>
            <li className="privacy__list-item">
              Request correction or deletion of your data
            </li>
            <li className="privacy__list-item">
              Withdraw consent where applicable
            </li>
          </ul>
          <p className="privacy__paragraph">
            To exercise these rights, contact us at: novelisk@ik.me
          </p>

          <h2 className="privacy__subtitle">8. Links to Other Websites</h2>
          <p className="privacy__paragraph">
            Our website may contain links to external sites. We are not
            responsible for the privacy practices of those websites.
          </p>

          <h2 className="privacy__subtitle">9. Changes to This Policy</h2>
          <p className="privacy__paragraph">
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated effective date.
          </p>

          <h2 className="privacy__subtitle">10. Contact Us</h2>
          <p className="privacy__paragraph">
            If you have any questions about this Privacy Policy, you can contact
            us at: novelisk@ik.me
          </p>
        </div>
      </div>
    </>
  );
};
