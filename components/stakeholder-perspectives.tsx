"use client"

import { motion } from "motion/react"

export default function StakeholderPerspectives() {
  const perspectives = [
    {
      stakeholder: "Mahasiswa",
      icon: "👨‍🎓",
      quote: "Pengalaman magang memberikan pemahaman konteks yang tidak bisa didapat dari buku",
      insight: "Perubahan perspektif yang signifikan tentang dunia kerja dan kebutuhan kompetensi nyata",
    },
    {
      stakeholder: "Dosen Pembimbing",
      icon: "👨‍🏫",
      quote: "Mahasiswa yang magang menunjukkan peningkatan signifikan dalam critical thinking",
      insight: "Observasi jelas tentang perkembangan akademis dan kemampuan analisis yang lebih mendalam",
    },
    {
      stakeholder: "Industri",
      icon: "🏭",
      quote: "Mahasiswa magang berkontribusi nyata sambil belajar, win-win collaboration",
      insight: "Nilai tambah program magang bagi organisasi dan kontribusi positif terhadap proses bisnis",
    },
    {
      stakeholder: "Institusi Pendidikan",
      icon: "🏫",
      quote: "Magang memperkuat relevansi kurikulum dengan kebutuhan industri",
      insight: "Link and match yang kuat antara pendidikan akademis dan kebutuhan pasar kerja",
    },
  ]

  return (
    <section className="py-20 px-4 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Perspektif Stakeholder</h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Pandangan dari berbagai stakeholder tentang pentingnya magang dalam ekosistem pendidikan vokasi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {perspectives.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-lg p-8 border border-border-light hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{item.stakeholder}</h3>
                </div>
              </div>

              <blockquote className="border-l-4 border-primary pl-4 mb-6">
                <p className="text-foreground italic">"{item.quote}"</p>
              </blockquote>

              <p className="text-sm text-foreground-secondary bg-background-secondary p-4 rounded">
                <strong>Insight:</strong> {item.insight}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
