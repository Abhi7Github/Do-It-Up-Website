"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Scissors, Sparkles, Droplets, Crown, ArrowRight, Flower2, Palette } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Scissors,
    title: "Men's Haircut",
    description:
      "Precision cutting tailored to your face shape and personal style. Includes consultation and styling.",
    price: "Rs.300",
    duration: "45 min",
    category: "men",
  },
  {
    icon: Flower2,
    title: "Women's Haircut",
    description:
      "Expert cutting and shaping for all hair types. From trendy bobs to layered styles, we create your perfect look.",
    price: "Rs.500",
    duration: "60 min",
    category: "women",
  },
  {
    icon: Sparkles,
    title: "Beard Sculpting",
    description:
      "Expert beard shaping and trimming with hot towel treatment and premium beard oils.",
    price: "Rs.200",
    duration: "30 min",
    category: "men",
  },
  {
    icon: Palette,
    title: "Hair Coloring",
    description:
      "Professional hair coloring services including highlights, balayage, and full color for men and women.",
    price: "Rs.1500",
    duration: "90 min",
    category: "unisex",
  },
  {
    icon: Droplets,
    title: "Hair Spa & Treatment",
    description:
      "Deep conditioning treatments, keratin, and spa services to rejuvenate and strengthen your hair.",
    price: "Rs.800",
    duration: "60 min",
    category: "unisex",
  },
  {
    icon: Crown,
    title: "Bridal Package",
    description:
      "Complete bridal styling including hair, makeup consultation, and pre-wedding treatments.",
    price: "Rs.5000",
    duration: "3 hrs",
    category: "women",
  },
]

export function Services() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#D4AF37]/[0.02] to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#CD7F32]/[0.02] to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs md:text-sm font-medium">
              For Him & Her
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
            OUR SERVICES
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div ref={containerRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="group luxury-card glass rounded-2xl p-6 md:p-8 relative overflow-hidden"
            >
              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-full ${
                  service.category === "men" 
                    ? "bg-blue-500/20 text-blue-300" 
                    : service.category === "women"
                    ? "bg-pink-500/20 text-pink-300"
                    : "bg-[#D4AF37]/20 text-[#D4AF37]"
                }`}>
                  {service.category === "unisex" ? "All" : service.category === "men" ? "Men" : "Women"}
                </span>
              </div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/[0.08] group-hover:via-transparent group-hover:to-[#CD7F32]/[0.05] transition-all duration-700" />
              
              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/20 transition-colors duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#CD7F32] flex items-center justify-center mb-6 shadow-lg shadow-[#D4AF37]/20"
                >
                  <service.icon className="w-7 h-7 text-[#0B0B0B]" />
                </motion.div>

                {/* Title */}
                <h3 className="font-[var(--font-heading)] text-xl md:text-2xl text-white mb-3 tracking-wide group-hover:text-gradient transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-3">
                  {service.description}
                </p>

                {/* Price & Duration */}
                <div className="flex items-center justify-between pt-5 border-t border-white/10">
                  <div>
                    <span className="text-[#D4AF37] font-[var(--font-heading)] text-2xl md:text-3xl">
                      {service.price}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50" />
                    {service.duration}
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <Link
            href="#pricing"
            className="inline-flex items-center gap-2 text-white/60 hover:text-[#D4AF37] transition-colors duration-300 group"
          >
            <span className="text-sm uppercase tracking-widest">View All Pricing</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
