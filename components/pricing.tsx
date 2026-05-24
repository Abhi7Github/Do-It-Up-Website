"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Crown, Sparkles, Star } from "lucide-react"
import Link from "next/link"

const packages = [
  {
    name: "Essential",
    icon: Sparkles,
    price: "$45",
    period: "per visit",
    description: "Perfect for regular maintenance",
    features: [
      "Signature Haircut",
      "Hot Towel Service",
      "Hair Wash & Conditioning",
      "Styling & Finishing",
    ],
    popular: false,
  },
  {
    name: "Premium",
    icon: Star,
    price: "$75",
    period: "per visit",
    description: "Our most popular package",
    features: [
      "Signature Haircut",
      "Beard Trim & Shaping",
      "Royal Hot Towel Shave",
      "Scalp Massage",
      "Premium Products",
    ],
    popular: true,
  },
  {
    name: "Royal VIP",
    icon: Crown,
    price: "$199",
    period: "monthly",
    description: "The ultimate grooming experience",
    features: [
      "Unlimited Haircuts",
      "Unlimited Beard Trims",
      "2 Royal Shaves",
      "Monthly Facial",
      "Priority Booking",
      "Complimentary Drinks",
    ],
    popular: false,
  },
]

export function Pricing() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0B0B0B]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#D4AF37]/[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-[#CD7F32]/[0.02] rounded-full blur-3xl" />

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
              Pricing
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
            CHOOSE YOUR PACKAGE
          </motion.h2>
        </div>

        {/* Pricing Cards */}
        <div ref={containerRef} className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.23, 1, 0.32, 1]
              }}
              className={`relative group ${pkg.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-[#D4AF37] to-[#CD7F32] text-[#0B0B0B] text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-[#D4AF37]/20 z-10"
                >
                  Most Popular
                </motion.div>
              )}

              <div className={`h-full luxury-card rounded-2xl p-6 md:p-8 relative overflow-hidden ${
                pkg.popular
                  ? "bg-gradient-to-b from-[#D4AF37]/[0.08] to-transparent border-2 border-[#D4AF37]/20"
                  : "glass border border-white/5"
              }`}>
                {/* Glow effect for popular */}
                {pkg.popular && (
                  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl" />
                )}

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-6 ${
                    pkg.popular
                      ? "bg-gradient-to-br from-[#D4AF37] to-[#CD7F32] shadow-lg shadow-[#D4AF37]/20"
                      : "bg-white/5 group-hover:bg-[#D4AF37]/10 transition-colors"
                  }`}>
                    <pkg.icon className={`w-6 h-6 md:w-7 md:h-7 ${
                      pkg.popular ? "text-[#0B0B0B]" : "text-[#D4AF37]"
                    }`} />
                  </div>

                  {/* Name & Price */}
                  <h3 className="font-[var(--font-heading)] text-xl md:text-2xl text-white tracking-wide mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-[var(--font-heading)] text-4xl md:text-5xl text-gradient">
                      {pkg.price}
                    </span>
                    <span className="text-white/40 text-sm">{pkg.period}</span>
                  </div>
                  <p className="text-white/50 text-sm mb-8">{pkg.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <motion.li 
                        key={feature} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-[#D4AF37]" />
                        </div>
                        <span className="text-white/70 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="#booking"
                      className={`block w-full py-3.5 md:py-4 text-center font-semibold uppercase text-sm tracking-wider rounded-xl transition-all duration-300 ${
                        pkg.popular
                          ? "btn-primary text-[#0B0B0B]"
                          : "border border-white/10 text-white hover:border-[#D4AF37]/30 hover:text-[#D4AF37] hover:bg-[#D4AF37]/5"
                      }`}
                    >
                      <span className="relative z-10">Get Started</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
