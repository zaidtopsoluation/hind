'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './page.module.css';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      setFormData((prev) => ({
        ...prev,
        service: serviceParam,
      }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        service: '',
        message: '',
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section className={styles.formCard} aria-labelledby="send-message-heading">
      <h2 id="send-message-heading" className={styles.formTitle}>
        <span className={styles.formIcon} aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </span>
        Send a Message
      </h2>

      {isSubmitted && (
        <div className={styles.successMessage} role="alert">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Thank you! Your service request has been submitted successfully. We will call you shortly.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroupRow}>
          <div className={styles.formGroup}>
            <label htmlFor="name-input" className={styles.label}>
              Full Name
            </label>
            <input
              type="text"
              id="name-input"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone-input" className={styles.label}>
              Phone Number
            </label>
            <input
              type="tel"
              id="phone-input"
              name="phone"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="service-select" className={styles.label}>
            Service Required
          </label>
          <select
            id="service-select"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className={styles.select}
          >
            <option value="">Select a service type</option>
            <option value="emergency">Emergency AC Repair (Inspection Fee ₹299)</option>
            <option value="installation">Split & Window Installation (Starts ₹1,499)</option>
            <option value="gas-charging">Gas Charging & Leak Repair (Starts ₹2,100)</option>
            <option value="deep-cleaning">Foam Jet Deep Cleaning (Starts ₹599)</option>
            <option value="amc">Annual Maintenance Contract (AMC) (Starts ₹2,499)</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message-textarea" className={styles.label}>
            Message / Issue Details
          </label>
          <textarea
            id="message-textarea"
            name="message"
            placeholder="Describe the issue you're experiencing..."
            value={formData.message}
            onChange={handleChange}
            className={styles.textarea}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            Submit Request
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </span>
        </button>
      </form>
    </section>
  );
}
