"use client"

import { motion } from "motion/react"

export default function UnderstandingInternship() {
  return (
    <section id="understanding" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Memahami Magang Industri</h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Eksplorasi mendalam tentang peran magang sebagai bagian integral dari pendidikan vokasi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Definisi Akademis"
            description="Magang sebagai bagian integral kurikulum pendidikan vokasi yang memfasilitasi pembelajaran berbasis pengalaman di lingkungan kerja nyata."
            icon="📚"
          />
          <Card
            title="Konteks Pendidikan Vokasi"
            description="Filosofi pendidikan vokasi yang berfokus pada aplikasi praktis pengetahuan, berbeda dengan pendekatan akademis tradisional."
            icon="🎓"
          />
          <Card
            title="Tujuan Pedagogis"
            description="Aplikasi pengetahuan dalam konteks nyata, pembelajaran experiential, dan pembentukan identitas profesional yang kuat."
            icon="🎯"
          />
          <Card
            title="Model Magang"
            description="Berbagai pendekatan implementasi: work-based learning, apprenticeship, dan industrial attachment yang disesuaikan dengan kebutuhan."
            icon="⚙️"
          />
        </div>
      </div>
    </section>
  )
}

function Card({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-white border border-border-light rounded-lg p-8 hover:shadow-lg transition-shadow"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-foreground-secondary">{description}</p>
    </motion.div>
  )
}
