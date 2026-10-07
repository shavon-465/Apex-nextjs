"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Navbar — recreated from the Framer "Navbar" (desktop) and
 * "Navbar movile" (tablet/mobile) components.
 *
 * Desktop (lg+): dark pill with logo + "Menu" + hamburger icon; on hover it
 *   widens (320px -> 600px) and cross-fades to Service / Why us / Contact with
 *   the icon swapping to an X.
 * Mobile/tablet (<lg): dark bar (56px) with logo + hamburger; tapping opens a
 *   320px menu (Service / Why us right-aligned + full-width Contact), icon -> X.
 *
 * Dark #1e1e1e, Instrument Sans 600. Desktop: 4px radius, 12px/24px padding.
 * Mobile: 8px radius, 16px/12px padding.
 */

const FONT = "[font-family:var(--font-instrument),ui-sans-serif,sans-serif]";
const LINKS = [
  { label: "Service", href: "#categories" },
  { label: "Why us", href: "#why-us" },
];

function Logo({ className }: { className: string }) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      <Image
        src="/Apex-lp-assets/apex-logo-nav.png"
        alt="Apex"
        fill
        priority
        sizes="73px"
        className="object-contain object-left"
      />
    </div>
  );
}

function Burger({ className = "" }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path d="M3 6h18M3 12h18M3 18h18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path d="M5 5l14 14M19 5L5 19" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ---------- Desktop (lg+): hover-expand pill, in flow top-left ---------- */}
      <div className={`hidden lg:block ${FONT}`}>
        <div
          className="group relative flex flex-row items-center shrink-0
                     w-[320px] hover:w-[600px] h-[48px] p-[12px_24px]
                     bg-[#1e1e1e] rounded-[4px] overflow-hidden
                     transition-[width] duration-[600ms] ease-[cubic-bezier(0.25,0,0,0.98)]"
        >
          <Logo className="w-[62px] h-[24px]" />

          {/* Icon at far right — hamburger (collapsed) / X (hover) */}
          <div className="absolute right-[24px] top-1/2 -translate-y-1/2 w-[24px] h-[24px]">
            <Burger className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-[250ms]" />
            <CloseIcon className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms]" />
          </div>

          {/* Collapsed label (left of the icon) */}
          <span
            className="absolute right-[56px] top-1/2 -translate-y-1/2 whitespace-nowrap
                       text-[14px] leading-[1.2] font-semibold text-white
                       opacity-100 group-hover:opacity-0 transition-opacity duration-[250ms]"
          >
            Menu
          </span>

          {/* Expanded links (left of the icon) */}
          <div
            className="absolute right-[56px] top-1/2 -translate-y-1/2 flex flex-row items-center gap-[12px] whitespace-nowrap
                       opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] group-hover:delay-[150ms]"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[12px] leading-[1.2] font-semibold text-white no-underline hover:opacity-80 transition-opacity"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#"
              className="flex items-center justify-center bg-white rounded-[4px] px-[8px] py-[4px] no-underline hover:opacity-90 transition-opacity"
            >
              <span className="text-[12px] leading-[1.2] font-semibold text-[#3b3b3b]">Contact</span>
            </a>
          </div>
        </div>
      </div>

      {/* ---------- Mobile / tablet (<lg): dark bar with hamburger ---------- */}
      <div className={`lg:hidden absolute z-20 top-[16px] left-[20px] right-[20px] md:top-[24px] md:left-[32px] md:right-[32px] ${FONT}`}>
        <div
          className={`flex flex-col justify-between p-[16px_12px] bg-[#1e1e1e] rounded-[8px] overflow-hidden
                      transition-[height] duration-[400ms] ease-[cubic-bezier(0.25,0,0.14,1)]
                      ${open ? "h-[320px]" : "h-[56px]"}`}
        >
          {/* Top row */}
          <div className="flex flex-row items-center justify-between shrink-0">
            <Logo className="w-[54px] h-[21px]" />
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex items-center justify-center w-[24px] h-[24px] shrink-0"
            >
              {open ? <CloseIcon /> : <Burger />}
            </button>
          </div>

          {/* Menu (revealed at the bottom when open) */}
          <div
            className={`flex flex-col items-end gap-[40px] shrink-0 transition-opacity duration-[300ms] ${
              open ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex flex-col items-end gap-[16px]">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[24px] leading-[1.2] font-semibold text-white no-underline"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="w-full flex items-center justify-center bg-white rounded-[4px] p-[8px] no-underline"
            >
              <span className="text-[14px] leading-[1.2] font-semibold text-[#3b3b3b]">Contact</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
