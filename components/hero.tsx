"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"
import { motion } from "motion/react"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = () => {
    document.getElementById("understanding")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-primary to-accent-dark flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-secondary-light/20 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Peran Magang Industri dalam Penguatan Kompetensi Mahasiswa Vokasi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-white opacity-90 mb-12"
        >
          Memahami Pentingnya Pengalaman Kerja Nyata dalam Pendidikan Vokasi
        </motion.p>

        {/* Key Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <StatCard number="81.36%" label="Tingkat Employability dengan Magang" />
          <StatCard number="1.8x" label="Lebih Besar Peluang Terserap Industri" />
          <StatCard number="+46%" label="Peningkatan Kesiapan Profesional" />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          onClick={scrollToSection}
          className="mt-12 flex flex-col items-center justify-center gap-2 text-white hover:opacity-75 transition-opacity cursor-pointer"
        >
          <span className="text-sm font-medium">Jelajahi Peran Magang</span>
          <ArrowDown className="w-6 h-6 animate-bounce" style={{ animationDelay: "0s" }} />
        </motion.button>
      </div>
    </section>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Extract only numeric value from the string
    const numValue = Number.parseFloat(number.replace(/[^\d.]/g, ""))
    if (isNaN(numValue)) return

    const increment = numValue / 20
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numValue) {
        setCount(numValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 30)

    return () => clearInterval(timer)
  }, [number])

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
        {count}
        {number.replace(/\d+\.?\d*/g, "")}
      </div>
      <p className="text-white opacity-80 text-sm">{label}</p>
    </div>
  )
}
