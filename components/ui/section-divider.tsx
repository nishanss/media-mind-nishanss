"use client";
import React from "react";
import { motion } from "framer-motion";

export const SectionDivider = () => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent my-20"
    />
  );
};