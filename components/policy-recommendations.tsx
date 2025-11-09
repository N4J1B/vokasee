"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

export default function PolicyRecommendations() {
  const [expanded, setExpanded] = useState(0)

  const recommendations = [
    {
      stakeholder: "Institusi Pendidikan",
      icon: "🏫",
      items: [
        "Integrasi magang dalam kurikulum secara sistematis",
        "Pengembangan kemitraan industri yang berkelanjutan",
        "Sistem monitoring dan evaluasi yang robust",
      ],
    },
    {
      stakeholder: "Industri",
      icon: "🏭",
      items: [
        "Komitmen pada aspek pembelajaran, bukan hanya produktivitas",
        "Penyediaan mentor yang kompeten dan berdedikasi",
        "Feedback konstruktif untuk institusi pendidikan",
      ],
    },
    {
      stakeholder: "Pemerintah",
      icon: "🏛️",
      items: [
        "Kebijakan yang mendukung kolaborasi pendidikan-industri",
        "Insentif untuk industri yang berpartisipasi aktif",
        "Standardisasi kualitas program magang",
      ],
    },
    {
      stakeholder: "Mahasiswa",
      icon: "👨‍🎓",
      items: [
        "Sikap proaktif dalam pembelajaran dan pengembangan diri",
        "Refleksi mendalam atas pengalaman magang",
        "Dokumentasi perkembangan kompetensi yang jelas",
      ],
    },
  ]

  return (
    <section className="py-20 px-4 bg-background-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Rekomendasi Kebijakan & Praktik Terbaik
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Strategi implementasi berbasis evidensi untuk semua stakeholder
          </p>
        </div>

        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="border border-border-light rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpanded(expanded === index ? -1 : index)}
                className="w-full bg-white hover:bg-background-secondary p-6 flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{rec.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground text-left">{rec.stakeholder}</h3>
                </div>
                <motion.div
                  animate={{ rotate: expanded === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-primary" />
                </motion.div>
              </button>
              <AnimatePresence>
                {expanded === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-background-secondary border-t border-border-light overflow-hidden"
                  >
                    <ul className="space-y-3 px-6 py-4">
                      {rec.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.08 }}
                          className="flex items-start gap-3"
                        >
                          <span className="text-primary font-bold mt-1">✓</span>
                          <span className="text-foreground-secondary">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
