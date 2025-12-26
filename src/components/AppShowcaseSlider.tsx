"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const apps = [
    {
        id: "tldraw",
        title: "Tldraw",
        description: "Prototyping a new natural language computing experience on an infinite canvas with Gemini 2.0",
        logo: "tldraw",
        gradient: "from-[#0f172a] via-[#1e293b] to-[#334155]",
    },
    {
        id: "rooms",
        title: "Rooms",
        description: "Unlocking richer avatar interactions with Gemini 2.0 text and audio capabilities",
        logo: "Rooms",
        gradient: "from-[#1a1c1e] via-[#3d3030] to-[#2c2e30]",
    },
    {
        id: "toonsutra",
        title: "Toonsutra",
        description: "Leveraging contextual multilingual translation abilities of Gemini 2.0 to make comics and webtoons accessible to audiences in India across regional languages.",
        logo: "toonsutra",
        gradient: "from-[#1a1c1e] via-[#4d3a2e] to-[#1a1c1e]",
    },
    {
        id: "viggle",
        title: "Viggle",
        description: "Experimenting with Gemini 2.0 to create virtual characters and audio narration for their AI powered video platform",
        logo: "VIGGLE",
        gradient: "from-[#062016] via-[#2d4a3e] to-[#062016]",
    },
    {
        id: "sublayer",
        title: "Sublayer",
        description: "See how the Ruby-based AI agent framework empowers developer teams to be more productive with the power of Gemini models.",
        logo: "SUBLAYER",
        gradient: "from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]",
    },
    {
        id: "sourcegraph",
        title: "Sourcegraph",
        description: "Learn how Cody AI saw big quality gains using Gemini's massive context window.",
        logo: "Sourcegraph",
        gradient: "from-[#1e1431] via-[#3a2a5d] to-[#1e1431]",
    },
    {
        id: "agentops",
        title: "AgentOps",
        description: "Explore how AgentOps provides cost-effective and powerful LLM-powered agent observability for enterprises using Gemini API.",
        logo: "AgentOps",
        gradient: "from-[#1a1c1e] via-[#2d2e31] to-[#1a1c1e]",
    }
];

export default function AppShowcaseSlider() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        gsap.fromTo(
            sectionRef.current.querySelectorAll(".animate-reveal"),
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            }
        );
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (!scrollContainerRef.current) return;
        const scrollAmount = 400;
        scrollContainerRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <section ref={sectionRef} className="relative py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                <h2 className="animate-reveal text-center text-4xl md:text-6xl font-medium text-white leading-tight">
                    Explore apps built with <br />
                    the Gemini API
                </h2>

                <div className="relative animate-reveal">
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-4 md:px-0"
                    >
                        {apps.map((app) => (
                            <div
                                key={app.id}
                                className="min-w-[320px] md:min-w-[400px] bg-[#16171a] rounded-[2.5rem] overflow-hidden border border-white/5 flex flex-col snap-start hover:border-white/10 transition-colors group"
                            >
                                {/* App Preview Header */}
                                <div className={`h-64 bg-gradient-to-br ${app.gradient} flex items-center justify-center p-12 transition-transform duration-500 group-hover:scale-[1.02]`}>
                                    <span className="text-white text-4xl md:text-5xl font-bold tracking-tight opacity-90 group-hover:opacity-100 transition-opacity">
                                        {app.logo}
                                    </span>
                                </div>

                                {/* App Info Body */}
                                <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-medium text-white">{app.title}</h3>
                                        <p className="text-gray-400 font-light text-sm leading-relaxed">
                                            {app.description}
                                        </p>
                                    </div>
                                    <div className="pt-6">
                                        <button className="bg-[#1c1d20] hover:bg-[#2c2d30] text-white border border-white/10 px-6 py-2.5 rounded-full text-sm font-medium transition-all active:scale-95">
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-start gap-4 mt-8 px-4">
                        <button
                            onClick={() => scroll("left")}
                            className="w-12 h-12 rounded-full bg-[#1c1d20] border border-white/10 flex items-center justify-center text-white hover:bg-[#2c2d30] transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-12 h-12 rounded-full bg-[#1c1d20] border border-white/10 flex items-center justify-center text-white hover:bg-[#2c2d30] transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
