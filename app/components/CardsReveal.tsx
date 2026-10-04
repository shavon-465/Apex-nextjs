"use client";

import { useEffect, useRef } from "react";

/**
 * Wraps the category grid and, on mobile/tablet only (below the `lg`
 * breakpoint = 1024px), toggles `.is-active` on each card while it straddles
 * the vertical middle of the viewport — driving the same expand/collapse the
 * cards show on hover at desktop. Desktop keeps the pointer hover trigger.
 */
export default function CardsReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const cards = Array.from(
      root.querySelectorAll<HTMLElement>(":scope > .group"),
    );
    const mq = window.matchMedia("(max-width: 1023.98px)");
    let observer: IntersectionObserver | null = null;

    const start = () => {
      if (observer) return;
      observer = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            (e.target as HTMLElement).classList.toggle(
              "is-active",
              e.isIntersecting,
            );
          }
        },
        // Collapse the root to a 1px line at the viewport's vertical center:
        // an element "intersects" only while it overlaps that midline.
        { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
      );
      cards.forEach((c) => observer!.observe(c));
    };

    const stop = () => {
      observer?.disconnect();
      observer = null;
      cards.forEach((c) => c.classList.remove("is-active"));
    };

    const apply = () => {
      if (mq.matches) start();
      else stop();
    };

    apply();
    mq.addEventListener("change", apply);
    return () => {
      mq.removeEventListener("change", apply);
      stop();
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
