"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export function AuroraBackgroundDemo() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center px-6 md:px-12 lg:px-20">
      {/* Vertical gradient: dark green top → white bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #05080f 0%, #091525 25%, #0a2545 45%, #005a96 60%, #2a8fd4 70%, #6ab8e8 78%, #a8d8f5 84%, #cce9fb 89%, #e5f4fd 94%, #f5fbfe 97%, #ffffff 100%)",
        }}
      />

      {/* Grid overlay - visible in center, fades to edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col gap-6"
        >
          <h1 className="font-heading font-bold text-white leading-[0.92] tracking-tighter text-[clamp(2.8rem,7vw,7rem)]">
            SerWiss
            <br />
            Operations
          </h1>
          <h2 className="font-sans font-light text-[#b8dcf5] text-base md:text-lg max-w-xl leading-relaxed">
            <span className="font-bold">Welcome to SerWiss Operations.</span> We are
            a dedicated partner for Nearshore Managed Services from Serbia,
            serving clients with a strong focus on the Swiss market.
          </h2>
          <div className="flex items-center gap-3 mt-2">
            <button className="bg-white text-slate-900 font-sans font-semibold text-sm px-7 py-4 rounded-full hover:bg-slate-100 transition-colors cursor-pointer">
              Get in Touch
            </button>
            <button className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 13L13 3M13 3H6M13 3V10"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Right side - logo */}
        <div className="hidden md:flex items-center justify-end">
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{
              scale: 1.06,
              filter: "drop-shadow(0 0 32px rgba(19, 161, 238, 0.35))",
            }}
          >
            <Image
              src="/images/logo-big.png"
              alt="SerWiss Operations"
              width={400}
              height={400}
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
