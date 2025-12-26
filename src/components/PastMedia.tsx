"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const pastEvents = [
  {
    title: "Community Gathering",
    description: "Participants networking and sharing ideas",
    image: "/20250503_114742_imgupscaler.ai_V1(Fast)_4K.png",
  },
  {
    title: "Workshop Snapshot",
    description: "Hands-on session during the event",
    image: "/IMG_0758.JPG",
  },
  {
    title: "Demo Highlights",
    description: "Projects showcased on demo day",
    image: "/IMG_0678_imgupscaler.ai_V1(Fast)_4K.png",
  },
  {
    title: "Stage Moments",
    description: "Awards and closing highlights",
    image: "/IMG_0684_imgupscaler.ai_V1(Fast)_4K.png",
  },
]

export default function PastMedia() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let animationFrameId: number
    let scrollPosition = 0
    const speed = 0.8

    const scroll = () => {
      scrollPosition += speed
      if (scrollContainer) {
        const maxScroll = scrollContainer.scrollWidth / 2
        // Reset position seamlessly when we've scrolled through one complete set
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0
        }
        scrollContainer.scrollLeft = scrollPosition
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  // Duplicate events multiple times for truly seamless infinite scroll
  const duplicatedEvents = [...pastEvents, ...pastEvents, ...pastEvents]

  return (
    <section className="relative z-10 py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
          <p className="text-muted-foreground text-lg">Highlights from our previous events and community activities</p>
        </motion.div>

        {/* Infinite Slider */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="overflow-x-auto overflow-y-hidden no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="inline-flex gap-6">
              {duplicatedEvents.map((event, index) => (
                <motion.div
                  key={`${event.title}-${index}`}
                  className="flex-shrink-0 w-[320px] md:w-[400px]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="overflow-hidden border border-white/5 transition-all duration-300 rounded-xl group h-full">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                        <p className="text-sm text-gray-300 mt-1">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
