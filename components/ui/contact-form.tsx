"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="py-20 px-4 relative">
      <div className="max-w-2xl mx-auto relative">
        {/* Glassmorphism card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-neutral-900/50 backdrop-blur-xl p-10 rounded-3xl border border-neutral-800/50 shadow-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center">
            Get Your Free 5-Point Audit
          </h2>
          <p className="text-neutral-400 text-center mb-10 text-lg">
            We'll tell you exactly what's working and what's not.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-6 py-4 bg-black/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            
            <div className="relative group">
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-6 py-4 bg-black/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            
            <div className="relative group">
              <input
                type="url"
                placeholder="Your Website (Optional)"
                className="w-full px-6 py-4 bg-black/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              />
            </div>
            
            <button
              type="submit"
              className="group w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Submitted!
                  </>
                ) : (
                  <>
                    Get My Free Audit
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
          </form>

          {/* Trust badges */}
          <div className="mt-8 pt-8 border-t border-neutral-800 flex items-center justify-center gap-8 text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Response in 24h
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};