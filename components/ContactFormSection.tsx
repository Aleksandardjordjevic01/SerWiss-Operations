"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const EuropeMap = dynamic(() => import("./EuropeMap"), { ssr: false });

const services = [
  "Process Optimization & Operational Excellence",
  "Financial Operations",
  "Nearshore Services from Serbia",
  "Other / Not sure yet",
];

export default function ContactFormSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, service, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setSent(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-[#eef6fc] px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-slate-900 text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
            Let&apos;s discuss<br />your next move.
          </h2>
          <p className="font-sans text-slate-500 text-base md:text-lg leading-relaxed max-w-xl mt-4">
            Whether you&apos;re looking to streamline operations, strengthen financial processes, or explore nearshore capabilities — we&apos;re ready to help.
          </p>
        </motion.div>

        {/* Body row — form only, map is absolute on section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 w-full lg:w-1/2"
        >
          {/* Form */}
          <div className="w-full">
            {sent ? (
              <div className="flex flex-col gap-4 py-4">
                <div className="w-10 h-10 rounded-full border-2 border-[#007AC1] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="#007AC1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-heading font-bold text-slate-900 text-xl">Message sent.</p>
                <p className="font-sans text-slate-500 text-sm">We&apos;ll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <UnderlineField id="name" placeholder="Name" required value={name} onChange={setName} />
                  <UnderlineField id="email" type="email" placeholder="Email" required value={email} onChange={setEmail} />
                </div>

                {/* Service */}
                <div className="relative">
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                    className="w-full bg-transparent border-b border-slate-300 pb-2 font-sans text-slate-400 text-sm focus:outline-none focus:border-slate-600 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Service of Interest</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="text-slate-700">{s}</option>
                    ))}
                  </select>
                  <svg className="absolute right-0 top-0 w-3.5 h-3.5 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {/* Message */}
                <UnderlineField id="message" placeholder="Message" value={message} onChange={setMessage} />

                {/* Error */}
                {error && (
                  <p className="font-sans text-red-500 text-sm">{error}</p>
                )}

                {/* Send */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-slate-900 hover:bg-[#007AC1] disabled:opacity-50 disabled:cursor-not-allowed text-white font-sans font-semibold text-xs tracking-widest uppercase px-10 py-3.5 rounded-full transition-colors duration-300 cursor-pointer"
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>

      </div>

      {/* Map — direct child of section, bleeds right edge */}
      <div className="hidden lg:block absolute top-0 bottom-0 right-[-8%] w-[55%] pointer-events-none">
        <EuropeMap />
      </div>
    </section>
  );
}

function UnderlineField({
  id,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
}: {
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-transparent border-b border-slate-300 pb-2 font-sans text-slate-700 text-sm placeholder:text-slate-400 focus:outline-none focus:border-slate-600 transition-colors"
    />
  );
}
