"use client";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = () => {
  const beams = [
    { delay: 0, duration: 7, className: "left-[20%]" },
    { delay: 2, duration: 8, className: "left-[40%]" },
    { delay: 4, duration: 9, className: "left-[60%]" },
    { delay: 1, duration: 10, className: "left-[80%]" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {beams.map((beam, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: [0, 0.5, 0],
            y: [0, 800],
          }}
          transition={{
            duration: beam.duration,
            repeat: Infinity,
            delay: beam.delay,
            ease: "linear",
          }}
          className={`absolute top-0 ${beam.className} h-screen w-[1px] bg-gradient-to-b from-transparent via-purple-500 to-transparent`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50" />
    </div>
  );
};