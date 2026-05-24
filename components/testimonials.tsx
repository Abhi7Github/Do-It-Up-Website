"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useCallback } from "react"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Business Professional",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    content:
      "Do It Up has completely transformed my grooming routine. The attention to detail and the luxurious experience is unmatched. I wouldn't trust anyone else with my haircut.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    content:
      "Finally found a salon that understands women's hair! The coloring service is exceptional and Nagesh really knows how to bring out the best in every style. Absolutely love it!",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Desai",
    role: "Fitness Coach",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    content:
      "Best salon in the city, hands down. The team here understands exactly what you want and delivers every single time. Highly recommend the VIP package!",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha Kulkarni",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    content:
      "I got my bridal hair done here and it was absolutely perfect! The team is so talented and really listens to what you want. Can't recommend them enough for special occasions.",
    rating: 5,
  },
  {
    id: 5,
    name: "Vikram Joshi",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    content:
      "I've been coming here for 2 years and the consistency is incredible. Whether it's a quick trim or full grooming session, the quality never drops.",
    rating: 5,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const handlePrev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  const handleNext = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(handleNext, 6000)
    return () => clearInterval(timer)
  }, [isPaused, handleNext])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 60 : -60,
      opacity: 0,
    }),
  }

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#0A0A0A] to-[#0B0B0B]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/[0.03] rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs md:text-sm font-medium">
              Testimonials
            </span>
            <div className="w-8 md:w-12 h-px bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[var(--font-heading)] heading-lg text-white"
          >
            WHAT CLIENTS SAY
          </motion.h2>
        </div>

        <div 
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative">
            {/* Quote Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -top-6 left-4 md:left-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#CD7F32] flex items-center justify-center z-10 shadow-lg shadow-[#D4AF37]/20"
            >
              <Quote className="w-5 h-5 md:w-7 md:h-7 text-[#0B0B0B]" />
            </motion.div>

            {/* Testimonial Card */}
            <div className="glass-strong rounded-2xl p-6 pt-12 md:p-10 md:pt-14 min-h-[320px] md:min-h-[300px] overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="space-y-6"
                >
                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-4 h-4 md:w-5 md:h-5 fill-[#D4AF37] text-[#D4AF37]" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-white/70 text-base md:text-lg lg:text-xl leading-relaxed italic">
                    &ldquo;{testimonials[current].content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4">
                    <div className="relative">
                      <img
                        src={testimonials[current].image}
                        alt={testimonials[current].name}
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
                      />
                      <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/30" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">
                        {testimonials[current].name}
                      </p>
                      <p className="text-[#D4AF37]/80 text-sm">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrev}
                className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#D4AF37]/50 hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > current ? 1 : -1)
                      setCurrent(index)
                    }}
                    className="relative p-1"
                    aria-label={`Go to testimonial ${index + 1}`}
                  >
                    <motion.div
                      className="h-1.5 rounded-full bg-white/20"
                      animate={{ 
                        width: index === current ? 32 : 8,
                        backgroundColor: index === current ? "#D4AF37" : "rgba(255,255,255,0.2)"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#D4AF37]/50 hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
