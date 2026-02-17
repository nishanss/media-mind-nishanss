"use client";
import React from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const services = [
  {
    title: "Performance Marketing",
    description: "Meta Ads, Google Ads, and data-driven campaigns that actually convert.",
    gradient: "from-purple-500 to-purple-700",
    icon: "📊",
    span: "md:col-span-2"
  },
  {
    title: "CRM Optimization",
    description: "Turn your HubSpot or Salesforce into a revenue-generating machine.",
    gradient: "from-blue-500 to-blue-700",
    icon: "🎯",
    span: ""
  },
  {
    title: "High-Conversion Design",
    description: "Landing pages and funnels designed to maximize your ROI.",
    gradient: "from-green-500 to-green-700",
    icon: "🎨",
    span: ""
  },
  {
    title: "Content Creation",
    description: "Video editing, social media content, and brand storytelling.",
    gradient: "from-orange-500 to-orange-700",
    icon: "📹",
    span: "md:col-span-2"
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4 max-w-7xl mx-auto w-full relative noise-bg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center">
          Our Services
        </h2>
        <p className="text-neutral-400 text-center mb-16 max-w-2xl mx-auto">
          Comprehensive solutions to accelerate your growth
        </p>
      </motion.div>

      <BentoGrid>
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={service.span}
          >
            <BentoGridItem
              title={
                <span className="flex items-center gap-2">
                  <span className="text-3xl">{service.icon}</span>
                  {service.title}
                </span>
              }
              description={service.description}
              header={
                <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br ${service.gradient} relative overflow-hidden group`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-white/10 to-transparent transition-opacity duration-500" />
                </div>
              }
            />
          </motion.div>
        ))}
      </BentoGrid>
    </section>
  );
};