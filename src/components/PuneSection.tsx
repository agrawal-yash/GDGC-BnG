"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function PuneSection() {
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
                                GDG Cloud Pune <br />
                                Insights
                            </h2>
                            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-lg">
                                GDG Cloud Pune focuses on hands-on learning, deep technical sessions, and community-driven initiatives—nurturing developers through workshops, study jams, and hackathons.
                            </p>
                            <button className="bg-[#1a73e8] hover:bg-[#1967d2] text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/20">
                                Explore Our Community
                            </button>
                        </div>

                        {/* Main Visual: Community Ecosystem */}
                        <div className="relative h-[450px] flex items-center justify-center animate-reveal">
                            <div className="relative w-full max-w-[420px] aspect-square">
                                {/* Central hub - GDG Cloud Pune */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-[#0a1628] via-[#0f1a2e] to-[#1a2942] border border-blue-400/40 rounded-full shadow-2xl flex items-center justify-center backdrop-blur-xl z-10"
                                    style={{
                                        boxShadow: '0 0 80px rgba(59, 130, 246, 0.3), inset 0 0 60px rgba(59, 130, 246, 0.1)'
                                    }}
                                >
                                    <div className="text-center">
                                        <span className="text-white text-xl md:text-2xl font-bold leading-tight block">GDG Cloud</span>
                                        <span className="text-white text-xl md:text-2xl font-bold leading-tight block">Pune</span>
                                    </div>
                                </div>

                                {/* Surrounding ecosystem nodes - arranged on an orbital ring */}
                                {[
                                    { label: 'Learning', angle: 0, delay: '0s', x: 1, y: 0 },           // right
                                    { label: 'Workshops', angle: 90, delay: '0.2s', x: 0, y: 1 },      // bottom
                                    { label: 'Hackathons', angle: 180, delay: '0.4s', x: -1, y: 0 },   // left
                                    { label: 'Community', angle: 270, delay: '0.6s', x: 0, y: -1 },    // top
                                ].map((node, i) => (
                                    <div
                                        key={i}
                                        className="absolute bg-gradient-to-br from-[#0f1419]/90 via-[#1a1f2e]/90 to-[#0f1419]/90 border border-blue-400/20 rounded-xl p-4 backdrop-blur-xl shadow-xl animate-float z-20"
                                        style={{
                                            left: `calc(50% + ${node.x * 175}px)`,
                                            top: `calc(50% + ${node.y * 175}px)`,
                                            transform: 'translate(-50%,-50%)',
                                            animationDelay: node.delay,
                                            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4), 0 0 30px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                                        }}
                                    >
                                        <div className="flex items-center justify-center min-w-[80px]">
                                            <span className="text-white text-sm font-medium">{node.label}</span>
                                        </div>
                                    </div>
                                ))}

                                {/* Connecting lines/orbit visualization (subtle) */}
                                <div 
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-blue-400/10 rounded-full z-0"
                                    style={{
                                        boxShadow: 'inset 0 0 20px rgba(59, 130, 246, 0.05)'
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Secondary Cards Grid (Bottom half) */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Card 1: Community Strength */}
                        <div className="bg-[#202124] rounded-[2.5rem] p-8 flex flex-col md:flex-row gap-8 items-center md:items-start animate-reveal pointer-events-auto">
                            <div className="w-48 h-48 flex-shrink-0 bg-black rounded-3xl flex items-center justify-center overflow-hidden border border-white/5 relative">
                                <div className="absolute inset-0 bg-blue-500/5 blur-2xl" />
                                <div className="relative text-6xl">
                                    👥
                                </div>
                            </div>

                            <div className="flex-1 space-y-4">
                                <h3 className="text-2xl font-medium text-white">Community Strength</h3>
                                <p className="text-gray-400 font-light text-sm leading-relaxed">
                                    Developers actively participating in meetups, workshops, and hackathons.
                                </p>
                                <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                                    <span>5K+ Active Members</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Learning & Engagement */}
                        <div className="bg-[#202124] rounded-[2.5rem] p-8 flex flex-col md:flex-row gap-8 items-center md:items-start animate-reveal pointer-events-auto">
                            <div className="w-48 h-48 flex-shrink-0 bg-black rounded-3xl flex items-center justify-center overflow-hidden border border-white/5 relative">
                                <div className="absolute inset-0 bg-cyan-500/5 blur-2xl" />
                                <div className="relative text-6xl">
                                    📚
                                </div>
                            </div>

                            <div className="flex-1 space-y-4">
                                <h3 className="text-2xl font-medium text-white">Learning & Engagement</h3>
                                <p className="text-gray-400 font-light text-sm leading-relaxed">
                                    Hands-on sessions, study jams, and collaborative learning initiatives.
                                </p>
                                <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                                    <span>50+ Events & Workshops</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
