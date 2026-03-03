"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const services = [
  {
    number: "/01",
    title: "Process Optimization & Operational Excellence",
    intro: "We help organizations achieve sustainable performance improvements by streamlining financial processes, eliminating inefficiencies, and fostering a culture of continuous improvement. Our approach combines proven methodologies with practical execution, ensuring measurable results in productivity, quality, and customer satisfaction.",
    bullets: [
      "Seamless system integration to connect tools and processes without disruption",
      "Efficient workflows for higher productivity, reducing manual effort and delays",
      "Aligning finance with business needs to ensure strategic and operational coherence",
      "Driving efficiency and quality across all functions for measurable impact",
      "Sustainable performance that lasts beyond short-term gains",
    ],
  },
  {
    number: "/02",
    title: "Financial Operations",
    intro: "Our financial operations services ensure accuracy, transparency, and efficiency in managing your company's financial workflows. We support organizations in building robust structures that enable growth and strategic decision-making.",
    bullets: [
      "Structured financial planning that provides clarity and control over resources",
      "Transparent processes to ensure compliance and trust across all stakeholders",
      "Future-ready strategies designed to adapt to changing markets and business needs",
      "Bridging finance, technology, and business for integrated and agile solutions",
      "Effective stakeholder management – Business Partnering to align goals and drive collaboration",
      "Harmonizing diverse interests to create sustainable value across the organization",
    ],
  },
  {
    number: "/03",
    title: "Nearshore Services from Serbia",
    intro: "Leverage the advantages of nearshoring with our highly skilled Serbian teams. We provide cost-effective, flexible, and reliable operational support across finance, analytics, and business processes. Serbia offers a unique blend of European time-zone alignment, multilingual talent, and strong technical expertise.",
    bullets: [
      "Seamless collaboration across borders to ensure smooth integration with your Swiss operations",
      "Efficient resource allocation that balances cost-effectiveness with high-quality delivery",
      "Scalable solutions tailored to evolving business needs and market demands",
      "Driving efficiency and quality through structured processes and proven methodologies",
      "Sustainable partnerships built on trust, transparency, and long-term value creation",
    ],
  },
];

export default function ServicesCardsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="w-full bg-white px-6 md:px-12 lg:px-20 pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="w-full h-px bg-slate-200" />

        {services.map((s, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              viewport={{ once: true }}
              className="border-b border-slate-200"
            >
              {/* Header row */}
              <div
                className="group grid grid-cols-[56px_1fr_auto] md:grid-cols-[80px_1fr_auto] items-center gap-6 md:gap-12 py-10 md:py-14 cursor-pointer"
                onClick={() => toggle(i)}
              >
                <Image
                  src="/images/logo-sec.png"
                  alt="logo"
                  width={28}
                  height={28}
                  className="object-contain select-none"
                />

                <h3 className={`font-heading font-bold text-lg md:text-xl lg:text-2xl leading-none tracking-tight transition-colors duration-300 ${isOpen ? "text-[#2d5a3d]" : "text-slate-900 group-hover:text-[#2d5a3d]"}`}>
                  {s.title}
                </h3>

                {/* Plus / Minus toggle */}
                <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:border-[#2d5a3d]">
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`font-sans font-light text-xl leading-none select-none ${isOpen ? "text-[#2d5a3d]" : "text-slate-400"}`}
                  >
                    +
                  </motion.span>
                </div>
              </div>

              {/* Accordion content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 md:pb-14 pl-[calc(56px+24px)] md:pl-[calc(80px+48px)] pr-4 md:pr-0 max-w-3xl">
                      <p className="font-sans text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                        {s.intro}
                      </p>
                      <ul className="flex flex-col gap-3">
                        {s.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2d5a3d] shrink-0" />
                            <span className="font-sans text-slate-500 text-sm md:text-base leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
