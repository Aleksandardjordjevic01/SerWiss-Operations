"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface QuoteSectionProps {
  quote: React.ReactNode;
  name: string;
  role: string;
  image: string;
  reversed?: boolean;
}

export function QuoteSection({ quote, name, role, image, reversed = false }: QuoteSectionProps) {
  const photoRadius = reversed ? "56px 0px 56px 56px" : "0px 56px 56px 56px";

  const photoBlock = (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full md:w-90 lg:w-110 h-80 md:h-120 lg:h-135 overflow-hidden shadow-lg border border-slate-200 shrink-0"
      style={{ borderRadius: photoRadius }}
    >
      <Image src={image} alt={name} fill className="object-cover object-top" />
    </motion.div>
  );

  const textBlock = (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col"
    >
      <span
        className="font-heading text-slate-200 leading-none select-none mb-2 text-[4rem] md:text-[6rem]"
        style={{ lineHeight: 1 }}
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <div className="font-heading font-bold text-slate-900 text-lg md:text-xl lg:text-2xl leading-tight tracking-tight">
        {quote}
      </div>
      <div className="w-full h-px bg-slate-200 my-5 md:my-8" />
      <div>
        <p className="font-heading font-bold text-slate-900 text-base">{name}</p>
        <p className="font-sans text-slate-400 text-sm mt-0.5">{role}</p>
      </div>
    </motion.div>
  );

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-10 md:gap-12 lg:gap-20 items-start md:items-center">
        {reversed ? (
          <>
            {photoBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {photoBlock}
          </>
        )}
      </div>
    </section>
  );
}

export default function TestimonialSection() {
  return (
    <QuoteSection
      quote={
        <>
          <p>Our founder, Natascha Maksimovic, brings extensive experience from living and working in Switzerland, embedding the values of Swiss quality, precision, and reliability into every project.</p>
          <p className="mt-5">Combined with efficient delivery and competitive pricing, we ensure solutions that create lasting value for your business.</p>
        </>
      }
      name="Natascha Maksimovic"
      role="Founder, SerWiss Operations"
      image="/images/profile.jpg"
    />
  );
}

