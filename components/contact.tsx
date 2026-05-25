"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    content: "123 Royal Street, Suite 100",
    subContent: "New York, NY 10001",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (555) 123-4567",
    subContent: "Mon-Sat: 9AM - 8PM",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@royalcut.studio",
    subContent: "bookings@royalcut.studio",
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Mon - Fri: 9AM - 8PM",
    subContent: "Sat: 9AM - 6PM | Sun: Closed",
  },
]

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#080808] to-[#0B0B0B]" />

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
              Contact
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
            FIND US
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-full min-h-[350px] md:min-h-[400px] group"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30267.80778969754!2d73.8046595!3d18.507381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb732af849d%3A0xd4078b48b3fe44f0!2sKothrud%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1779688964562!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(85%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 border border-[#D4AF37]/10 rounded-2xl pointer-events-none group-hover:border-[#D4AF37]/20 transition-colors" /> */}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-5"
          >
            {/* Info Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass rounded-xl p-5 group hover:border-[#D4AF37]/20 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/20 transition-colors">
                    <info.icon className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-white font-medium mb-1 text-sm">{info.title}</h3>
                  <p className="text-white/70 text-sm">{info.content}</p>
                  <p className="text-white/40 text-xs mt-1">{info.subContent}</p>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass rounded-xl p-5"
            >
              <h3 className="text-white font-medium mb-4 text-sm">Follow Us</h3>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative overflow-hidden rounded-xl p-6 border border-[#D4AF37]/20"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-[#CD7F32]/5" />
              
              <div className="relative z-10">
                <h3 className="font-[var(--font-heading)] text-xl md:text-2xl text-white mb-2">
                  Ready for a Royal Experience?
                </h3>
                <p className="text-white/50 text-sm mb-5">
                  Book your appointment today and discover the difference.
                </p>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <a
                    href="#booking"
                    className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-[#0B0B0B] font-semibold uppercase text-sm tracking-wider rounded-xl"
                  >
                    <span>Book Now</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
