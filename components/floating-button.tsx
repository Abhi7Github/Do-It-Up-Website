"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Calendar, X, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"

export function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsExpanded(false)
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-40"
        >
          {/* Expanded Options */}
          <AnimatePresence>
            {isExpanded && (
              <>
                {/* Backdrop for mobile */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
                  onClick={() => setIsExpanded(false)}
                />

                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-20 right-0 flex flex-col gap-3 min-w-[180px]"
                >
                  <Link
                    href="#booking"
                    onClick={() => setIsExpanded(false)}
                    className="flex items-center gap-3 px-4 py-3 glass-strong rounded-xl hover:border-[#D4AF37]/20 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
                      <Calendar className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <span className="text-white text-sm font-medium whitespace-nowrap">
                      Book Online
                    </span>
                  </Link>

                  <a
                    href="tel:+15551234567"
                    className="flex items-center gap-3 px-4 py-3 glass-strong rounded-xl hover:border-[#D4AF37]/20 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
                      <Phone className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <span className="text-white text-sm font-medium whitespace-nowrap">
                      Call Us
                    </span>
                  </a>

                  <a
                    href="https://wa.me/15551234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 glass-strong rounded-xl hover:border-[#D4AF37]/20 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
                      <MessageCircle className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <span className="text-white text-sm font-medium whitespace-nowrap">
                      WhatsApp
                    </span>
                  </a>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#CD7F32] flex items-center justify-center shadow-lg shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/50 transition-shadow"
            aria-label={isExpanded ? "Close menu" : "Open contact options"}
          >
            {/* Pulse effect */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-[#D4AF37]"
            />

            <motion.div
              animate={{ rotate: isExpanded ? 135 : 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              {isExpanded ? (
                <X className="w-6 h-6 md:w-7 md:h-7 text-[#0B0B0B]" />
              ) : (
                <Calendar className="w-6 h-6 md:w-7 md:h-7 text-[#0B0B0B]" />
              )}
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
