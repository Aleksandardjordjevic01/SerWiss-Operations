"use client";

import { motion } from "framer-motion";
import React from "react";

export default function FeaturesSection() {
  return (
    <section id="services" className="w-full bg-white pt-24 pb-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-center gap-2 border border-slate-200 rounded-full px-4 py-2 text-sm text-slate-600 font-sans"
        >
          <span className="w-5 h-5 rounded-full border-2 border-slate-800 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-slate-800" />
          </span>
          Our Services
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-heading font-bold text-slate-900 text-3xl md:text-4xl leading-tight tracking-tight"
        >
          Swiss Quality, Precision,<br />and Reliability in Every Project
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-sans font-light text-slate-500 text-base md:text-lg max-w-2xl leading-relaxed"
        >
          From financial administration to controlling — we handle the operational work so you can focus on what matters most.
        </motion.p>

      </div>
    </section>
  );
}
