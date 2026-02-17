"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "Media Mind transformed our digital presence. Our conversion rate increased by 250% in just 3 months.",
    avatar: "SJ",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    content: "The most data-driven agency we've worked with. They don't just execute - they strategize and optimize relentlessly.",
    avatar: "MC",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, StyleHub",
    content: "Our ROI doubled within the first quarter. The team's expertise in Meta and Google Ads is unmatched.",
    avatar: "ER",
    rating: 5
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Trusted by Growth Leaders
        </h2>
        <TextReveal
          text="See what our clients say about working with us"
          className="text-neutral-400 max-w-2xl mx-auto"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {testimonials.map((testimonial, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: idx * 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative bg-neutral-900 p-8 rounded-3xl border border-neutral-800 hover:border-purple-500/50 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
      
      <div className="relative z-10">
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + (i * 0.1), type: "spring" }}
            >
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            </motion.div>
          ))}
        </div>
        
        <p className="text-neutral-300 mb-6 leading-relaxed">
          "{testimonial.content}"
        </p>
        
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
            {testimonial.avatar}
          </div>
          <div>
            <div className="font-semibold text-white">{testimonial.name}</div>
            <div className="text-sm text-neutral-400">{testimonial.role}</div>
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</div>
    </section>
  );
};