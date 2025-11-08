export default function CallToAction() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Mari Bersama Perkuat Pendidikan Vokasi</h2>
        <p className="text-xl text-white opacity-90 mb-12">
          Pemahaman tentang pentingnya magang adalah langkah awal menuju ekosistem pendidikan vokasi yang lebih baik
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ActionCard
            icon="📊"
            title="Download Infografis Edukasi"
            description="Infografis: Peran Magang dalam Penguatan Kompetensi untuk keperluan edukasi dan presentasi"
          />
          <ActionCard
            icon="📚"
            title="Akses Referensi Lengkap"
            description="Daftar sumber data dan literatur - link ke studi dan penelitian terkait program magang"
          />
          <ActionCard
            icon="🔗"
            title="Bagikan Pengetahuan"
            description="Share ke media sosial untuk edukasi lebih luas #MagangVokasi #PendidikanVokasi"
          />
          <ActionCard
            icon="💬"
            title="Diskusi & Kolaborasi"
            description="Tertarik diskusi lebih lanjut? Hubungi institusi untuk forum diskusi dan kolaborasi akademis"
          />
        </div>
      </div>
    </section>
  )
}

function ActionCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-white opacity-80 text-sm">{description}</p>
    </div>
  )
}
