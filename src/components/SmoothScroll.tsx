"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // 1. Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
        });
        lenisRef.current = lenis;

        // 2. Connect Lenis to GSAP ScrollTrigger
        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        // 3. Implement Parallax Effects (data-speed)
        // We need to wait for the DOM to be ready and layout to be settled somewhat
        const ctx = gsap.context(() => {
            const elements = document.querySelectorAll("[data-speed]");

            elements.forEach((el) => {
                const speed = parseFloat(el.getAttribute("data-speed") || "1");

                // If speed is 1, no effect needed generally, or standard scroll
                if (speed === 1) return;

                // Custom parallax logic
                // Use ScrollTrigger to scrub the movement relative to the scroll speed
                gsap.to(el, {
                    y: (i, target) => {
                        // Calculate distance based on speed difference
                        // This is a simplified approximation of ScrollSmoother's effect
                        return (1 - speed) * 100;
                    },
                    ease: "none",
                    scrollTrigger: {
                        trigger: el,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 0,
                    },
                });
            });
        });

        // 4. Direction-aware entrance animations for sections
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Track last scroll direction using wheel and touch events
        let lastDirection: 'down' | 'up' = 'down';
        let touchStartY = 0;

        const wheelHandler = (e: WheelEvent) => {
            if (e.deltaY > 0) lastDirection = 'down';
            else if (e.deltaY < 0) lastDirection = 'up';
        };

        const touchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0]?.clientY || 0;
        };

        const touchMove = (e: TouchEvent) => {
            const y = e.touches[0]?.clientY || 0;
            if (y < touchStartY) lastDirection = 'down';
            else if (y > touchStartY) lastDirection = 'up';
            touchStartY = y;
        };

        window.addEventListener('wheel', wheelHandler, { passive: true });
        window.addEventListener('touchstart', touchStart, { passive: true });
        window.addEventListener('touchmove', touchMove, { passive: true });

        const observed = new Set<Element>();

        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const el = entry.target as HTMLElement;
                
                // If reduced motion, just show
                if (prefersReducedMotion) {
                    if (entry.isIntersecting) {
                        gsap.to(el, { opacity: 1, duration: 0 });
                    }
                    return;
                }

                if (entry.isIntersecting) {
                    // Animate in based on scroll direction
                    const from = lastDirection === 'down' 
                        ? { y: 60, opacity: 0 } 
                        : { y: -60, opacity: 0 };
                    
                    gsap.fromTo(
                        el,
                        from,
                        { 
                            y: 0, 
                            opacity: 1, 
                            duration: 0.8, 
                            ease: 'power2.out',
                            clearProps: 'transform' // Clear transform after animation
                        }
                    );
                } else {
                    // Reset when leaving viewport for re-animation
                    gsap.to(el, { 
                        opacity: 0, 
                        duration: 0.3,
                        ease: 'power2.in'
                    });
                }
            });
        }, { 
            threshold: 0.15,
            rootMargin: '-50px 0px' // Trigger slightly after entering viewport
        });

        // Observe semantic sections and direct children inside the smooth wrapper
        const toObserve = Array.from(document.querySelectorAll('.smooth-scroll-wrapper > section, .smooth-scroll-wrapper section'));
        toObserve.forEach((el) => {
            observed.add(el);
            io.observe(el);
        });

        return () => {
            lenis.destroy();
            gsap.ticker.remove(lenis.raf);
            ctx.revert();
            window.removeEventListener('wheel', wheelHandler);
            window.removeEventListener('touchstart', touchStart);
            window.removeEventListener('touchmove', touchMove);
            io.disconnect();
        };
    }, []);

    return <div className="smooth-scroll-wrapper">{children}</div>;
}
