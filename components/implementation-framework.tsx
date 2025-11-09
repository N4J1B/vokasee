"use client"

import { motion } from "motion/react"

export default function ImplementationFramework() {
  const phases = [
    {
      number: "1",
      title: "Fase Persiapan",
      items: ["Pembekalan akademis", "Orientasi kompetensi", "Persiapan mental & profesional"],
    },
    {
      number: "2",
      title: "Fase Pelaksanaan",
      items: ["Periode: 3-6 bulan", "Pembelajaran di lingkungan kerja", "Bimbingan mentor & dosen"],
    },
    {
      number: "3",
      title: "Fase Evaluasi",
      items: ["Penilaian kompetensi", "Refleksi pembelajaran", "Dokumentasi pengalaman"],
    },
  ]

  return (
    <section className="py-20 px-4 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Kerangka Umum Pelaksanaan Magang</h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Pola umum struktur program magang yang adaptif terhadap kebutuhan institusi
          </p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="bg-white border-2 border-primary rounded-lg p-8">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">
                  {phase.number}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2 text-foreground-secondary"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              {index < phases.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="bg-blue-50 border-l-4 border-primary p-6 rounded">
          <p className="text-foreground-secondary">
            <strong>Catatan Penting:</strong> Setiap institusi memiliki model dan prosedur berbeda. Framework ini
            menggambarkan pola umum, bukan standar baku yang mutlak.
          </p>
        </div>
      </div>
    </section>
  )
}
