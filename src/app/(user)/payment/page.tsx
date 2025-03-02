export default function PaymentPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Riwayat Pembayaran</h1>
        <div className="bg-white p-6 rounded-lg shadow overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">Tanggal</th>
                <th className="px-4 py-2">Booking ID</th>
                <th className="px-4 py-2">Jumlah</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">2023-02-20</td>
                <td className="border px-4 py-2">BK123456</td>
                <td className="border px-4 py-2">Rp 5.000.000</td>
                <td className="border px-4 py-2 text-green-600">Lunas</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2023-01-15</td>
                <td className="border px-4 py-2">BK123455</td>
                <td className="border px-4 py-2">Rp 7.000.000</td>
                <td className="border px-4 py-2 text-red-600">Belum Lunas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  