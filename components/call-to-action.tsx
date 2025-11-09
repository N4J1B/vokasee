"use client"

import { motion } from "motion/react"

export default function CallToAction() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Mari Bersama Perkuat Pendidikan Vokasi
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-white opacity-90 mb-12"
        >
          Pemahaman tentang pentingnya magang adalah langkah awal menuju ekosistem pendidikan vokasi yang lebih baik
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ActionCard
            icon="📊"
            title="Download Infografis Edukasi"
            description="Infografis: Peran Magang dalam Penguatan Kompetensi untuk keperluan edukasi dan presentasi"
            index={0}
          />
          <ActionCard
            icon="📚"
            title="Akses Referensi Lengkap"
            description="Daftar sumber data dan literatur - link ke studi dan penelitian terkait program magang"
            index={1}
          />
          <ActionCard
            icon="🔗"
            title="Bagikan Pengetahuan"
            description="Share ke media sosial untuk edukasi lebih luas #MagangVokasi #PendidikanVokasi"
            index={2}
          />
          <ActionCard
            icon="💬"
            title="Diskusi & Kolaborasi"
            description="Tertarik diskusi lebih lanjut? Hubungi institusi untuk forum diskusi dan kolaborasi akademis"
            index={3}
          />
        </div>
      </div>
    </section>
  )
}

function ActionCard({ icon, title, description, index }: { icon: string; title: string; description: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-white opacity-80 text-sm">{description}</p>
    </motion.div>
  )
}
