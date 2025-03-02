export default function HistoryPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Riwayat Booking & Ulasan</h1>
        <div className="bg-white p-6 rounded-lg shadow space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Booking ID: BK123456</h2>
            <p>Tanggal: 2023-02-20</p>
            <p>Status: Selesai</p>
            <p className="mt-2 text-gray-700">
              Ulasan: &quot;Acara sangat mengesankan, pelayanan prima, dan semua detail berjalan lancar.&quot;
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Booking ID: BK123455</h2>
            <p>Tanggal: 2023-01-15</p>
            <p>Status: Selesai</p>
            <p className="mt-2 text-gray-700">
              Ulasan: &quot;Pengalaman yang menyenangkan, namun beberapa detail bisa diperbaiki.&quot;
            </p>
          </div>
        </div>
      </div>
    );
  }
  