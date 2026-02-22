"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_lfzlfps";
const EMAILJS_TEMPLATE_ID = "template_16vfkvt";
const EMAILJS_PUBLIC_KEY = "GknEqaJXMr3J39bu8";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,        
          name: formData.name,             
          from_email: formData.email,      
          website: formData.website || "Not provided", 
          message: formData.website        
            ? `Website: ${formData.website}`
            : "No website provided",
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ name: "", email: "", website: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="py-20 px-4 relative">
      <div className="max-w-2xl mx-auto relative">
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
            Not sure where to start? We'll tell you exactly what's working and what's not.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                className="w-full px-6 py-4 bg-black/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="relative group">
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                className="w-full px-6 py-4 bg-black/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="relative group">
              <input
                type="url"
                placeholder="Your Website (Optional)"
                value={formData.website}
                className="w-full px-6 py-4 bg-black/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center gap-2">
                {status === "sending" && (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending...
                  </>
                )}
                {status === "success" && (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Sent! We'll be in touch.
                  </>
                )}
                {status === "error" && (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    Something went wrong — try again
                  </>
                )}
                {status === "idle" && (
                  <>
                    Get My Free Audit
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
          </form>

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