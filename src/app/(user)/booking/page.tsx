'use client';
import { useState } from 'react';

export default function BookingPage() {
  const [date, setDate] = useState('');
  const [packageType, setPackageType] = useState('');
  const [details, setDetails] = useState('');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Formulir Booking</h1>
      <div className="bg-white p-6 rounded-lg shadow max-w-lg mx-auto">
        <form onSubmit={(e) => { e.preventDefault(); alert("Booking submitted"); }}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Tanggal Acara</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Paket Layanan</label>
            <select
              value={packageType}
              onChange={(e) => setPackageType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            >
              <option value="">Pilih paket</option>
              <option value="basic">Paket Basic</option>
              <option value="premium">Paket Premium</option>
              <option value="custom">Paket Custom</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Detail Acara</label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Ceritakan detail acara pernikahan Anda..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Kirim Booking
          </button>
        </form>
      </div>
    </div>
  );
}
