"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function EdgeSection() {
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
                                Run AI models on-device <br />
                                with Google AI Edge
                            </h2>
                            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-lg">
                                Build and deploy edge ML solutions across mobile, web,
                                and embedded applications, from simple APIs to custom
                                pipelines, with support across all major frameworks.
                            </p>
                            <button className="bg-[#1a73e8] hover:bg-[#1967d2] text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/20">
                                Explore Google AI Edge
                            </button>
                        </div>

                        {/* Main Visual: Mobile + 3D blocks */}
                        <div className="relative h-[350px] flex items-center justify-center animate-reveal">
                            <div className="relative w-full max-w-[400px] aspect-square transform scale-110">
                                {/* Phone Mockup Base */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-[400px] bg-[#2d2e31] border border-white/10 rounded-[3rem] rotate-[45deg] skew-x-[-15deg] opacity-40" />

                                {/* 3D Floating Blocks */}
                                {[...Array(4)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-28 h-28 bg-blue-500/20 border border-blue-400/40 rounded-2xl shadow-glow animate-float-3d"
                                        style={{
                                            top: `${20 + (i % 2) * 35}%`,
                                            left: `${20 + Math.floor(i / 2) * 35}%`,
                                            transform: `perspective(1000px) rotateX(45deg) rotateZ(-20deg) translateZ(${20 + i * 30}px)`,
                                            animationDelay: `${i * 0.5}s`
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Secondary Cards Grid (Bottom half) */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Card 1: Gemini Nano on Android */}
                        <div className="bg-[#202124] rounded-[2.5rem] p-8 flex flex-col md:flex-row gap-8 items-center md:items-start animate-reveal pointer-events-auto">
                            <div className="w-48 h-48 flex-shrink-0 bg-black rounded-3xl flex items-center justify-center overflow-hidden border border-white/5 relative">
                                <div className="absolute inset-0 bg-blue-500/5 blur-2xl" />
                                <div className="relative opacity-80 scale-110">
                                    {/* Android head mockup */}
                                    <div className="w-16 h-12 bg-blue-500/40 rounded-t-[50%] relative">
                                        <div className="absolute top-2 left-4 w-2 h-2 bg-white/40 rounded-full" />
                                        <div className="absolute top-2 right-4 w-2 h-2 bg-white/40 rounded-full" />
                                        <div className="absolute -top-4 left-2 w-1 h-6 bg-blue-500/40 rounded rotate-[-30deg]" />
                                        <div className="absolute -top-4 right-2 w-1 h-6 bg-blue-500/40 rounded rotate-[30deg]" />
                                    </div>
                                    <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 text-blue-400 text-2xl">✦</div>
                                </div>
                            </div>

                            <div className="flex-1 space-y-4">
                                <h3 className="text-2xl font-medium text-white">Gemini Nano on Android</h3>
                                <p className="text-gray-400 font-light text-sm leading-relaxed">
                                    Unlock low latency and cost effective generative AI features while keeping data on-device.
                                </p>
                                <button className="flex items-center gap-2 text-white bg-white/5 border border-white/10 hover:bg-white/10 px-5 py-2.5 rounded-full text-sm font-medium transition-colors">
                                    <span className="text-green-500 text-lg">🤖</span> Android docs
                                </button>
                            </div>
                        </div>

                        {/* Card 2: AI features for web apps */}
                        <div className="bg-[#202124] rounded-[2.5rem] p-8 flex flex-col md:flex-row gap-8 items-center md:items-start animate-reveal pointer-events-auto">
                            <div className="w-48 h-48 flex-shrink-0 bg-black rounded-3xl flex items-center justify-center overflow-hidden border border-white/5 relative">
                                <div className="absolute inset-0 bg-blue-500/5 blur-2xl" />
                                <div className="relative w-28 h-20 border border-blue-500/30 rounded-lg p-2 bg-white/5">
                                    <div className="h-1.5 w-1/2 bg-blue-500/20 rounded mb-1" />
                                    <div className="h-1.5 w-full bg-white/5 rounded" />
                                    <div className="absolute bottom-2 right-2 scale-75 opacity-80">
                                        <div className="text-white text-2xl">✦</div>
                                    </div>
                                    {/* Mouse Pointer */}
                                    <div className="absolute bottom-[-20px] left-10 text-white/40">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M7 2l12 11.2-5.8.8 3.3 6-2.5 1.4-3.4-6.1L7 21V2z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 space-y-4">
                                <h3 className="text-2xl font-medium text-white">AI features for web apps</h3>
                                <p className="text-gray-400 font-light text-sm leading-relaxed">
                                    Integrate AI models like Gemini Nano into web apps with Chrome's built-in web platform APIs.
                                </p>
                                <button className="flex items-center gap-2 text-white bg-white/5 border border-white/10 hover:bg-white/10 px-5 py-2.5 rounded-full text-sm font-medium transition-colors">
                                    <span className="text-lg">🌐</span> AI on Chrome
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
