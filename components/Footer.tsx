"use client";

import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white px-6 md:px-12 lg:px-20 pt-32 pb-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        {/* Top: logo + tagline left, columns right */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 justify-between">

          {/* Logo + tagline */}
          <div className="flex flex-col gap-6 max-w-xs">
            <Image
              src="/images/logo.png"
              alt="SerWiss Operations"
              width={180}
              height={58}
              className="h-12 w-auto object-contain object-left self-start"
            />
            <p className="font-sans text-slate-400 text-sm leading-relaxed">
              Your dedicated partner for Nearshore Managed Services from Serbia, with a strong focus on the Swiss market.
            </p>
          </div>

          {/* Columns */}
          <div className="flex flex-col sm:flex-row gap-10 md:gap-20">

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <p className="font-heading font-bold text-slate-900 text-xs tracking-widest uppercase">Contact</p>
              <div className="flex flex-col gap-2">
                <a href="mailto:natascha.maksimovic@serwissoperations.ch" className="font-sans text-slate-500 text-sm hover:text-slate-900 transition-colors">
                  natascha.maksimovic@serwissoperations.ch
                </a>
                <a href="tel:+381652081206" className="font-sans text-slate-500 text-sm hover:text-slate-900 transition-colors">
                  +381 65 208 12 06
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-4">
              <p className="font-heading font-bold text-slate-900 text-xs tracking-widest uppercase">Address</p>
              <div className="flex flex-col gap-1">
                <p className="font-sans text-slate-500 text-sm">SerWiss Operations d.o.o</p>
                <p className="font-sans text-slate-500 text-sm">Ul. Jove Ilice 14</p>
                <p className="font-sans text-slate-500 text-sm">11000 Belgrad, Serbien</p>
              </div>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-4">
              <p className="font-heading font-bold text-slate-900 text-xs tracking-widest uppercase">Services</p>
              <div className="flex flex-col gap-2">
                <span className="font-sans text-slate-500 text-sm">Process Optimization</span>
                <span className="font-sans text-slate-500 text-sm">Financial Operations</span>
                <span className="font-sans text-slate-500 text-sm">Nearshore Services</span>
              </div>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-100" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-2">
          <p className="font-sans text-slate-300 text-xs">
            © {new Date().getFullYear()} SerWiss Operations d.o.o. All rights reserved.
          </p>
          <p className="font-sans text-slate-300 text-[10px]">
            Design &amp; Developed by{" "}
            <a
              href="https://digantix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-slate-400 hover:text-slate-600 transition-colors"
            >
              Digantix
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
