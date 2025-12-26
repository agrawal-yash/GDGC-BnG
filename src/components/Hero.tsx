"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Hero() {
    const cardRef = useRef<HTMLDivElement>(null);
    const [displayText, setDisplayText] = useState("");
    const [startTyping, setStartTyping] = useState(false);

    // The text to be typed out
    const fullText = "Create an app that analyzes customer feedback and generates a report that follows the attached style guidelines.";

    // 1. Handle Entrance Animation
    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        // Start state
        gsap.set(card, { opacity: 0, scale: 0.9, x: -60, y: 30 });

        // Animate to
        gsap.to(card, {
            opacity: 1,
            scale: 1,
            x: -130,
            y: 0,
            duration: 1.0,
            ease: "power3.out",
            delay: 0.3,
            onComplete: () => {
                setStartTyping(true);
            }
        });
    }, []);

    // 2. Handle Typing Effect
    useEffect(() => {
        if (!startTyping) return;

        let i = 0;
        const typingInterval = setInterval(() => {
            if (i <= fullText.length) {
                setDisplayText(fullText.slice(0, i));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 30); // Typing speed roughly 30ms per char

        return () => clearInterval(typingInterval);
    }, [startTyping]);

    return (
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[90vh] flex items-center">
            {/* Using global ContinuousBackground */}

            <div className="relative z-10 max-w-[1440px] mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column: Text Content */}
                <div className="space-y-8 text-center lg:text-left">
                    {/* Announcement Badge */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-full pl-1 pr-4 py-1 backdrop-blur-sm cursor-pointer hover:border-blue-400/50 transition-colors">
                        <span className="bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">New</span>
                        <span className="text-sm text-blue-100">Build with Gemini 3 Flash, our frontier intelligence built for speed and scale</span>
                        <svg className="w-4 h-4 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight text-white leading-[1.1]" data-speed="1.1">
                        AI for every developer
                    </h1>

                    <p className="text-xl md:text-2xl text-[#9aa0a6] max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed" data-speed="1.05">
                        Unlock AI models to build innovative apps and transform development workflows with tools across platforms.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <button className="h-12 px-8 rounded-full bg-[#1a73e8] hover:bg-[#1967d2] text-white font-medium text-lg transition-all shadow-[0_0_20px_rgba(26,115,232,0.3)] hover:shadow-[0_0_30px_rgba(26,115,232,0.5)]">
                            Explore models in Google AI Studio
                        </button>
                    </div>
                </div>

                {/* Right Column: Google AI Studio Mock UI */}
                {/* overflow-visible ensures the pop-out card isn't clipped */}
                <div className="relative rounded-xl bg-[#1e1f20] border border-white/10 shadow-2xl skew-y-1 lg:translate-x-12 translate-y-8 overflow-visible z-20" data-speed="0.95">
                    {/* Window Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#252627] rounded-t-xl">
                        <span className="text-xs font-medium text-gray-400">Google AI Studio</span>
                        <div className="flex gap-3 text-gray-500">
                            <div className="w-4 h-4 rounded-full border border-current opacity-50" />
                            <div className="w-4 h-4 rounded-sm border border-current opacity-50" />
                            <div className="w-4 h-4 rounded-sm border border-current opacity-50" />
                        </div>
                    </div>

                    <div className="flex h-[500px]">
                        {/* Main Mock Area */}
                        <div className="flex-1 p-8 relative flex flex-col items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none rounded-b-xl" />

                            <h3 className="text-2xl text-white/80 font-light mb-12">Build your ideas with Gemini</h3>

                            {/* Floating Prompt Card - REFINED POP OUT EFFECT */}
                            <div
                                ref={cardRef}
                                className="w-full max-w-md bg-[#252628]/95 p-0.5 rounded-2xl shadow-[0_0_60px_-10px_rgba(60,132,255,0.5)] relative backdrop-blur-xl opacity-0 z-50 transform-gpu"
                            >
                                {/* Intense Highlight Border Container */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 via-white/10 to-transparent opacity-80 pointer-events-none" style={{ padding: '1px' }}>
                                    <div className="h-full w-full bg-[#252628] rounded-2xl" />
                                </div>

                                {/* Actual Content Container */}
                                <div className="relative bg-[#252628] rounded-2xl p-5 border border-white/5 overflow-hidden">

                                    {/* Diffuse Inner Glow for depth */}
                                    {/* Top Left intense source */}
                                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/20 blur-[40px] pointer-events-none" />

                                    <div className="relative space-y-4">
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#38393b] border border-white/5">
                                            <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                            </svg>
                                            <span className="text-xs text-gray-300">guidelines.pdf</span>
                                            <span className="text-[10px] text-gray-500">Pdf</span>
                                        </div>

                                        <p className="text-sm text-gray-300 font-light leading-relaxed h-[60px]">
                                            {displayText}<span className="animate-pulse">|</span>
                                        </p>

                                        <div className="flex items-center justify-end gap-2 pt-2">
                                            <button className="px-3 py-1.5 rounded-full text-xs text-white/70 hover:bg-white/5 transition-colors flex items-center gap-1">
                                                <span className="text-blue-400">✨</span> I'm feeling lucky
                                            </button>
                                            <button className="px-4 py-1.5 rounded-full bg-[#38393b] text-white text-xs font-medium hover:bg-[#454648] transition-colors flex items-center gap-1">
                                                Build
                                                <svg className="w-3 h-3 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 12h14" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar List */}
                        <div className="w-48 border-l border-white/5 bg-[#1b1c1e] p-4 hidden md:block">
                            <div className="text-xs font-medium text-gray-400 mb-4">Select models</div>
                            <div className="space-y-1">
                                {["Gemini 3 Pro", "Gemini 3 Pro Image", "Gemini 3 Flash", "Gemini 2.5 Pro", "Gemini 2.5 Flash", "Gemini 2.5 Flash-Lite", "Imagen 4", "Veo 3.1"].map((model, i) => (
                                    <div key={i} className={`px-3 py-2 rounded text-xs cursor-pointer ${i === 0 ? 'bg-[#2a2b2d] text-white' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}>
                                        {model}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Removed the line division for better blending */}
        </section>
    );
}
