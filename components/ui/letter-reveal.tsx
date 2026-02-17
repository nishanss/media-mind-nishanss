"use client";
import React from "react";
import { motion } from "framer-motion";

interface LetterRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export const LetterReveal = ({ text, className = "", delay = 0 }: LetterRevealProps) => {
  const letters = text.split("");

  return (
    <div className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: "spring",
            damping: 12,
            stiffness: 200,
            delay: delay + (index * 0.03),
          }}
          className="inline-block"
          style={{ display: letter === " " ? "inline" : "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
};