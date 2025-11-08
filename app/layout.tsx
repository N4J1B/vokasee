import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Peran Magang Industri dalam Penguatan Kompetensi Mahasiswa Vokasi",
  description:
    "Platform edukasi tentang pentingnya magang dalam pengembangan kompetensi mahasiswa vokasi - berbasis data dan penelitian akademis.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
