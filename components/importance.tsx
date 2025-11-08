"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

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
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform ${expandedId === item.id ? "rotate-180" : ""}`}
                />
              </button>
              {expandedId === item.id && (
                <div className="bg-white/75 px-6 py-4 border-t border-border-light">
                  <p className="text-foreground-secondary">{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
