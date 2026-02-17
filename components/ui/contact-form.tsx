"use client";
import React, { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, we'll just log it. We'll add EmailJS later if needed.
    console.log(formData);
    alert("Form submitted! We'll add email integration next.");
  };

  return (
    <div className="py-20 px-4 bg-black relative">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center">
          Get Your Free 5-Point Audit
        </h2>
        <p className="text-neutral-400 text-center mb-10 text-lg">
          We'll tell you exactly what's working and what's not.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="url"
            placeholder="Your Website (Optional)"
            className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500"
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          />
          <button
            type="submit"
            className="w-full px-8 py-4 bg-purple-500 text-white font-bold rounded-xl hover:bg-purple-600 transition duration-200"
          >
            Get My Free Audit
          </button>
        </form>
      </div>
    </div>
  );
};