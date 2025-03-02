export default function DashboardPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard Pelanggan</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Booking Aktif</h2>
            <p>Anda belum memiliki booking aktif.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Status Pembayaran</h2>
            <p>Tidak ada pembayaran tertunda.</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Notifikasi</h2>
          <p>Tidak ada notifikasi baru.</p>
        </div>
      </div>
    );
  }
  