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

        return () => {
            lenis.destroy();
            gsap.ticker.remove(lenis.raf);
            ctx.revert();
        };
    }, []);

    return <div className="smooth-scroll-wrapper">{children}</div>;
}
