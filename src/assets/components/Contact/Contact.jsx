import React, { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';

import scrollIcon from '../../images/icons/scroll-icon.svg';
import sendIcon from '../../images/icons/send-icon.svg';
import checkIcon from '../../images/icons/check-icon.svg';
import crossIcon from '../../images/icons/x-icon.svg';

export const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    emailjs
      .sendForm(
        'service_03i9j9g',
        'template_om99dm9',
        formRef.current,
        'HZjGJr2qdAFCzHQVI',
      )
      .then(() => {
        setStatus('success');
        formRef.current.reset();

        setTimeout(() => setStatus('idle'), 3000);
      })
      .catch((err) => {
        console.error(err);
        setStatus('error');

        setTimeout(() => setStatus('idle'), 3000);
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__header">
          <img
            src={scrollIcon}
            alt="Scroll down icon"
            className="contact__header-image"
          />
          <div className="contact__header-content">
            <h2 className="contact__header-title">Contact</h2>
            <p className="contact__header-paragraph">
              I'm currently available for work
            </p>
          </div>
        </div>

        <div className="contact__content">
          <div className="contact__content-title-container">
            <h3 className="contact__content-title">Send Me A Message</h3>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact__content-form"
          >
            <div className="contact__form-header">
              <div className="contact__form-name">
                <label htmlFor="name" className="contact__form-label">
                  Your name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="contact__form-input"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="contact__form-email">
                <label htmlFor="email" className="contact__form-label">
                  Your email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="contact__form-input"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="contact__form-message">
              <label htmlFor="message" className="contact__form-label">
                Your message *
              </label>
              <input
                type="text"
                name="message"
                id="message"
                className="contact__form-input"
                placeholder="Enter your needs"
                required
              />
            </div>

            <button
              type="submit"
              className="contact__form-submit"
              disabled={status === 'loading'}
            >
              {status === 'idle' && (
                <>
                  <span className="contact__form-submit-span">
                    Send Message
                  </span>
                  <img
                    src={sendIcon}
                    alt="Send message icon"
                    className="contact__form-submit-icon"
                  />
                </>
              )}

              {status === 'loading' && (
                <div className="contact__form-spinner"></div>
              )}

              {status === 'success' && (
                <>
                  <span className="contact__form-submit-span">
                    Message Sent Successfully
                  </span>
                  <img
                    src={checkIcon}
                    alt="Success check icon"
                    className="contact__form-check-icon"
                  />
                </>
              )}

              {status === 'error' && (
                <>
                  <img
                    src={crossIcon}
                    alt="Not success cross icon"
                    className="contact__form-cross-icon"
                  />
                  <span className="contact__form-submit-span">
                    Message Not Sent. Try Again
                  </span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
