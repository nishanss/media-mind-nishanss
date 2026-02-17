"use client";
import React from "react";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { TrendingUp, Users, Award, Zap } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: 300, suffix: "%", label: "Average ROI" },
  { icon: Users, value: 50, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 98, suffix: "%", label: "Client Retention" },
  { icon: Zap, value: 24, suffix: "/7", label: "Support" }
];

export const StatsSection = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring" }}
              className="text-center group"
            >
              <div className="inline-flex p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <IconComponent className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-neutral-400">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};