"use client";

import React from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { StickyScroll } from "@/components/ui/sticky-scroll";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { ContactForm } from "@/components/ui/contact-form";

const processSteps = [
  {
    title: "Step 1: The Audit",
    description: "We dive into your data to find where you're losing money.",
  },
  {
    title: "Step 2: The Strategy",
    description: "We build a multi-channel plan tailored to your specific industry.",
  },
  {
    title: "Step 3: The Execution",
    description: "High-speed implementation of ads, content, and design.",
  },
  {
    title: "Step 4: The Optimization",
    description: "Continuous A/B testing to lower your cost-per-acquisition (CPA).",
  },
];

const techStack = [
  { name: "Meta Business Suite" },
  { name: "Google Ads" },
  { name: "HubSpot" },
  { name: "Shopify" },
  { name: "Figma" },
  { name: "Adobe Premiere Pro" },
  { name: "React & Next.js" },
  { name: "TailwindCSS" },
];

export default function Home() {
  return (
    <main className="relative bg-black flex flex-col overflow-hidden">
      
      <a  href="https://wa.me/971562520106"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-200"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

      <section className="h-screen w-full flex flex-col items-center justify-center relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center"
        >
          <h1 className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Stop Guessing. <br /> Start Growing.
          </h1>
          <p className="mt-6 text-neutral-400 max-w-2xl mx-auto text-lg md:text-xl">
            Data-Driven Marketing that Scales. We combine Performance Marketing, CRM Optimization, and High-Conversion Design to turn your traffic into predictable revenue.
          </p>
          <div className="mt-10">
            <button className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition duration-200">
              Get My Free Growth Roadmap
            </button>
          </div>
        </motion.div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 text-center">
          Our Services
        </h2>
        <BentoGrid>
          <BentoGridItem
            title="Performance Marketing"
            description="Meta Ads, Google Ads, and data-driven campaigns that actually convert."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-500 to-purple-700"></div>
            }
            className="md:col-span-2"
          />
          <BentoGridItem
            title="CRM Optimization"
            description="Turn your HubSpot or Salesforce into a revenue-generating machine."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-500 to-blue-700"></div>
            }
          />
          <BentoGridItem
            title="High-Conversion Design"
            description="Landing pages and funnels designed to maximize your ROI."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-500 to-green-700"></div>
            }
          />
          <BentoGridItem
            title="Content Creation"
            description="Video editing, social media content, and brand storytelling."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-500 to-orange-700"></div>
            }
            className="md:col-span-2"
          />
        </BentoGrid>
      </section>

      <StickyScroll content={processSteps} />

      <InfiniteMovingCards items={techStack} />

      <ContactForm />

      <footer className="py-10 bg-black border-t border-neutral-800 text-center text-neutral-500">
        <p>© 2026 Media Mind. All rights reserved.</p>
      </footer>
    </main>
  );
}