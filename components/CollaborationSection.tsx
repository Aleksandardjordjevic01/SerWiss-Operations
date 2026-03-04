"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const partners = [
  {
    logo: "/images/logo.png",
    name: "SerWiss Operations",
    focus: "Managed Operational Services",
    location: "Belgrade, Serbia",
  },
  {
    logo: "/images/salvioli.png",
    name: "Salvioli AG",
    focus: "Strategy, Business & Financial Consulting",
    location: "Basel, Switzerland",
  },
  {
    logo: "/images/comtrade.png",
    name: "Comtrade Systems Integration",
    focus: "Technology, Data & AI, Cybersecurity",
    location: "Regional DACH",
  },
];

export default function CollaborationSection() {
  return (
    <section className="w-full bg-white px-6 md:px-12 lg:px-20 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">

        {/* Header */}
        <div className="flex flex-col gap-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#0a2d5e]" />
            <p className="font-sans text-[#0a2d5e] text-xs tracking-widest uppercase font-semibold">
              Press Release &mdash; January 2026
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-heading font-bold text-slate-900 text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight"
          >
            Three Leaders.<br className="hidden md:block" />
            One Integrated Vision.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-sans text-slate-500 text-base md:text-lg leading-relaxed max-w-3xl"
          >
            SerWiss Operations, Salvioli AG, and Comtrade Systems Integration announce a strategic collaboration to deliver an expanded, integrated service portfolio for clients in the DACH region.
          </motion.p>
        </div>

        {/* Partners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-100 rounded-2xl overflow-hidden">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 flex flex-col gap-4 group hover:bg-[#F7F9FA] transition-colors duration-300"
            >
              <div className="h-8 flex items-center">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={120}
                  height={32}
                  className="h-8 w-auto max-w-[120px] object-contain object-left"
                />
              </div>
              <p className="font-sans text-slate-500 text-sm leading-relaxed flex-1">
                {p.focus}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="font-sans text-slate-400 text-xs">{p.location}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Body text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-5 max-w-4xl"
        >
          <p className="font-sans text-slate-600 text-base leading-relaxed">
            The collaboration combines expertise in Strategy, Business and Financial consulting, Technology and Systems Integration, Data & AI, Cybersecurity, and Managed Operational Services.
          </p>
          <p className="font-sans text-slate-600 text-base leading-relaxed">
            By aligning strategic advisory, implementation, and run-and-operate capabilities, the partners enable clients to address complex transformation and operational challenges end-to-end.
          </p>
          <p className="font-sans text-slate-600 text-base leading-relaxed">
            Through this collaboration, clients benefit from a single, coordinated service model, modular engagement options, and delivery teams that combine regional market proximity with international technology and operations expertise.
          </p>

          {/* Pull quote */}
          <div className="border-l-2 border-[#2d5a3d] pl-6 my-4">
            <p className="font-heading font-bold text-slate-900 text-lg md:text-xl leading-snug">
              &ldquo;Enabling clients to address complex transformation and operational challenges end-to-end.&rdquo;
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
