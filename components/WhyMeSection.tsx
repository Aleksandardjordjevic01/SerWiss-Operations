"use client";

import React from "react";
import { QuoteSection } from "@/components/TestimonialSection";

export default function WhyMeSection() {
  return (
    <QuoteSection
      id="my-story"
      quote={
        <div className="text-sm md:text-base text-justify lg:text-lg font-heading font-bold text-slate-900 leading-relaxed tracking-tight">
          <p>Founded by Natascha Maksimovic, with over 20 years of international finance expertise covering various sectors such as pharma, SerWiss Operations combines Swiss precision with the advantages of nearshoring from Serbia. We deliver managed services that bring efficiency, transparency, and cost optimization to SMEs.</p>
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
