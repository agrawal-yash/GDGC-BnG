"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const timelineData = [
    {
        title: "Registration Starts",
        date: "December 25, 2024",
        description: "Sign up and form your teams",
    },
    {
        title: "Workshop 1",
        date: "January 10, 2025",
        description: "First workshop session",
    },
    {
        title: "Workshop 2",
        date: "January 17, 2025",
        description: "Second workshop session",
    },
    {
        title: "Pre Hackathon",
        date: "January 24, 2025",
        description: "Pre hackathon at Mumbai & Pune",
    },
    {
        title: "Finale",
        date: "January 26, 2025",
        description: "Grand finale at Mumbai",
    },
];

export default function TimelineSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const cards = containerRef.current.querySelectorAll(".timeline-card");

        // Staggered reveal for cards
        gsap.fromTo(cards,
            {
                opacity: 0,
                x: (i) => i % 2 === 0 ? -50 : 50,
                y: 30
            },
            {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            }
        );

        // Animated vertical line
        if (lineRef.current) {
            gsap.fromTo(lineRef.current,
                { scaleY: 0 },
                {
                    scaleY: 1,
                    duration: 1.5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                        end: "bottom 80%",
                        scrub: true,
                    }
                }
            );
        }
    }, []);

    return (
        <section ref={containerRef} className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4 mb-20 animate-reveal">
                    <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">
                        Timeline
                    </h2>
                    <p className="text-gray-400 text-lg font-light">
                        Mark your calendars for the journey ahead
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div
                        ref={lineRef}
                        className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent origin-top hidden md:block"
                    />

                    <div className="space-y-12 relative z-10">
                        {timelineData.map((item, index) => (
                            <div
                                key={index}
                                className={`timeline-card flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content Side */}
                                <div className={`flex-1 w-full ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                                    <div className="bg-[#16171a] p-8 rounded-2xl border border-white/5 shadow-xl hover:border-white/10 transition-colors group">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                            <h3 className="text-2xl font-medium text-white group-hover:text-blue-400 transition-colors">
                                                {item.title}
                                            </h3>
                                            <span className="text-sm font-mono text-blue-400/80 bg-blue-400/5 px-3 py-1 rounded-full border border-blue-400/10">
                                                {item.date}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 font-light leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Dot */}
                                <div className="relative flex items-center justify-center w-8 h-8 flex-shrink-0 z-20">
                                    <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] border-4 border-[#0d0e10]" />
                                </div>

                                {/* Empty side for spacing */}
                                <div className="flex-1 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
