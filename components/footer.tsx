"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Twitter, Youtube, ArrowUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  services: [
    { name: "Men's Haircuts", href: "#services" },
    { name: "Women's Haircuts", href: "#services" },
    { name: "Hair Coloring", href: "#services" },
    { name: "Beard Styling", href: "#services" },
    { name: "Bridal Services", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ],
  support: [
    { name: "FAQs", href: "#" },
    { name: "Book Online", href: "#booking" },
    { name: "Gift Cards", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Top Border */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      <div className="container-custom py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 md:col-span-4 lg:col-span-2"
          >
            <Link href="#home" className="inline-block mb-5">
              <Image
                src="/images/logo.png"
                alt="Do It Up Unisex Salon"
                width={200}
                height={60}
                className="h-14 md:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-white/50 leading-relaxed mb-6 max-w-sm text-sm">
              Premium unisex salon by Nagesh Sonawane. Where every cut
              is crafted with precision for both men and women.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-[var(--font-heading)] text-lg md:text-xl text-white tracking-wide mb-4 md:mb-5">
              SERVICES
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-[#D4AF37] transition-colors text-sm inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-[var(--font-heading)] text-lg md:text-xl text-white tracking-wide mb-4 md:mb-5">
              COMPANY
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-[#D4AF37] transition-colors text-sm inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-[var(--font-heading)] text-lg md:text-xl text-white tracking-wide mb-4 md:mb-5">
              SUPPORT
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-[#D4AF37] transition-colors text-sm inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs md:text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Do It Up Unisex Salon by Nagesh Sonawane. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#D4AF37]/30 hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
