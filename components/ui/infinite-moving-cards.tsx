"use client";
import React from "react";

export const InfiniteMovingCards = ({
  items,
}: {
  items: { name: string }[];
}) => {
  return (
    <div className="py-20">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 text-center px-4">
        Powered by the Best in the Industry
      </h2>
      <div className="relative w-screen left-1/2 -translate-x-1/2 flex overflow-hidden space-x-8 group">
        <div className="flex space-x-8 animate-loop-scroll group-hover:paused">
          {items.concat(items).map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center px-8 py-4 bg-neutral-900 rounded-xl border border-neutral-800 min-w-[200px]"
            >
              <span className="text-white font-semibold text-lg">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};