"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Navbar — recreated 1:1 from the Framer "Navbar" (desktop) and
 * "Navbar movile" (tablet/mobile) components.
 *
 * Desktop (lg+): dark pill showing the logo + "MENU"; on hover it widens
 *   (321px -> 600px) and cross-fades to SERVICES / WHY US / CONTACT.
 * Mobile/tablet (<lg): dark bar with logo + hamburger; tapping opens a
 *   full menu (SERVICES / WHY US right-aligned at 32px + full-width CONTACT).
 *
 * Dark #1e1e1e, 8px radius, 20px padding, Instrument Sans 600 — all per Framer.
 */

const FONT = "[font-family:var(--font-instrument),ui-sans-serif,sans-serif]";
const LINKS = [
  { label: "SERVICES", href: "#categories" },
  { label: "WHY US", href: "#why-us" },
];

function Logo() {
  return (
    <div className="relative w-[73px] h-[28.5px] shrink-0">
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

function Burger() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 6h18M3 12h18M3 18h18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
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
                     w-[321px] hover:w-[600px] h-[68px] p-[20px]
                     bg-[#1e1e1e] rounded-[8px] overflow-hidden
                     transition-[width] duration-[600ms] ease-[cubic-bezier(0.25,0,0,0.98)]"
        >
          <Logo />

          {/* Collapsed label */}
          <span
            className="absolute right-[20px] top-1/2 -translate-y-1/2 whitespace-nowrap
                       text-[16px] leading-[1.2] font-semibold text-white
                       opacity-100 group-hover:opacity-0 transition-opacity duration-[250ms]"
          >
            MENU
          </span>

          {/* Expanded links */}
          <div
            className="absolute right-[20px] top-1/2 -translate-y-1/2 flex flex-row items-center gap-[12px] whitespace-nowrap
                       opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] group-hover:delay-[150ms]"
          >
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[16px] leading-[1.2] font-semibold text-white no-underline hover:opacity-80 transition-opacity"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#"
              className="flex items-center justify-center bg-white rounded-[4px] px-[8px] py-[4px] no-underline hover:opacity-90 transition-opacity"
            >
              <span className="text-[12px] leading-[1.2] font-semibold text-[#3b3b3b]">CONTACT</span>
            </a>
          </div>
        </div>
      </div>

      {/* ---------- Mobile / tablet (<lg): dark bar with hamburger ---------- */}
      <div className={`lg:hidden absolute z-20 top-[16px] left-[20px] right-[20px] md:top-[24px] md:left-[32px] md:right-[32px] ${FONT}`}>
        <div className="flex flex-col gap-[20px] p-[20px] bg-[#1e1e1e] rounded-[8px] overflow-hidden">
          {/* Top row */}
          <div className="flex flex-row items-center justify-between">
            <Logo />
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

          {/* Collapsible menu */}
          <div
            className={`grid transition-[grid-template-rows,opacity] duration-[400ms] ease-[cubic-bezier(0.25,0,0.14,1)] ${
              open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="flex flex-col items-end gap-[20px] pt-[4px]">
                <div className="flex flex-col items-end gap-[12px]">
                  {LINKS.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="text-[32px] leading-[1.2] font-semibold text-white no-underline"
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
                  <span className="text-[14px] leading-[1.2] font-semibold text-[#3b3b3b]">CONTACT</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
