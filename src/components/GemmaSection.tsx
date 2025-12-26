"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function GemmaSection() {
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

    return (
        <section ref={sectionRef} className="relative py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto bg-[#16171a] rounded-[3rem] p-8 md:p-20 border border-white/5 relative overflow-visible shadow-2xl">

                {/* Header Icon (Google AI logo) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#16171a] p-2 border border-white/10 rounded-lg shadow-xl z-20">
                    <div className="w-5 h-5 bg-gradient-to-br from-blue-400 via-purple-500 to-red-400 rounded-sm opacity-80" />
                </div>

                <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8 animate-reveal">
                        <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight">
                            Own your AI with <br />
                            Gemma open models
                        </h2>
                        <p className="text-gray-400 text-lg font-light leading-relaxed max-w-lg">
                            Build custom AI solutions and retain complete control.
                            Tailor Gemma models, built from the same research and
                            technology as Gemini, with your own data.
                        </p>
                        <button className="bg-[#1a73e8] hover:bg-[#1967d2] text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/20">
                            Build with Gemma
                        </button>
                    </div>

                    {/* Right: Scientific Star Visual */}
                    <div className="relative h-[400px] flex items-center justify-center animate-reveal">
                        <div className="relative w-full max-w-[400px] aspect-square">
                            {/* Main Star Graphic */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* Grid/Circle Background */}
                                <div className="absolute inset-0 border border-blue-500/10 rounded-full scale-110" />
                                <div className="absolute inset-0 border border-blue-500/5 rounded-full scale-125" />

                                {/* Geometric Crosshair */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                    <div className="w-px h-full bg-blue-500/50" />
                                    <div className="h-px w-full bg-blue-500/50" />
                                </div>

                                {/* Central Star Shape */}
                                <div className="relative z-10 w-40 h-40">
                                    <svg viewBox="0 0 100 100" className="w-full h-full text-blue-400/80 drop-shadow-[0_0_20px_rgba(96,165,250,0.4)]">
                                        <path
                                            fill="currentColor"
                                            d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z"
                                            className="opacity-40"
                                        />
                                        <circle cx="50" cy="50" r="15" className="fill-none stroke-current stroke-[0.5]" />
                                        <circle cx="50" cy="50" r="30" className="fill-none stroke-current stroke-[0.2] opacity-50" />
                                        <path d="M50 20 V80 M20 50 H80" className="stroke-current stroke-[0.2]" />
                                    </svg>
                                </div>
                            </div>

                            {/* Floating Icons from Reference */}
                            <div className="absolute top-[10%] right-[10%] w-12 h-12 bg-[#1a1b1e] border border-white/5 rounded-full flex items-center justify-center shadow-2xl animate-float-slow">
                                <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                                </svg>
                            </div>

                            <div className="absolute top-[25%] left-[0%] w-12 h-12 bg-[#1a1b1e] border border-white/5 rounded-full flex items-center justify-center shadow-2xl animate-float-delayed">
                                <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                </svg>
                            </div>

                            <div className="absolute bottom-[20%] right-[0%] w-10 h-10 bg-[#1a1b1e] border border-white/5 rounded-xl flex items-center justify-center shadow-2xl animate-float">
                                <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
