"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const timelineData = [
    {
        title: "Registration Starts",
        date: "December 25, 2024",
        description: "Form your teams & onboard",
        stationMarathi: "पुणे जंक्शन",
        station: "PUNE JUNCTION",
        daysToNext: 16
    },
    {
        title: "Workshop 1",
        date: "January 10, 2025",
        description: "Hands-on AI fundamentals",
        stationMarathi: "शिवाजीनगर",
        station: "SHIVAJINAGAR",
        daysToNext: 7
    },
    {
        title: "Workshop 2",
        date: "January 17, 2025",
        description: "Deep dive into cloud & ML",
        stationMarathi: "दादर",
        station: "DADAR",
        daysToNext: 7
    },
    {
        title: "Pre-Hackathon",
        date: "January 24, 2025",
        description: "Mumbai + Pune meet-up",
        stationMarathi: "चिंचपोकळी",
        station: "CHINCHPOKLI",
        daysToNext: 2
    },
    {
        title: "Finale",
        date: "January 26, 2025",
        description: "Grand Finale at Mumbai",
        stationMarathi: "छ.शि.म. टर्मिनस",
        station: "CSMT",
        daysToNext: 0
    },
];

export default function TimelineSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const tracksRef = useRef<HTMLDivElement>(null);
    const trainRef = useRef<HTMLDivElement>(null);
    const [activeStation, setActiveStation] = useState(0);

    useEffect(() => {
        if (!containerRef.current || !trainRef.current) return;

        const cards = containerRef.current.querySelectorAll(".timeline-card");

        // Railway tracks grow animation
        if (tracksRef.current) {
            gsap.fromTo(tracksRef.current,
                { scaleY: 0 },
                {
                    scaleY: 1,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                        end: "bottom 80%",
                        scrub: 1,
                    }
                }
            );
        }

        // Scroll-driven train movement
            // Scroll-driven train movement (position computed relative to tracks and clamped)
            let st: any = null;
            const updateTrainByProgress = (progress: number) => {
                if (!tracksRef.current || !trainRef.current || !containerRef.current) return;

                // Use the nearest positioned ancestor (the inner relative container) as reference
                const refElement = (tracksRef.current.offsetParent as HTMLElement) || containerRef.current;
                const referenceRect = refElement.getBoundingClientRect();
                const tracksRect = tracksRef.current.getBoundingClientRect();
                const trainRect = trainRef.current.getBoundingClientRect();

                // compute vertical bounds (relative to the positioned reference)
                const minY = Math.max(0, tracksRect.top - referenceRect.top);
                const maxY = Math.max(0, tracksRect.bottom - referenceRect.top - trainRect.height);

                const clampedProgress = Math.min(Math.max(progress, 0), 1);
                const y = minY + clampedProgress * (maxY - minY || 0);

                // compute horizontal center so train remains centered on rails (relative to reference)
                const railsCenterX = tracksRect.left - referenceRect.left + tracksRect.width / 2;
                const x = railsCenterX - trainRect.width / 2;

                gsap.to(trainRef.current, {
                    x,
                    y,
                    duration: 0.25,
                    ease: "power2.out"
                });
            };

            st = ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top 20%",
                end: "bottom 80%",
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const totalStations = timelineData.length;
                    const stationIndex = Math.min(
                        Math.floor(progress * totalStations),
                        totalStations - 1
                    );
                    setActiveStation(stationIndex);
                    updateTrainByProgress(progress);
                }
            });

            // initial positioning in case image and layout are ready
            requestAnimationFrame(() => {
                const initialProgress = st?.animation ? st.animation.progress() : 0;
                updateTrainByProgress(initialProgress || 0);
            });

            // keep train aligned on resize
            const onResize = () => {
                const currProgress = st?.animation ? st.animation.progress() : 0;
                updateTrainByProgress(currProgress || 0);
            };
            window.addEventListener('resize', onResize);

            // cleanup
            return () => {
                window.removeEventListener('resize', onResize);
                try {
                    ScrollTrigger.getAll().forEach((s) => s.kill());
                } catch (e) {}
                gsap.killTweensOf(trainRef.current);
            };

        // Station highlight animation
        cards.forEach((card, index) => {
            ScrollTrigger.create({
                trigger: card,
                start: "top center",
                end: "bottom center",
                onEnter: () => setActiveStation(index),
                onEnterBack: () => setActiveStation(index),
            });
        });

    }, []);

    return (
        <section 
            id="timeline" 
            ref={containerRef} 
            className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
            suppressHydrationWarning
        >
            <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
                <div className="text-center space-y-2 sm:space-y-4 mb-10 sm:mb-16 md:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
                        Build & Grow Express
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg font-light px-4">
                        Your hackathon journey from Pune to Mumbai
                    </p>
                </div>

                <div className="relative">
                    {/* Railway Tracks - Realistic dual rails with sleepers */}
                    <div
                        ref={tracksRef}
                        className="absolute left-1/2 top-0 bottom-0 hidden md:block origin-top"
                        style={{ transform: 'translateX(-50%)' }}
                        suppressHydrationWarning
                    >
                        {/* Track container */}
                        <div className="relative w-12 h-full">
                            {/* Left rail */}
                            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-gray-400/80 via-gray-500/70 to-transparent" 
                                style={{ boxShadow: '0 0 8px rgba(156,163,175,0.4), inset 1px 0 0 rgba(255,255,255,0.1)' }} />
                            {/* Right rail */}
                            <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-gray-400/80 via-gray-500/70 to-transparent" 
                                style={{ boxShadow: '0 0 8px rgba(156,163,175,0.4), inset 1px 0 0 rgba(255,255,255,0.1)' }} />
                            {/* Sleeper ties */}
                            {Array.from({ length: 40 }).map((_, i) => (
                                <div 
                                    key={i}
                                    className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-gray-600/40 to-transparent"
                                    style={{ top: `${i * 2.5}%` }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Train Indicator - Scroll-driven */}
                    <div
                        ref={trainRef}
                        className="absolute left-0 top-0 hidden md:block z-30 pointer-events-none"
                        style={{ willChange: 'transform' }}
                    >
                        <Image 
                            src="/train1.png" 
                            alt="Train" 
                            width={120} 
                            height={120}
                            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]"
                        />
                    </div>

                    <div className="space-y-6 sm:space-y-8 md:space-y-12 relative z-10">
                        {timelineData.map((item, index) => {
                            const isActive = activeStation === index;
                            const isPast = index < activeStation;
                            const isFuture = index > activeStation;

                            return (
                                <div key={index} className="relative">
                                    <div
                                        className={`timeline-card flex flex-col md:flex-row items-center gap-4 md:gap-8 transition-all duration-500 ${
                                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                                        }`}
                                    >
                                        {/* Content Side - Mumbai Local Station Board */}
                                        <div className={`flex-1 w-full ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                                            <div className="relative inline-block">
                                                {/* Station Board */}
                                                <div 
                                                    className={`relative px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7 rounded-lg border-2 shadow-2xl transition-all duration-500 ${
                                                        isActive 
                                                            ? 'bg-[#FFD700] border-[#B8860B] shadow-[0_8px_30px_rgba(255,215,0,0.4)]' 
                                                            : isPast 
                                                            ? 'bg-[#FFD700]/80 border-[#B8860B]/60 opacity-80' 
                                                            : 'bg-[#FFD700]/50 border-[#B8860B]/40 opacity-60'
                                                    }`}
                                                    style={{
                                                        backdropFilter: 'blur(4px)',
                                                        WebkitBackdropFilter: 'blur(4px)',
                                                        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="n"%3E%3CfeTurbulence baseFrequency="0.9" /%3E%3C/filter%3E%3Crect width="20" height="20" filter="url(%23n)" opacity="0.03" /%3E%3C/svg%3E")',
                                                    }}
                                                >
                                                    {/* Station Names - Bilingual */}
                                                    <div className="text-center mb-4 pb-3 border-b-2 border-black/20">
                                                        {/* Marathi (Primary) */}
                                                        <h4 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-1 transition-colors duration-500 ${
                                                            isActive ? 'text-[#1a1a1a]' : 'text-[#2a2a2a]/80'
                                                        }`}>
                                                            {item.stationMarathi}
                                                        </h4>
                                                        {/* English (Secondary) */}
                                                        <h5 className={`text-xs sm:text-sm md:text-base font-semibold tracking-[0.2em] transition-colors duration-500 ${
                                                            isActive ? 'text-[#2a2a2a]' : 'text-[#3a3a3a]/70'
                                                        }`}>
                                                            {item.station}
                                                        </h5>
                                                    </div>

                                                    {/* Event Details */}
                                                    <div className="space-y-2">
                                                        <h3 className={`text-base sm:text-lg md:text-xl font-semibold transition-colors duration-500 ${
                                                            isActive ? 'text-[#1a1a1a]' : 'text-[#2a2a2a]/80'
                                                        }`}>
                                                            {item.title}
                                                        </h3>
                                                        <div className="text-xs sm:text-sm font-mono text-[#2a2a2a]/80">
                                                            {item.date}
                                                        </div>
                                                        <p className={`text-xs sm:text-sm font-medium leading-relaxed ${
                                                            isActive ? 'text-[#2a2a2a]/90' : 'text-[#3a3a3a]/70'
                                                        }`}>
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Mounting Posts */}
                                                <div className="absolute top-full left-1/4 -translate-x-1/2 w-2 h-12 sm:h-16 bg-gradient-to-b from-gray-600 to-gray-700 rounded-b hidden md:block"
                                                    style={{
                                                        boxShadow: 'inset 1px 0 0 rgba(255,255,255,0.1), 2px 2px 4px rgba(0,0,0,0.3)'
                                                    }}
                                                />
                                                <div className="absolute top-full right-1/4 translate-x-1/2 w-2 h-12 sm:h-16 bg-gradient-to-b from-gray-600 to-gray-700 rounded-b hidden md:block"
                                                    style={{
                                                        boxShadow: 'inset 1px 0 0 rgba(255,255,255,0.1), 2px 2px 4px rgba(0,0,0,0.3)'
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* Center Station Dot */}
                                        <div className="relative flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 z-20">
                                            <div 
                                                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 sm:border-4 border-[#0d0e10] transition-all duration-500 ${
                                                    isActive 
                                                        ? 'bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.8)] scale-125' 
                                                        : isPast 
                                                        ? 'bg-yellow-500/60 shadow-[0_0_10px_rgba(250,204,21,0.3)]' 
                                                        : 'bg-gray-600/40'
                                                }`} 
                                            />
                                        </div>

                                        {/* Empty side for spacing */}
                                        <div className="flex-1 hidden md:block" />
                                    </div>

                                    {/* Time Duration Label (between stations) */}
                                    {index < timelineData.length - 1 && item.daysToNext > 0 && (
                                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 justify-center items-center z-15 pointer-events-none"
                                            style={{ top: 'calc(100% + 2rem)' }}
                                        >
                                            <div className="flex items-center gap-2 opacity-50">
                                                <div className="w-8 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
                                                <span className="text-xs font-mono text-cyan-400/80 tracking-wider">
                                                    {item.daysToNext} {item.daysToNext === 1 ? 'Day' : 'Days'}
                                                </span>
                                                <div className="w-8 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
