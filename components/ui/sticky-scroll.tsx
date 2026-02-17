"use client";
import React from "react";
import { motion } from "framer-motion";

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: string;
  }[];
}) => {
  return (
    <div className="py-20 px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
        How We Work
      </h2>
      <div className="max-w-5xl mx-auto">
        {content.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-16 flex gap-8 items-start"
          >
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center text-2xl font-bold text-white">
              {index + 1}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-neutral-400 text-lg">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};