"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { motion } from "motion/react"

export default function CompetencyDimensions() {
  const [selected, setSelected] = useState(0)

  const dimensions = [
    {
      id: 0,
      name: "Teknis",
      title: "Kompetensi Teknis (Technical Competence)",
      color: "bg-primary",
      items: [
        "Penguasaan keterampilan spesifik bidang studi",
        "Penggunaan teknologi dan peralatan industri",
        "Pemahaman standar dan prosedur kerja",
        "Kemampuan troubleshooting dan problem-solving",
      ],
    },
    {
      id: 1,
      name: "Kognitif",
      title: "Kompetensi Kognitif (Cognitive Competence)",
      color: "bg-secondary",
      items: [
        "Pemecahan masalah dalam konteks nyata",
        "Berpikir kritis dan analitis",
        "Pengambilan keputusan yang tepat",
        "Pembelajaran berkelanjutan (learning to learn)",
      ],
    },
    {
      id: 2,
      name: "Sosial",
      title: "Kompetensi Sosial (Social Competence)",
      color: "bg-accent",
      items: [
        "Komunikasi efektif dalam tim",
        "Kolaborasi dan kerja sama",
        "Kemampuan interpersonal yang baik",
        "Pemahaman dinamika organisasi",
      ],
    },
    {
      id: 3,
      name: "Personal",
      title: "Kompetensi Personal (Personal Competence)",
      color: "bg-success",
      items: [
        "Manajemen waktu dan prioritas",
        "Adaptabilitas terhadap lingkungan baru",
        "Resiliensi dan pengelolaan stres",
        "Inisiatif dan kemandirian",
      ],
    },
    {
      id: 4,
      name: "Profesional",
      title: "Kompetensi Profesional (Professional Competence)",
      color: "bg-secondary-light",
      items: [
        "Etika kerja dan integritas",
        "Tanggung jawab dan akuntabilitas",
        "Pemahaman budaya kerja profesional",
        "Identitas profesional dalam bidang",
      ],
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Dimensi Kompetensi yang Dikuatkan</h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Lima dimensi kompetensi holistik yang berkembang melalui pengalaman magang
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pentagon Chart Alternative - Tabs */}
          <div className="flex flex-col gap-3">
            {dimensions.map((dim, index) => (
              <motion.button
                key={dim.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: false }}
                onClick={() => setSelected(dim.id)}
                className={`p-4 rounded-lg text-left transition-all ${
                  selected === dim.id
                    ? `${dim.color} text-white`
                    : "bg-background-secondary text-foreground hover:bg-background-tertiary"
                }`}
              >
                <div className="font-semibold">{dim.name}</div>
              </motion.button>
            ))}
          </div>

          {/* Detail View */}
          <motion.div
            key={selected}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-background-secondary p-8 rounded-lg border border-border-light"
          >
            {dimensions.map(
              (dim) =>
                selected === dim.id && (
                  <div key={dim.id}>
                    <div className={`w-2 h-12 ${dim.color} rounded mb-4`}></div>
                    <h3 className="text-2xl font-bold text-foreground mb-6">{dim.title}</h3>
                    <ul className="space-y-3">
                      {dim.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.08 }}
                          className="flex items-start gap-3"
                        >
                          <ChevronRight
                            className={`w-5 h-5 ${dim.color.replace("bg-", "text-")} mt-0.5 flex-shrink-0`}
                          />
                          <span className="text-foreground-secondary">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ),
            )}
          </motion.div>
        </div>

        <div className="mt-12 bg-yellow-50 border-l-4 border-accent p-6 rounded">
          <p className="text-sm text-foreground-secondary">
            <strong>Catatan:</strong> Pengembangan kompetensi bersifat holistik dan terintegrasi. Kelima dimensi
            berkembang secara bersamaan melalui pengalaman magang yang dirancang dengan baik.
          </p>
        </div>
      </div>
    </section>
  )
}
