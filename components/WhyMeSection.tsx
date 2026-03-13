"use client";

import React from "react";
import { QuoteSection } from "@/components/TestimonialSection";

export default function WhyMeSection() {
  return (
    <QuoteSection
      id="my-story"
      quote={
        <div className="text-sm md:text-base lg:text-lg font-heading font-bold text-slate-900 leading-relaxed tracking-tight">
          <p>Founded by Natascha Maksimovic, SerWiss Operations brings over 20 years of international finance expertise — including 17 years at Novartis — to small and medium-sized enterprises. With Swiss precision and the advantages of nearshoring from Serbia, we deliver financial and administrative services that combine efficiency, transparency, and cost optimization.</p>
          <p className="mt-5">Our mission is simple: to streamline processes, provide reliable results, and give SMEs access to the same operational excellence that global corporations expect — at attractive prices. At SerWiss Operations, we bridge strategy and execution, helping businesses grow with confidence.</p>
        </div>
      }
      name="Natascha Maksimovic"
      role="Founder, SerWiss Operations"
      image="/images/profile2.jpg"
      reversed
    />
  );
}
