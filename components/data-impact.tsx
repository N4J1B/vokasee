"use client"

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export default function DataAndImpact() {
  const employabilityData = [
    { category: "Dengan Magang", value: 78 },
    { category: "Tanpa Magang", value: 45 },
  ]

  const durationData = [
    { duration: "0 Bulan", readiness: 35 },
    { duration: "1 Bulan", readiness: 42 },
    { duration: "3 Bulan", readiness: 65 },
    { duration: "6 Bulan", readiness: 82 },
    { duration: "9 Bulan", readiness: 88 },
  ]

  const competencyData = [
    { skill: "Teknis", before: 45, after: 85 },
    { skill: "Kognitif", before: 52, after: 78 },
    { skill: "Sosial", before: 48, after: 81 },
    { skill: "Personal", before: 50, after: 79 },
    { skill: "Profesional", before: 42, after: 84 },
  ]

  const benefitData = [
    { name: "Pemahaman Industri", value: 92 },
    { name: "Skill Teknis", value: 88 },
    { name: "Networking", value: 75 },
    { name: "Confidence", value: 86 },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Data & Fakta: Dampak Magang</h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Bukti empiris tentang peran signifikan magang dalam pengembangan kompetensi dan employability mahasiswa
            vokasi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Employability Rate */}
          <div className="bg-background-secondary p-8 rounded-lg border border-border-light">
            <h3 className="text-xl font-bold text-foreground mb-2">Tingkat Employability</h3>
            <p className="text-sm text-foreground-secondary mb-6">Lulusan vokasi terserap dalam 1 tahun (%)</p>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={employabilityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Duration vs Readiness */}
          <div className="bg-background-secondary p-8 rounded-lg border border-border-light">
            <h3 className="text-xl font-bold text-foreground mb-2">Durasi Magang vs Kesiapan Kerja</h3>
            <p className="text-sm text-foreground-secondary mb-6">
              Korelasi antara durasi magang dan tingkat kesiapan (%)
            </p>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={durationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="duration" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="readiness" stroke="#7C3AED" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Competency Development */}
          <div className="bg-background-secondary p-8 rounded-lg border border-border-light md:col-span-2">
            <h3 className="text-xl font-bold text-foreground mb-2">Pengembangan Kompetensi Sebelum & Sesudah Magang</h3>
            <p className="text-sm text-foreground-secondary mb-6">
              Peningkatan skor kompetensi multi-dimensi (skala 0-100)
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={competencyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="skill" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="before" fill="#CBD5E1" name="Sebelum Magang" />
                <Bar dataKey="after" fill="#10B981" name="Sesudah Magang" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Perceived Benefits */}
          <div className="bg-background-secondary p-8 rounded-lg border border-border-light md:col-span-2">
            <h3 className="text-xl font-bold text-foreground mb-2">Persepsi Manfaat Magang (Mahasiswa)</h3>
            <p className="text-sm text-foreground-secondary mb-6">
              Tingkat kepuasan terhadap manfaat magang (skala Likert 0-100)
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={benefitData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={120} />
                <Tooltip />
                <Bar dataKey="value" fill="#06B6D4" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-accent bg-opacity-10 border-l-4 border-accent p-6 rounded">
          <p className="text-sm text-foreground-secondary">
            <strong>Sumber Data:</strong> BPS (2023-2024), Tracer Study Perguruan Tinggi Vokasi, Survey Institusi
            Pendidikan Vokasi
          </p>
          <p className="text-xs text-foreground-tertiary mt-2">
            <strong>Disclaimer:</strong> Data untuk tujuan edukasi dan penelitian. Tingkat akurasi bergantung pada
            metodologi pengumpulan data.
          </p>
        </div>
      </div>
    </section>
  )
}
