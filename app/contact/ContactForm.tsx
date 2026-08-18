'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      // Map params like 'split', 'vrf', etc. to the dropdown values
      const validServices = ['vrf', 'ductable', 'splits', 'package', 'amc', 'emergency'];
      if (validServices.includes(serviceParam)) {
        setFormData((prev) => ({
          ...prev,
          service: serviceParam,
        }));
      }
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
    if (formData.firstName && formData.email) {
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        service: '',
        message: '',
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section className="bg-white rounded-xl p-8 cool-shadow border border-surface-container-highest flex flex-col gap-6" aria-labelledby="send-message-heading">
      <h2 id="send-message-heading" className="font-headline-md text-headline-md text-deep-navy mb-2 flex items-center gap-2">
        Send a Message
      </h2>

      {isSubmitted && (
        <div className="bg-success-mint/10 border border-success-mint text-success-mint p-4 rounded-lg font-semibold text-sm flex items-center gap-2 animate-fadeIn" role="alert">
          <span className="material-symbols-outlined">check_circle</span>
          Thank you! Your message has been sent successfully. We will get in touch with you shortly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName" className="text-xs font-bold text-deep-navy tracking-wide">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface hover:border-outline focus:border-deep-navy focus:bg-white transition-all outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName" className="text-xs font-bold text-deep-navy tracking-wide">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface hover:border-outline focus:border-deep-navy focus:bg-white transition-all outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-bold text-deep-navy tracking-wide">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john.doe@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface hover:border-outline focus:border-deep-navy focus:bg-white transition-all outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="service" className="text-xs font-bold text-deep-navy tracking-wide">
            Service of Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface hover:border-outline focus:border-deep-navy focus:bg-white transition-all outline-none"
          >
            <option value="">Select a service</option>
            <option value="vrf">VRF / VRV Systems</option>
            <option value="ductable">Ductable AC</option>
            <option value="splits">Split AC</option>
            <option value="package">Package AC</option>
            <option value="amc">Maintenance / AMC</option>
            <option value="emergency">Emergency AC Repair</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-xs font-bold text-deep-navy tracking-wide">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="How can we help you stay cool?"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface hover:border-outline focus:border-deep-navy focus:bg-white transition-all outline-none resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-deep-navy text-on-primary font-label-lg text-label-lg py-4 rounded-lg hover:bg-arctic-cyan transition-colors duration-300 active:scale-95 shadow-md mt-2 font-bold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
