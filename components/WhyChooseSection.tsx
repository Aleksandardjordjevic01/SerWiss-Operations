"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const reasons = [
  {
    icon: "01",
    title: "Swiss Precision, Global Impact",
    desc: "Guided by Swiss quality standards, we design efficient delivery models and scalable processes that fuel international growth.",
  },
  {
    icon: "02",
    title: "Nearshore Advantage from Serbia",
    desc: "Access highly skilled talent at competitive costs, ensuring flexibility and speed without compromising excellence.",
  },
  {
    icon: "03",
    title: "Financial Operations That Drive Growth",
    desc: "Structured financial planning aligned with your business needs keeps you resilient, cost-efficient, and future-ready.",
  },
  {
    icon: "04",
    title: "Seamless Integration & Transparency",
    desc: "Smooth system integration, clear processes, and effective stakeholder management build trust and clarity across your organization.",
  },
  {
    icon: "05",
    title: "Resilience Meets Flexibility",
    desc: "In a fast-changing world, we help you adapt quickly while maintaining sustainable performance.",
  },
  {
    icon: "06",
    title: "Your Bridge Between Vision and Execution",
    desc: "We connect strategy with delivery, ensuring measurable impact and long-term success.",
  },
];

export default function WhyChooseSection() {
  return (
    <section
      className="w-full px-6 md:px-12 lg:px-20 py-24 md:py-32"
      style={{
        background:
          "linear-gradient(135deg, #080e0a 0%, #0d1a10 40%, #1a3a28 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        {/* Header */}
        <div className="flex flex-col gap-5 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/logo-dark.png"
              alt="SerWiss Operations"
              width={100}
              height={32}
              className="h-8 w-auto"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-heading font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight"
          >
            Why Choose SerWiss Operations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-sans font-light text-white/60 text-base md:text-lg leading-relaxed"
          >
            Turning strategy into success. At SerWiss Operations, we don&apos;t just manage operations — we elevate them.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {reasons.map((r, i) => (
            <motion.div
              key={r.icon}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group bg-[#080e0a] hover:bg-[#0d1a10] transition-colors duration-300 p-8 md:p-10 flex flex-col gap-5"
            >
              <span className="font-heading italic text-[#b8f04a]/40 text-sm tracking-widest select-none">
                /{r.icon}
              </span>
              <h3 className="font-heading font-bold text-white text-base md:text-lg leading-snug tracking-tight group-hover:text-[#b8f04a] transition-colors duration-300">
                {r.title}
              </h3>
              <p className="font-sans text-white/50 text-sm leading-relaxed">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-10 max-w-3xl"
        >
          <p className="font-sans text-white/50 text-sm md:text-base leading-relaxed">
            <span className="font-semibold text-white/80">The Why:</span> Because success isn&apos;t just about having a plan — it&apos;s about executing it flawlessly. SerWiss Operations is your partner in operational excellence, financial discipline, and global expansion.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
