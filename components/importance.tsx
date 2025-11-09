"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

export default function ImportanceOfInternship() {
  const [expandedId, setExpandedId] = useState<number | null>(0)

  const importance = [
    {
      id: 0,
      title: "Menjembatani Kesenjangan Teori-Praktik",
      description:
        "Transfer pengetahuan dari pembelajaran akademis ke aplikasi nyata di dunia industri, menciptakan pemahaman holistik.",
    },
    {
      id: 1,
      title: "Pengembangan Kompetensi Holistik",
      description:
        "Integrasi hard skills (keterampilan teknis) dan soft skills (komunikasi, kolaborasi, kepemimpinan) dalam satu pengalaman kerja.",
    },
    {
      id: 2,
      title: "Sosialisasi Profesional",
      description:
        "Pemahaman mendalam tentang budaya kerja profesional, etika industri, dan norma-norma organisasi yang berlaku.",
    },
    {
      id: 3,
      title: "Validasi Pilihan Karir",
      description:
        "Kesempatan eksplorasi aktual bidang kerja untuk memvalidasi kecocokan minat dan kemampuan dengan pilihan karir.",
    },
    {
      id: 4,
      title: "Peningkatan Employability",
      description:
        "Pengalaman nyata meningkatkan readiness memasuki dunia kerja dengan relevansi langsung terhadap kebutuhan industri.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-background-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Mengapa Magang Penting?</h2>
          <p className="text-lg text-foreground-secondary">
            Lima peran fundamental magang dalam pengembangan kompetensi mahasiswa vokasi
          </p>
        </div>

        <div className="space-y-4">
          {importance.map((item) => (
            <div key={item.id} className="border border-border-light rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                className="w-full bg-white hover:bg-background-secondary p-6 flex items-center justify-between transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground text-left">{item.title}</h3>
                <motion.div
                  animate={{ rotate: expandedId === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-primary" />
                </motion.div>
              </button>
              <AnimatePresence>
                {expandedId === item.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/75 border-t border-border-light overflow-hidden"
                  >
                    <div className="px-6 py-4">
                      <p className="text-foreground-secondary">{item.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
