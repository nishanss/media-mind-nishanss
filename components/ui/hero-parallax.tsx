"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BackgroundBeams } from "./background-beams";
import { LetterReveal } from "./letter-reveal";
import { TextReveal } from "./text-reveal";
import { GrowthGraph } from "./growth-graph";

export const HeroParallax = () => {
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative px-4 pt-20 overflow-hidden noise-bg">
      <BackgroundBeams />
      
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      />

      <motion.div
        style={{ opacity, scale }}
        className="z-10 text-center relative"
      >
        <div className="mb-4">
          <LetterReveal
            text="Stop Guessing."
            className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          />
        </div>
        
        <div className="mb-6">
          <LetterReveal
            text="Start Growing."
            delay={0.5}
            className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400"
          />
        </div>

        <TextReveal
          text="Data-Driven Marketing that Scales. We combine Performance Marketing, CRM Optimization, and High-Conversion Design to turn your traffic into predictable revenue."
          delay={1}
          className="mt-6 text-neutral-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <button className="group px-8 py-4 rounded-full bg-white text-black font-bold relative overflow-hidden transition-all duration-300 shadow-2xl hover:shadow-purple-500/50">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Get My Free Growth Roadmap
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
          </button>
        </motion.div>


        <motion.div
            initial={{ opacity: 0, rotateX: 20, z: -100 }}
            animate={{ opacity: 1, rotateX: 0, z: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 relative z-20 perspective-1000"
        >
            <GrowthGraph />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: "300%", label: "Avg ROI" },
            { value: "50+", label: "Clients" },
            { value: "24/7", label: "Support" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 1.8 + (i * 0.1), 
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-neutral-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};