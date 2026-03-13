"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const columns = [
  {
    logo: "/images/salvioli.png",
    name: "Salvioli AG",
    category: "Management Consulting",
    services: [
      "Business Strategy & Transformation",
      "Business Value & Sustainability",
      "Finance & Performance Management",
      "Managed Services & Business Process Operations",
    ],
  },
  {
    logo: "/images/logo.png",
    name: "SerWiss Operations",
    category: "Operational Services",
    services: [
      "Financial Services",
      "Financial Accounting Operations",
    ],
  },
  {
    logo: "/images/comtrade.png",
    name: "Comtrade Systems Integration",
    category: "Technology Enablement",
    services: [
      "Business Automation",
      "Business Applications",
      "Data & AI",
      "Infrastructure Services",
      "Cyber Security",
      "Software Asset Management",
    ],
  },
];

export default function PartnerMatrixSection() {
  return (
    <section id="references" className="relative w-full px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-white overflow-hidden">

      {/* Grid overlay - light version */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.09) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-col gap-5 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a2d5e]" />
              <p className="font-sans text-[#0a2d5e] text-xs tracking-widest uppercase font-semibold">
                Integrated Service Portfolio
              </p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
              viewport={{ once: true }}
              className="font-heading font-bold text-slate-900 text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight"
            >
              Where Strategy Meets<br className="hidden md:block" />
              Execution at Every Level
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-sans text-slate-500 text-sm md:text-base leading-relaxed max-w-sm md:text-right"
          >
            The partners view the collaboration as a long-term strategic move to strengthen their presence in the DACH market and to better support clients throughout their transformation and operational lifecycle.
          </motion.p>
        </div>

        {/* Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((col, i) => (
            <motion.div
              key={col.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Logo header */}
              <div className="px-6 py-6 flex items-center bg-white border-b border-slate-200">
                <div className="h-7 flex items-center">
                  <Image
                    src={col.logo}
                    alt={col.name}
                    width={110}
                    height={28}
                    className="h-7 w-auto max-w-[110px] object-contain object-left"
                  />
                </div>
              </div>

              {/* Category label */}
              <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2d5a3d] shrink-0" />
                <p className="font-heading font-bold text-slate-700 text-xs tracking-widest uppercase">
                  {col.category}
                </p>
              </div>

              {/* Services */}
              <div className="px-5 py-5 flex flex-col gap-2 flex-1 bg-white">
                {col.services.map((s, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.05 + j * 0.04, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 rounded-lg bg-slate-50 border border-slate-100 px-4 py-3 hover:border-slate-300 hover:bg-slate-100 transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span className="font-sans text-slate-600 text-xs leading-snug">{s}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
