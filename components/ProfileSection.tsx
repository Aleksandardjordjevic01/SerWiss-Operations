// ProfileSection commented out — replaced by TestimonialSection
/*
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function ProfileSection() {
  return (
    <section className="w-full bg-white px-6 md:px-12 lg:px-20 pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden grid md:grid-cols-2 min-h-[600px]"
          style={{ background: "linear-gradient(135deg, #080e0a 0%, #0d1a10 40%, #1a3a28 70%, #2d5a3d 100%)" }}
        >
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
              maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)",
            }}
          />

          {/* Left — text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-10 flex flex-col justify-center gap-6 p-10 md:p-16"
          >
            {/* Logo */}
            <Image
              src="/images/logo-dark.png"
              alt="SerWiss Operations"
              width={120}
              height={40}
              className="h-8 w-auto max-w-[120px]"
            />

            <h2 className="font-heading font-bold text-white text-3xl md:text-4xl leading-tight tracking-tight">
              Expertise Rooted in<br />Swiss Standards
            </h2>

            {/* Quote */}
            <div className="border-l-2 border-[#b8f04a] pl-4 mt-2">
              <p className="font-sans font-light text-slate-300 text-base italic leading-relaxed">
                "I take care of your financial and administrative matters — straightforward, reliable, and in Swiss German. I offer you these services from Serbia in Swiss quality, freeing you from your operational frustration."
              </p>
              <span className="font-heading font-semibold text-white text-sm mt-3 block">
                — Natascha Maksimovic
              </span>
            </div>

            <button className="mt-2 w-fit bg-[#b8f04a] text-black font-sans font-semibold text-sm px-7 py-3 rounded-full hover:bg-[#caff55] transition-colors cursor-pointer">
              My Story
            </button>
          </motion.div>

          {/* Right — profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative min-h-[400px] md:min-h-0"
          >
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              fill
              className="object-cover object-top"
            />
            {/* Bottom fade into card */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#080e0a]/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a3a28]/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}*/

export default function ProfileSection() {
  return null;
}