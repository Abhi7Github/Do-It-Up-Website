"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.slice(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isMobileMenuOpen])

  const handleNavClick = useCallback((href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "py-2 glass-strong shadow-lg shadow-black/10" 
            : "py-4 bg-gradient-to-b from-[#0B0B0B]/80 to-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="#home" 
            onClick={() => handleNavClick("#home")}
            className="flex items-center group"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative h-14 md:h-18 w-auto"
            >
              <Image
                src="/images/logo.png"
                alt="Do It Up Unisex Salon"
                width={250}
                height={250}
                className=" w-fit object-contain max-h-[100px]"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className="relative px-4 py-2 group"
              >
                <span className={`text-[13px] uppercase tracking-[0.15em] transition-colors duration-300 ${
                  activeSection === link.href.slice(1) 
                    ? "text-[#D4AF37]" 
                    : "text-white/70 group-hover:text-white"
                }`}>
                  {link.name}
                </span>
                <motion.span 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#CD7F32] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: activeSection === link.href.slice(1) ? "60%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#booking"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("#booking")
                }}
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-[#0B0B0B] font-semibold uppercase text-[13px] tracking-wider rounded-full"
              >
                <span>Book Now</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm bg-[#0B0B0B] border-l border-[#D4AF37]/10 lg:hidden"
            >
              {/* Close Button */}
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <Image
                  src="/images/logo.png"
                  alt="Do It Up Unisex Salon"
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>
              </div>

              {/* Links */}
              <nav className="p-6">
                <ul className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick(link.href)
                        }}
                        className={`block py-4 text-lg uppercase tracking-widest transition-colors duration-300 ${
                          activeSection === link.href.slice(1)
                            ? "text-[#D4AF37]"
                            : "text-white/70 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 pt-8 border-t border-white/10"
                >
                  <Link
                    href="#booking"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick("#booking")
                    }}
                    className="btn-primary flex items-center justify-center gap-2 w-full py-4 text-[#0B0B0B] font-semibold uppercase tracking-wider rounded-xl"
                  >
                    <span>Book Appointment</span>
                  </Link>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 pt-8 border-t border-white/10 space-y-3"
                >
                  <p className="text-white/50 text-sm">Contact us</p>
                  <a href="tel:+919876543210" className="block text-white hover:text-[#D4AF37] transition-colors">
                    +91 98765 43210
                  </a>
                  <a href="mailto:info@doitup.salon" className="block text-white/70 hover:text-[#D4AF37] transition-colors text-sm">
                    info@doitup.salon
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
