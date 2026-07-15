"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "Tentang" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#pricing", label: "Paket" },
  { href: "#faq", label: "FAQ" },
];

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5 font-heading text-xl font-bold text-brown-dark">
      <svg viewBox="0 0 40 40" fill="none" className="h-9 w-9">
        <rect width="40" height="40" rx="10" fill="#4a2c1a" />
        <path
          d="M12 15h13a3 3 0 0 1 3 3v1a4 4 0 0 1-4 4h-1a7 7 0 0 1-6.9 6H16a7 7 0 0 1-7-7v-4a3 3 0 0 1 3-3Z"
          fill="#faf5ee"
        />
        <path
          d="M15 9c0 1.5-1.5 1.5-1.5 3M20 9c0 1.5-1.5 1.5-1.5 3"
          stroke="#c98a3d"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
      Kopi Senja
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cream-dark bg-cream/90 backdrop-blur-md">
      <nav className="mx-auto flex h-[68px] max-w-5xl items-center justify-between px-5">
        <Logo />
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium transition-colors hover:text-amber">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full bg-brown-dark px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-amber"
            >
              Reservasi
            </a>
          </li>
        </ul>
        <button
          aria-label="Menu"
          className="text-2xl text-brown-dark md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>
      {open && (
        <div className="border-t border-cream-dark bg-cream px-5 pb-5 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-brown-dark px-5 py-2.5 text-center text-sm font-medium text-white"
          >
            Reservasi
          </a>
        </div>
      )}
    </header>
  );
}
