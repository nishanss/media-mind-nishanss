"use client";
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export const GrowthGraph = () => {
  const points = [10, 25, 18, 40, 35, 60, 55, 90];
  
  return (
    <div className="relative w-full max-w-lg aspect-video bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 rounded-3xl p-6 shadow-2xl overflow-hidden group">
      <div className="absolute inset-0 grid grid-cols-6 gap-0 opacity-10 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border-r border-white h-full" />
        ))}
      </div>
      <div className="absolute inset-0 grid grid-rows-4 gap-0 opacity-10 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="border-b border-white w-full" />
        ))}
      </div>

      <div className="flex justify-between items-center mb-8 relative z-10">
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +324% Growth
        </div>
      </div>

      <div className="relative h-40 w-full flex items-end justify-between px-2">
         <svg className="absolute inset-0 w-full h-full overflow-visible">
            <motion.path
               d="M 0 160 C 50 160, 50 100, 100 120 C 150 140, 150 60, 200 80 C 250 100, 250 40, 300 50 C 350 60, 350 0, 450 0"
               fill="none"
               stroke="url(#gradient)"
               strokeWidth="4"
               initial={{ pathLength: 0, opacity: 0 }}
               animate={{ pathLength: 1, opacity: 1 }}
               transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
            </defs>
         </svg>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 z-20"
      >
        <span className="text-white font-bold text-xl">f</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/4 right-1/3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-20"
      >
        <div className="w-6 h-6 rounded-full border-4 border-orange-500" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-1/3 right-10 w-14 h-14 bg-[#ff7a59] rounded-full flex items-center justify-center shadow-lg shadow-orange-500/20 z-20"
      >
         <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><circle cx="12" cy="12" r="3"/></svg>
      </motion.div>
    </div>
  );
};