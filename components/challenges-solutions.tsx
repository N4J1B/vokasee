"use client"

import { motion } from "motion/react"

export default function ChallengesAndSolutions() {
  const items = [
    {
      challenge: "Kesenjangan Ekspektasi",
      problem: "Perbedaan harapan mahasiswa vs realitas industri",
      solution: "Pembekalan yang komprehensif dan realistic preview tentang dunia kerja",
    },
    {
      challenge: "Adaptasi Lingkungan Kerja",
      problem: "Culture shock dan adjustment period yang menantang",
      solution: "Mentoring yang solid dan support system yang kuat dari institusi",
    },
    {
      challenge: "Keseimbangan Pembelajaran-Produktivitas",
      problem: "Menyeimbangkan tujuan edukasi dengan kontribusi kerja produktif",
      solution: "Rancangan program yang jelas dengan learning objectives yang terukur",
    },
    {
      challenge: "Evaluasi Kompetensi",
      problem: "Mengukur pencapaian learning outcomes dengan akurat",
      solution: "Rubrik penilaian yang terstandar dan holistik serta objektif",
    },
    {
      challenge: "Akses dan Pemerataan",
      problem: "Tidak semua mahasiswa mendapat kesempatan magang yang setara",
      solution: "Kemitraan industri yang lebih luas dan program yang inklusif",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Tantangan dan Solusi</h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Identifikasi tantangan umum dan strategi solusi untuk program magang yang efektif
          </p>
        </div>

        <div className="space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-background-secondary rounded-lg border border-border-light"
            >
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.challenge}</h3>
                <p className="text-foreground-secondary">{item.problem}</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-3xl">→</div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-success mb-2">Solusi</h4>
                <p className="text-foreground-secondary">{item.solution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
