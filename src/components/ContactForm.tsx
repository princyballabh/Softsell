"use client";

import React, { useEffect, useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#c4d9ff] via-[#e8f9ff] to-[#fbfbfb] py-10">
      <h2 className="text-3xl font-bold text-[#4d4d7a] mb-8">Contact Us</h2>
      <form
        className="bg-white rounded-xl shadow-md p-8 max-w-md w-full"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="mb-4">
          <label className="block text-[#4d4d7a] mb-1" htmlFor="name">
            Name
          </label>
          <input
            className="w-full border rounded px-3 py-2"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#4d4d7a] mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border rounded px-3 py-2"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#4d4d7a] mb-1" htmlFor="company">
            Company
          </label>
          <input
            className="w-full border rounded px-3 py-2"
            type="text"
            id="company"
            name="company"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#4d4d7a] mb-1" htmlFor="licenseType">
            License Type
          </label>
          <select
            className="w-full border rounded px-3 py-2"
            id="licenseType"
            name="licenseType"
            required
          >
            <option value="" disabled>
              Select License Type
            </option>
            <option value="Windows">Windows</option>
            <option value="Office">Office</option>
            <option value="Adobe">Adobe</option>
            <option value="Antivirus">Antivirus</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-[#4d4d7a] mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full border rounded px-3 py-2"
            id="message"
            name="message"
            required
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#c5baff] text-[#4d4d7a] font-semibold py-2 rounded hover:bg-[#c4d9ff] transition"
        >
          Submit
        </button>
        {isMounted && submitted && (
          <div className="text-green-600 text-center mt-4 font-semibold">
            Submitted!
          </div>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
