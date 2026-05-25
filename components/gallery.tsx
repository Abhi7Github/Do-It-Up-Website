"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1976&auto=format&fit=crop",
    alt: "Classic fade haircut",
    category: "Men",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1976&auto=format&fit=crop",
    alt: "Women's layered cut",
    category: "Women",
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop",
    alt: "Modern salon interior",
    category: "Studio",
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1976&auto=format&fit=crop",
    alt: "Beard styling",
    category: "Men",
  },
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1969&auto=format&fit=crop",
    alt: "Hair coloring",
    category: "Women",
  },
  {
    src: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=2070&auto=format&fit=crop",
    alt: "Bridal hairstyle",
    category: "Women",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop",
    alt: "Precision cut",
    category: "Men",
  },
  {
    src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1974&auto=format&fit=crop",
    alt: "Elegant updo",
    category: "Women",
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1976&auto=format&fit=crop",
    alt: "Beard styling",
    category: "Men",
  },
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1969&auto=format&fit=crop",
    alt: "Hair coloring",
    category: "Women",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      )
    }
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1
      )
    }
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImage === null) return
    if (e.key === "ArrowLeft") handlePrev()
    if (e.key === "ArrowRight") handleNext()
    if (e.key === "Escape") setSelectedImage(null)
  }

  return (
    <section id="gallery" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#080808] to-[#0B0B0B]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs md:text-sm font-medium">
              Our Work
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
            STYLE GALLERY
          </motion.h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => {
            const isLarge = index === 2 || index === 5
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.08,
                  ease: [0.23, 1, 0.32, 1]
                }}
                className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                  isLarge ? "col-span-2 row-span-2" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <div className={`relative ${isLarge ? "aspect-square" : "aspect-square"}`}>
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-[#0B0B0B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content on hover */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <span className={`inline-block px-3 py-1 text-[10px] uppercase tracking-wider rounded-full mb-2 ${
                        image.category === "Men" 
                          ? "text-blue-300 bg-blue-500/20" 
                          : image.category === "Women"
                          ? "text-pink-300 bg-pink-500/20"
                          : "text-[#0B0B0B] bg-[#D4AF37]"
                      }`}>
                        {image.category}
                      </span>
                      <p className="text-white font-medium text-sm md:text-base">{image.alt}</p>
                    </motion.div>
                  </div>

                  {/* Zoom icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>

                  {/* Border on hover */}
                  <div className="absolute inset-0 border-2 border-[#D4AF37]/0 group-hover:border-[#D4AF37]/30 rounded-xl transition-colors duration-300 pointer-events-none" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#0B0B0B]/98 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all z-10"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Prev Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={(e) => {
                e.stopPropagation()
                handlePrev()
              }}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0B0B0B] to-transparent">
                <span className={`inline-block px-3 py-1 text-xs uppercase tracking-wider rounded-full mb-2 ${
                  galleryImages[selectedImage].category === "Men" 
                    ? "text-blue-300 bg-blue-500/20" 
                    : galleryImages[selectedImage].category === "Women"
                    ? "text-pink-300 bg-pink-500/20"
                    : "text-[#0B0B0B] bg-[#D4AF37]"
                }`}>
                  {galleryImages[selectedImage].category}
                </span>
                <p className="text-white text-lg">{galleryImages[selectedImage].alt}</p>
              </div>
            </motion.div>

            {/* Next Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
