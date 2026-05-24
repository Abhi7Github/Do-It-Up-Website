"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { Calendar, Clock, User, Phone, Mail, Scissors, CheckCircle2 } from "lucide-react"

const services = [
  "Signature Haircut",
  "Beard Sculpting",
  "Royal Shave",
  "VIP Package",
  "Kids Haircut",
  "Hair Coloring",
]

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
]

export function Booking() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
      })
    }, 3000)
  }

  return (
    <section
      ref={containerRef}
      id="booking"
      className="section-padding relative overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-[#0B0B0B]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/70 via-[#0B0B0B]/10 to-transparent" />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-[#CD7F32]/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 pt-10 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 md:w-12 h-px bg-gradient-to-r from-[#D4AF37] to-transparent" />
              <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs md:text-sm font-medium">
                Book Now
              </span>
            </div>

            <h2 className="font-[var(--font-heading)] heading-lg text-white mb-6 leading-[0.95]">
              SCHEDULE YOUR
              <br />
              <span className="text-gradient">APPOINTMENT</span>
            </h2>

            <p className="text-white/60 leading-relaxed mb-10 max-w-md">
              Ready for a fresh look? Book your appointment online and
              experience the royal treatment. Our expert barbers are waiting to
              serve you.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 glass rounded-xl group hover:border-[#D4AF37]/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Call Us</p>
                  <a href="tel:+15551234567" className="text-white font-medium hover:text-[#D4AF37] transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 glass rounded-xl group hover:border-[#D4AF37]/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Email Us</p>
                  <a href="mailto:info@royalcut.studio" className="text-white font-medium hover:text-[#D4AF37] transition-colors">
                    info@royalcut.studio
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-strong rounded-2xl p-6 md:p-8 lg:p-10 relative overflow-hidden"
            >
              {/* Form glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl" />

              {/* Success State */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-[#0B0B0B]/95 backdrop-blur-sm flex flex-col items-center justify-center z-10 rounded-2xl"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#CD7F32] flex items-center justify-center mb-4"
                  >
                    <CheckCircle2 className="w-8 h-8 text-[#0B0B0B]" />
                  </motion.div>
                  <h3 className="font-[var(--font-heading)] text-2xl text-white mb-2">Booking Confirmed!</h3>
                  <p className="text-white/60 text-center">We&apos;ll send you a confirmation email shortly.</p>
                </motion.div>
              )}

              <div className="space-y-5 relative z-10">
                {/* Name */}
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-[#D4AF37] transition-colors" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-[#D4AF37]/50 focus:bg-white/[0.07] focus:outline-none transition-all"
                    required
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-[#D4AF37] transition-colors" />
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-[#D4AF37]/50 focus:bg-white/[0.07] focus:outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-[#D4AF37] transition-colors" />
                    <input
                      type="tel"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-[#D4AF37]/50 focus:bg-white/[0.07] focus:outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Service */}
                <div className="relative group">
                  <Scissors className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-[#D4AF37] transition-colors pointer-events-none" />
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white appearance-none focus:border-[#D4AF37]/50 focus:bg-white/[0.07] focus:outline-none transition-all cursor-pointer"
                    required
                  >
                    <option value="" className="bg-[#0B0B0B] text-white/50">
                      Select Service
                    </option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-[#0B0B0B]">
                        {service}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 pointer-events-none" />
                </div>

                {/* Date & Time */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative group">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-[#D4AF37] transition-colors pointer-events-none" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#D4AF37]/50 focus:bg-white/[0.07] focus:outline-none transition-all [color-scheme:dark] cursor-pointer"
                      required
                    />
                  </div>
                  <div className="relative group">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-[#D4AF37] transition-colors pointer-events-none" />
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white appearance-none focus:border-[#D4AF37]/50 focus:bg-white/[0.07] focus:outline-none transition-all cursor-pointer"
                      required
                    >
                      <option value="" className="bg-[#0B0B0B] text-white/50">
                        Select Time
                      </option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time} className="bg-[#0B0B0B]">
                          {time}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 pointer-events-none" />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="btn-primary w-full py-4 text-[#0B0B0B] font-semibold uppercase tracking-wider rounded-xl disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-[#0B0B0B]/30 border-t-[#0B0B0B] rounded-full"
                        />
                        Booking...
                      </>
                    ) : (
                      "Book Appointment"
                    )}
                  </span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  )
}
