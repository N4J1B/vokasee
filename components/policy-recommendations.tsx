"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

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
            <div key={index} className="border border-border-light rounded-lg overflow-hidden">
              <button
                onClick={() => setExpanded(expanded === index ? -1 : index)}
                className="w-full bg-white hover:bg-background-secondary p-6 flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{rec.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground text-left">{rec.stakeholder}</h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform ${expanded === index ? "rotate-180" : ""}`}
                />
              </button>
              {expanded === index && (
                <div className="bg-background-secondary px-6 py-4 border-t border-border-light">
                  <ul className="space-y-3">
                    {rec.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">✓</span>
                        <span className="text-foreground-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
