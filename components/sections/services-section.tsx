"use client";
import React from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { TrendingUp, Target, Palette, Video } from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";

const services = [
  {
    title: "Performance Marketing",
    description: "Meta Ads, Google Ads, and data-driven campaigns that actually convert.",
    gradient: "from-purple-500 to-purple-700",
    Icon: TrendingUp,
    span: "md:col-span-2",
    stats: "300% Avg ROI"
  },
  {
    title: "CRM Optimization",
    description: "Turn your HubSpot or Salesforce into a revenue-generating machine.",
    gradient: "from-blue-500 to-blue-700",
    Icon: Target,
    span: "",
    stats: "2x Conversion Rate"
  },
  {
    title: "High-Conversion Design",
    description: "Landing pages and funnels designed to maximize your ROI.",
    gradient: "from-green-500 to-green-700",
    Icon: Palette,
    span: "",
    stats: "85% Mobile Optimized"
  },
  {
    title: "Content Creation",
    description: "Video editing, social media content, and brand storytelling.",
    gradient: "from-orange-500 to-orange-700",
    Icon: Video,
    span: "md:col-span-2",
    stats: "10M+ Views Generated"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
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

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4 max-w-7xl mx-auto w-full relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center tracking-tighter">
          Our Services
        </h2>
        <TextReveal
          text="Comprehensive solutions to accelerate your growth"
          className="text-neutral-400 text-center mb-16 max-w-2xl mx-auto"
        />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <BentoGrid>
  {services.map((service, idx) => {
    const IconComponent = service.Icon;
    return (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.8,
          delay: idx * 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={service.span}
      >
        <BentoGridItem
          title={
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <motion.div 
                  className="p-2 bg-white/10 rounded-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </motion.div>
                <span className="text-xl font-bold">{service.title}</span>
              </div>
              <span className="text-sm text-purple-400 font-semibold">{service.stats}</span>
            </div>
          }
          description={service.description}
          header={
            <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br ${service.gradient} relative overflow-hidden group`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-4 right-4 opacity-20"
                whileHover={{ opacity: 0.4, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <IconComponent className="w-20 h-20" />
              </motion.div>
            </div>
          }
        />
      </motion.div>
    );
  })}
</BentoGrid>
      </motion.div>
    </section>
  );
};