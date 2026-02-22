"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  backgroundColor: string;
  id?: string;
  isLast?: boolean;
  fullWidth?: boolean;
}

export const SectionWrapper = ({ children, backgroundColor, id, isLast = false, fullWidth = false }: SectionWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(
    scrollYProgress,
    isLast ? [0, 0.2, 1] : [0, 0.15, 1],
    isLast ? [0, 1, 1] : [0, 1, 1]
  );

  const scale = useTransform(
    scrollYProgress,
    isLast ? [0, 0.2, 1] : [0, 0.15, 1],
    isLast ? [0.95, 1, 1] : [0.97, 1, 1]
  );

  return (
    <motion.section
      id={id}
      ref={ref}
      style={{
        opacity,
        scale,
        backgroundColor
      }}
      className="relative will-change-transform"
    >
      {fullWidth ? (
        <div className="py-20">
          {children}
        </div>
      ) : (
        <div className="py-20 px-4 max-w-7xl mx-auto">
          {children}
        </div>
      )}
    </motion.section>
  );
};