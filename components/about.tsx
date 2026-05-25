"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Award, Users, Clock, Star } from "lucide-react"

const stats = [
  { icon: Users, value: 5000, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 15, suffix: "+", label: "Years Experience" },
  { icon: Star, value: 4.9, suffix: "", label: "Average Rating" },
  { icon: Clock, value: 50000, suffix: "+", label: "Haircuts Done" },
]

function AnimatedCounter({
  value,
  suffix,
  isInView,
}: {
  value: number
  suffix: string
  isInView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2500
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current * 10) / 10)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span>
      {Number.isInteger(value) ? Math.floor(count).toLocaleString() : count.toFixed(1)}
      {suffix}
    </span>
  )
}

export function About() {
  const ref = useRef(null)
  const imageRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const imageInView = useInView(imageRef, { once: true, margin: "-50px" })

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#0A0A0A] to-[#0B0B0B]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/[0.02] rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-top">
          {/* Image Side */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -60 }}
            animate={imageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="relative order-2 lg:order-1"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <motion.img
                initial={{ scale: 1.1 }}
                animate={imageInView ? { scale: 1 } : {}}
                transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop"
                alt="Expert barber at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-[#0B0B0B]/20 to-transparent" />
              {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/50 to-transparent" /> */}
            </div>

            {/* Floating Award Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: 30 }}
              animate={imageInView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -right-4 md:-right-8 glass-strong rounded-xl p-5 max-w-[220px] shadow-2xl shadow-black/30"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#CD7F32] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#D4AF37]/20">
                  <Award className="w-6 h-6 text-[#0B0B0B]" />
                </div>
                <div>
                  <p className="text-[#D4AF37] font-semibold text-sm">Award Winning</p>
                  <p className="text-white/50 text-xs">Best Barber Shop 2024</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Border */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#D4AF37]/20 rounded-2xl -z-10" />
            
            {/* Decorative dots */}
            <div className="absolute -bottom-8 -left-8 w-24 h-24 opacity-20">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="order-1 lg:order-2"
          >
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 md:w-12 h-px bg-gradient-to-r from-[#D4AF37] to-transparent" />
              <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs md:text-sm font-medium">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-[var(--font-heading)] heading-lg text-white mb-6 leading-[0.95]">
              CRAFTING STYLE
              <br />
              <span className="text-gradient">SINCE 2009</span>
            </h2>

            {/* Description */}
            <div className="space-y-4 mb-10">
              <p className="text-white/60 leading-relaxed">
                Royal Cut Studio was founded with a simple vision: to create a
                space where grooming becomes an art form. Our master barbers bring
                over 15 years of expertise to every cut, combining traditional
                techniques with modern trends.
              </p>
              <p className="text-white/60 leading-relaxed">
                We believe every man deserves to look and feel his best. That&apos;s
                why we&apos;ve created an environment that goes beyond the ordinary
                barbershop experience, offering premium services in a sophisticated
                setting.
              </p>
            </div>

            {/* Stats */}
            <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="glass rounded-xl p-4 text-center h-full hover:border-[#D4AF37]/20 transition-colors duration-300">
                    <div className="w-10 h-10 mx-auto rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-3 group-hover:bg-[#D4AF37]/20 transition-colors">
                      <stat.icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div className="font-[var(--font-heading)] text-xl md:text-2xl text-white mb-1">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        isInView={isInView}
                      />
                    </div>
                    <p className="text-white/40 text-xs uppercase tracking-wider">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
