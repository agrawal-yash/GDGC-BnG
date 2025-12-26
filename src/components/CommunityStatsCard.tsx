"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const stats = [
  { value: 10000, suffix: "+", label: "Community Members" },
  { value: 1000000, suffix: "+", label: "Annual Reach" },
  { value: 100, suffix: "+", label: "Events & Initiatives" },
  { value: 5, suffix: "+", label: "Years of Community Impact" },
];

function formatNumber(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(0)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
  return num.toString();
}

export default function CommunityStatsCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const hasPlayedRef = useRef(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !cardRef.current || hasPlayedRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      hasPlayedRef.current = true;
      return;
    }

    const card = cardRef.current;
    const statElements = card.querySelectorAll(".stat-number");

    // Animate count-up for each stat
    statElements.forEach((el, index) => {
      const finalValue = stats[index].value;
      const obj = { val: 0 };

      gsap.to(obj, {
        val: finalValue,
        duration: 1.5,
        ease: "power2.out",
        delay: index * 0.1,
        onUpdate: () => {
          el.textContent = formatNumber(Math.round(obj.val));
        },
        onComplete: () => {
          if (index === statElements.length - 1) {
            hasPlayedRef.current = true;
          }
        },
      });
    });
  }, [mounted]);

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div
          ref={cardRef}
          className="relative bg-gradient-to-br from-[#0a0b0d] via-[#0f1113] to-[#0a0b0d] rounded-3xl border border-white/10 p-12 md:p-16 overflow-hidden backdrop-blur-xl"
          style={{
            boxShadow:
              "0 0 60px -15px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
          }}
        >
          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left: Text content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Community Reach
                <br />
                at Scale
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
                GDG Cloud Mumbai connects developers, startups, and tech leaders
                through large-scale events, workshops, and hackathons—offering
                brands direct access to a highly engaged technical audience.
              </p>
            </div>

            {/* Right: Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-blue-400/10 rounded-2xl p-6 backdrop-blur-sm"
                  style={{
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.08)",
                  }}
                >
                  <div className="flex items-baseline gap-1">
                    <span className="stat-number text-3xl md:text-4xl font-bold text-white">
                      0
                    </span>
                    <span className="text-2xl md:text-3xl font-bold text-blue-400">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-400 mt-2 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Ambient glow */}
          <div
            className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"
            style={{ transform: "translate(50%, -50%)" }}
          />
        </div>
      </div>
    </section>
  );
}
