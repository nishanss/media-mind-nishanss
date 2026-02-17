"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  backgroundColor: string;
  id?: string;
  isLast?: boolean;
}

export const SectionWrapper = ({ children, backgroundColor, id, isLast = false }: SectionWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  const opacity = useTransform(
    scrollYProgress, 
    isLast ? [0, 0.2, 1] : [0, 0.2, 0.8, 1], 
    isLast ? [0, 1, 1] : [0, 1, 1, 0]
  );
  
  const scale = useTransform(
    scrollYProgress, 
    isLast ? [0, 0.2, 1] : [0, 0.2, 0.8, 1], 
    isLast ? [0.8, 1, 1] : [0.8, 1, 1, 0.8]
  );

  return (
    <motion.section
      id={id}
      ref={ref}
      style={{
        y,
        opacity,
        scale,
        backgroundColor
      }}
      className="relative py-20 px-4 will-change-transform"
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
};