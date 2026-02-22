"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { ContactForm } from "@/components/ui/contact-form";
import { Navbar } from "@/components/ui/navbar";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { StatsSection } from "@/components/sections/stats-section";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { AnimatedBlobs } from "@/components/ui/animated-blobs";

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

const GlowDivider = () => (
  <div className="relative w-full h-px my-0">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent blur-sm" />
  </div>
);

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <main className="relative bg-[#080808] flex flex-col"> */}
      <main className="relative w-full bg-black overflow-x-hidden">
        
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-200 group"
        >
          <svg className="w-8 h-8 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>

        <div className="relative">
          <AnimatedBlobs />
          <HeroParallax />
        </div>

        <GlowDivider />

        <SectionWrapper backgroundColor="transparent" id="stats">
          <StatsSection />
        </SectionWrapper>

        <GlowDivider />

        <SectionWrapper backgroundColor="transparent" id="services">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <ServicesSection />
          </div>
        </SectionWrapper>

        <GlowDivider />

        <SectionWrapper backgroundColor="transparent" id="testimonials">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-500/8 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <TestimonialsSection />
          </div>
        </SectionWrapper>

        <GlowDivider />

        <SectionWrapper backgroundColor="transparent" id="process">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-20 w-72 h-72 bg-pink-500/8 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <StickyScroll content={processSteps} />
          </div>
        </SectionWrapper>

        <GlowDivider />
        
        <SectionWrapper backgroundColor="transparent" id="tech" fullWidth={true}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-500/8 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <InfiniteMovingCards items={techStack} />
          </div>
        </SectionWrapper>

        <GlowDivider />

        <SectionWrapper backgroundColor="transparent" id="contact" isLast={true}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.12),transparent_60%)]" />
          </div>
          <div className="relative z-10">
            <ContactForm />
          </div>
        </SectionWrapper>

        <footer className="relative py-10 bg-transparent border-t border-neutral-800/50 text-center text-neutral-500 z-10">
          <p>© 2026 Media Mind. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}