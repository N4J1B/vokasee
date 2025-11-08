export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Tentang
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Magang
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Data
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Edukasi</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Kompetensi
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Stakeholder
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Rekomendasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Referensi
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Sumber</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  BPS
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Kemendikbudristek
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Kemnaker
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Tracer Study
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Kontak</h3>
            <p className="text-sm opacity-80 mb-3">Hubungi kami untuk diskusi dan kolaborasi akademis</p>
            <p className="text-sm opacity-80">Email: info@magang-vokasi.id</p>
          </div>
        </div>

        <div className="border-t border-white border-opacity-10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-70">© 2025 Platform Edukasi Magang Vokasi. All rights reserved.</p>
            <div className="flex gap-6 text-sm opacity-70">
              <a href="#" className="hover:opacity-100 transition-opacity">
                Privasi
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                Syarat Penggunaan
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                Disclaimer
              </a>
            </div>
          </div>

          <p className="text-xs opacity-60 mt-4">
            <strong>Disclaimer:</strong> Website ini adalah platform edukasi murni, bukan platform rekrutmen, promosi
            komersial, atau marketing. Semua konten disajikan untuk tujuan penelitian dan edukasi akademis.
          </p>
        </div>
      </div>
    </footer>
  )
}
