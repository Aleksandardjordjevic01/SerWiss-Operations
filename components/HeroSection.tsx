"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export function AuroraBackgroundDemo() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Vertical gradient: dark green top → white bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #080e0a 0%, #0d1a10 25%, #1a3a28 45%, #3a7a52 60%, #6ab88e 70%, #9dd4b8 78%, #c4e8d6 84%, #dff2ea 89%, #f0f9f4 94%, #f9fdfb 97%, #ffffff 100%)",
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
      <div className="relative z-10 w-full max-w-7xl mx-auto  grid grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col gap-6"
        >
          <h1 className="font-heading font-bold text-white leading-[0.92] tracking-tighter text-[clamp(3.5rem,7vw,7rem)]">
            SerWiss
            <br />
            Operations
          </h1>
          <h2 className="font-sans font-light text-[#c7e7d2] text-base md:text-lg max-w-xl leading-relaxed">
            <span className="font-bold">Welcome to SerWiss Operations.</span> We are
            a dedicated partner for Nearshore Managed Services from Serbia,
            serving clients with a strong focus on the Swiss market.
          </h2>
          <div className="flex items-center gap-3 mt-2">
            <button className="bg-[#b8f04a] text-black font-sans font-semibold text-sm px-7 py-4 rounded-full hover:bg-[#caff55] transition-colors cursor-pointer">
              Get in Touch
            </button>
            <button className="w-12 h-12 rounded-full border border-[#b8f04a] flex items-center justify-center hover:bg-[#b8f04a]/10 transition-colors cursor-pointer">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 13L13 3M13 3H6M13 3V10"
                  stroke="#b8f04a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Right side - logo */}
        <div className="flex items-center justify-end">
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{
              scale: 1.06,
              filter: "drop-shadow(0 0 32px rgba(184,240,74,0.35))",
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
