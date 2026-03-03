"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#home", label: "Home", bold: true },
  { href: "#my-story", label: "My Story" },
  { href: "#services", label: "Services" },
  { href: "#references", label: "References" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 lg:px-20 bg-black/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo-dark.png"
            alt="Logo"
            width={120}
            height={40}
            className="h-8 md:h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-base">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                link.bold ? "text-white font-bold" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 origin-center ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="flex flex-col gap-1 pt-4 pb-2 border-t border-white/10 mt-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`py-3 px-2 font-sans text-base transition-colors rounded-lg hover:bg-white/10 ${
                link.bold ? "text-white font-bold" : "text-white/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
