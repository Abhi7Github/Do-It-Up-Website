"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Play, Sparkles } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop')",
          }}
        />
        {/* Multi-layer gradient overlay for depth */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/70 via-[#0B0B0B]/50 to-[#0B0B0B]" /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/80 via-transparent to-[#0B0B0B]/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0B0B0B_80%)]" />
      </motion.div>

      {/* Animated ambient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating gold particles */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#D4AF37]/50 blur-sm"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-[#D4AF37]/30 blur-sm"
        />
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-[#CD7F32]/40 blur-sm"
        />

        {/* Subtle horizontal lines */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-[30%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent origin-left"
        />
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.05 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-[70%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent origin-right"
        />
      </div>

      {/* Main Content */}
      <motion.div style={{ opacity }} className="container-custom relative z-10">
        <div className="max-w-5xl">
         

          {/* Heading */}
          <div className="overflow-hidden mt-20 mb-4">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="font-[var(--font-heading)] heading-xl text-white"
            >
              STYLE FOR
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="font-[var(--font-heading)] heading-xl text-gradient-animated"
            >
              EVERYONE
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-4 md:mb-10">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="font-[var(--font-heading)] heading-xl text-white"
            >
              DO IT UP
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-white/60 text-base md:text-lg lg:text-xl max-w-xl mb-8 leading-relaxed"
          >
            Welcome to Do It Up Unisex Salon by Nagesh Sonawane. Premium haircuts,
            styling, and grooming services for men and women in a luxurious setting.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#booking"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-[#0B0B0B] font-semibold uppercase tracking-wider rounded-full text-sm"
              >
                <span>Book Appointment</span>
              </Link>
            </motion.div>

           
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <Link
          href="#services"
          className="flex flex-col items-center gap-3 text-white/40 hover:text-[#D4AF37] transition-colors duration-300 group"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border border-current flex items-start justify-center p-2"
          >
            <motion.div 
              animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-current"
            />
          </motion.div>
        </Link>
      </motion.div> */}

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0B0B] to-transparent pointer-events-none" />
    </section>
  )
}
