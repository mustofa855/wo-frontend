// src/app/page.tsx
import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: 'url(/images/portfolio1.jpg)' }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">
              Mewujudkan Pernikahan Impian Anda
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Solusi lengkap untuk wedding organizer profesional
            </p>
            <a
              href="#services"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Lihat Layanan Kami
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Tentang Kami</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/images/portfolio1.jpg"
                alt="Tentang Kami"
                width={600}
                height={400}
                className="rounded-md shadow-md"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-gray-700 mb-4">
                Kami adalah wedding organizer profesional yang berpengalaman
                dalam menyelenggarakan pernikahan impian. Kami mengurus segala
                detail, mulai dari konsep, dekorasi, catering, hingga dokumentasi,
                agar momen spesial Anda berjalan lancar.
              </p>
              <p className="text-gray-700">
                Dengan tim yang kreatif dan berdedikasi, kami menjamin pengalaman
                pernikahan yang tak terlupakan. Mari wujudkan momen bahagia Anda
                bersama kami!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-md shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Paket Pernikahan</h3>
              <p className="text-gray-700">
                Paket lengkap untuk pernikahan yang sesuai dengan kebutuhan dan
                anggaran Anda.
              </p>
            </div>
            <div className="bg-white p-6 rounded-md shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Dekorasi &amp; Venue</h3>
              <p className="text-gray-700">
                Dekorasi elegan dan pemilihan venue yang menakjubkan untuk momen
                istimewa Anda.
              </p>
            </div>
            <div className="bg-white p-6 rounded-md shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Dokumentasi</h3>
              <p className="text-gray-700">
                Jasa fotografi dan videografi untuk mengabadikan setiap momen
                berharga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-md overflow-hidden shadow-md">
              <Image
                src="/images/portfolio1.jpg"
                alt="Portfolio 1"
                width={400}
                height={300}
                className="object-cover w-full h-56"
              />
            </div>
            <div className="rounded-md overflow-hidden shadow-md">
              <Image
                src="/images/portfolio1.jpg"
                alt="Portfolio 2"
                width={400}
                height={300}
                className="object-cover w-full h-56"
              />
            </div>
            <div className="rounded-md overflow-hidden shadow-md">
              <Image
                src="/images/portfolio1.jpg"
                alt="Portfolio 3"
                width={400}
                height={300}
                className="object-cover w-full h-56"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Testimoni Klien
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-md shadow">
              <p className="text-gray-700 italic mb-4">
                &quot;Pengalaman yang luar biasa! Tim yang profesional dan kreatif membuat
                hari pernikahan kami menjadi momen yang tak terlupakan.&quot;
              </p>
              <p className="text-gray-900 font-bold">- Ani, Jakarta</p>
            </div>
            <div className="bg-white p-6 rounded-md shadow">
              <p className="text-gray-700 italic mb-4">
                &quot;Pelayanan yang sangat memuaskan. Semua detail diurus dengan baik,
                membuat kami bisa menikmati hari spesial tanpa kekhawatiran.&quot;
              </p>
              <p className="text-gray-900 font-bold">- Budi, Bandung</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Siap Wujudkan Pernikahan Impian Anda?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Hubungi kami sekarang untuk konsultasi gratis dan penawaran spesial.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors"
          >
            Hubungi Kami
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Wedding Organizer. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
