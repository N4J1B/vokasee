"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

export default function References() {
  const [expandedSection, setExpandedSection] = useState(0)

  const references = [
    {
      title: "Sumber Data",
      items: [
        { label: "BPS", description: "Badan Pusat Statistik - Statistik Ketenagakerjaan dan Data Lulusan Vokasi" },
        {
          label: "Kemendikbudristek",
          description: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi - Data Pendidikan Vokasi",
        },
        { label: "Kemnaker", description: "Kementerian Ketenagakerjaan - Program Link and Match" },
        { label: "Tracer Study", description: "Tracer Study Perguruan Tinggi Vokasi - Data Alumni dan Employability" },
      ],
    },
    {
      title: "Literatur & Penelitian",
      items: [
        {
          label: "Work-Based Learning",
          description: "Journal articles tentang work-based learning dalam pendidikan vokasi",
        },
        { label: "Impact Studies", description: "Studi dampak program magang terhadap employability dan kompetensi" },
        { label: "Competency Framework", description: "Framework kompetensi vokasi dan model pengembangan kompetensi" },
        {
          label: "Higher Education Research",
          description: "Penelitian tentang pendidikan tinggi vokasi dan industri collaboration",
        },
      ],
    },
    {
      title: "Metodologi",
      items: [
        {
          label: "Data Collection",
          description: "Data dikumpulkan dari berbagai sumber kredibel dengan metodologi yang terstandar",
        },
        {
          label: "Data Presentation",
          description: "Presentasi data mengikuti prinsip transparansi, akurasi, dan konteks yang jelas",
        },
        {
          label: "Limitations",
          description: "Tingkat akurasi data bergantung pada metodologi pengumpulan, sampel, dan periode waktu",
        },
        {
          label: "Update Frequency",
          description:
            "Terakhir diperbarui: November 2024. Data akan diperbarui berkala sesuai ketersediaan data terbaru",
        },
      ],
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Sumber & Referensi</h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Daftar lengkap sumber data, literatur, dan metodologi untuk memastikan kredibilitas akademis
          </p>
        </div>

        <div className="space-y-4">
          {references.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: sectionIndex * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="border border-border-light rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedSection(expandedSection === sectionIndex ? -1 : sectionIndex)}
                className="w-full bg-background-secondary hover:bg-background-tertiary p-6 flex items-center justify-between transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
                <motion.div
                  animate={{ rotate: expandedSection === sectionIndex ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-primary" />
                </motion.div>
              </button>
              <AnimatePresence>
                {expandedSection === sectionIndex && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white border-t border-border-light overflow-hidden"
                  >
                    <div className="px-6 py-4 space-y-4">
                      {section.items.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.08 }}
                          className="pb-4 border-b border-border-light last:border-0 last:pb-0"
                        >
                          <h4 className="font-semibold text-foreground mb-1">{item.label}</h4>
                          <p className="text-sm text-foreground-secondary">{item.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 border-l-4 border-primary p-6 rounded">
          <p className="text-sm text-foreground-secondary">
            <strong>Catatan:</strong> Website ini dibuat untuk tujuan edukasi dan penelitian. Semua data disajikan
            dengan integritas akademis dan objektifitas tinggi.
          </p>
        </div>
      </div>
    </section>
  )
}
