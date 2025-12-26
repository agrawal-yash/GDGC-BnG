"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ResponsibleAISection() {
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
            <div className="max-w-7xl mx-auto bg-[#16171a] rounded-[3rem] p-8 md:p-16 border border-white/5 relative overflow-hidden shadow-2xl">

                <div className="relative z-10">
                    {/* Main Card Section (Top half) */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="space-y-8 animate-reveal">
                            <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight">
                                Build with AI responsibly
                            </h2>
                            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-lg">
                                Build trusted and secure AI with guidance for responsible
                                design, development, and deployment of models and
                                applications.
                            </p>
                            <button className="bg-[#1a73e8] hover:bg-[#1967d2] text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/20">
                                Build Responsible AI
                            </button>
                        </div>

                        {/* Main Visual: Shield with Icons */}
                        <div className="relative h-[350px] flex items-center justify-center animate-reveal">
                            <div className="relative w-full max-w-[300px] aspect-square">
                                {/* Shield Base */}
                                <div className="absolute inset-0 bg-blue-500/10 border border-blue-400/20 rounded-[2rem] transform rotate-[15deg] shadow-glow"
                                    style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                                </div>

                                {/* 2x2 Icon Grid inside Shield */}
                                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 p-12 gap-6 scale-90">
                                    <div className="flex items-center justify-center bg-yellow-500/20 rounded-full border border-yellow-500/40">
                                        <div className="w-6 h-6 border-2 border-yellow-400 rounded-full flex items-center justify-center">
                                            <div className="w-1 h-3 bg-yellow-400 rounded-full rotate-45" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center bg-red-500/20 rounded-full border border-red-500/40">
                                        <div className="w-6 h-6 border-2 border-red-400 rounded-full relative">
                                            <div className="absolute top-0 right-0 w-2 h-2 bg-red-400 rounded-full" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center bg-blue-500/20 rounded-full border border-blue-500/40">
                                        <div className="text-blue-400 text-xl">✦</div>
                                    </div>
                                    <div className="flex items-center justify-center bg-green-500/20 rounded-full border border-green-500/40">
                                        <div className="w-5 h-6 border-2 border-green-400 rounded-sm" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Cards Grid (Bottom half) */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Card 1: Build responsible models */}
                        <div className="bg-[#202124] rounded-[2.5rem] p-8 flex flex-col md:flex-row gap-8 items-center md:items-start animate-reveal group">
                            <div className="w-48 h-48 flex-shrink-0 bg-black rounded-3xl flex items-center justify-center overflow-hidden border border-white/5 relative">
                                <div className="absolute inset-0 bg-blue-500/5 blur-2xl" />
                                {/* Floating Blue Icons visual */}
                                <div className="relative w-24 h-24">
                                    <div className="absolute top-2 left-2 w-8 h-8 bg-blue-500/30 rounded-lg flex items-center justify-center">
                                        <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-6 border-l-blue-400 ml-1" />
                                    </div>
                                    <div className="absolute top-10 right-2 w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                                        <div className="w-6 h-6 border border-blue-400/50 rounded-md" />
                                    </div>
                                    <div className="absolute bottom-2 left-4 w-12 h-6 bg-blue-500/40 rounded-full flex items-center justify-center">
                                        <div className="w-8 h-1.5 bg-blue-400/50 rounded-full" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 space-y-4">
                                <h3 className="text-2xl font-medium text-white">Build responsible models</h3>
                                <p className="text-gray-400 font-light text-sm leading-relaxed">
                                    Tools and guidance to design, build, and evaluate open AI models responsibly.
                                </p>
                                <button className="flex items-center gap-2 text-white bg-white/5 border border-white/10 hover:bg-white/10 px-5 py-2.5 rounded-full text-sm font-medium transition-colors">
                                    <span className="text-blue-400">📄</span> Responsible GenAI Toolkit
                                </button>
                            </div>
                        </div>

                        {/* Card 2: Develop secure AI systems */}
                        <div className="bg-[#202124] rounded-[2.5rem] p-8 flex flex-col md:flex-row gap-8 items-center md:items-start animate-reveal group">
                            <div className="w-48 h-48 flex-shrink-0 bg-black rounded-3xl flex items-center justify-center overflow-hidden border border-white/5 relative">
                                <div className="absolute inset-0 bg-blue-500/5 blur-2xl" />
                                {/* Shield with G visual */}
                                <div className="relative w-24 h-24 flex items-center justify-center">
                                    <div className="absolute inset-2 bg-blue-500/20 border border-blue-400/40 rounded-lg"
                                        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
                                    <span className="text-blue-400 text-3xl font-bold relative z-10">G</span>
                                    {/* Circuit lines */}
                                    <div className="absolute inset-0 pointer-events-none">
                                        <div className="absolute top-1/2 left-0 w-6 h-px bg-blue-400/30" />
                                        <div className="absolute top-1/2 right-0 w-6 h-px bg-blue-400/30" />
                                        <div className="absolute top-0 left-1/2 h-6 w-px bg-blue-400/30" />
                                        <div className="absolute bottom-0 left-1/2 h-6 w-px bg-blue-400/30" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 space-y-4">
                                <h3 className="text-2xl font-medium text-white">Develop secure AI systems</h3>
                                <p className="text-gray-400 font-light text-sm leading-relaxed">
                                    Build and deploy secure, responsible AI applications with the help of Google's Secure AI Framework (SAIF).
                                </p>
                                <button className="flex items-center gap-2 text-white bg-white/5 border border-white/10 hover:bg-white/10 px-5 py-2.5 rounded-full text-sm font-medium transition-colors">
                                    <span className="text-blue-400">🛡️</span> Secure AI Framework
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
