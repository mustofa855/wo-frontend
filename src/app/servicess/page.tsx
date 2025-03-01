// src/app/services/page.tsx
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section untuk Layanan */}
      <section
        className="bg-cover bg-center h-64 relative"
        style={{ backgroundImage: 'url(/images/service1.jpg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Layanan Kami
          </h1>
        </div>
      </section>

      {/* Introductory Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Paket dan Layanan Pernikahan
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Kami menyediakan berbagai paket dan layanan yang disesuaikan dengan
            kebutuhan serta impian Anda. Dari perencanaan hingga eksekusi,
            tim profesional kami siap mewujudkan pernikahan impian Anda.
          </p>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1: Paket Pernikahan Lengkap */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/service1.jpg"
                  alt="Paket Pernikahan Lengkap"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  Paket Pernikahan Lengkap
                </h3>
                <p className="text-gray-700 mb-4">
                  Solusi menyeluruh mulai dari perencanaan, dekorasi, catering,
                  hingga dokumentasi untuk memastikan hari spesial Anda sempurna.
                </p>
                <a
                  href="/contact"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Pelajari Lebih Lanjut &rarr;
                </a>
              </div>
            </div>

            {/* Service Card 2: Dekorasi & Venue */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/decore1.jpg"
                  alt="Dekorasi & Venue"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  Dekorasi &amp; Venue
                </h3>
                <p className="text-gray-700 mb-4">
                  Pemilihan venue dan dekorasi yang menawan sesuai tema pernikahan
                  Anda.
                </p>
                <a
                  href="/contact"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Pelajari Lebih Lanjut &rarr;
                </a>
              </div>
            </div>

            {/* Service Card 3: Dokumentasi & Videografi */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/fotografer1.jpg"
                  alt="Dokumentasi & Videografi"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  Dokumentasi &amp; Videografi
                </h3>
                <p className="text-gray-700 mb-4">
                  Abadikan setiap momen spesial Anda dengan hasil fotografi dan
                  videografi berkualitas tinggi.
                </p>
                <a
                  href="/contact"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Pelajari Lebih Lanjut &rarr;
                </a>
              </div>
            </div>

            {/* Service Card 4: Catering & Hiburan */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/catering1.jpg"
                  alt="Catering & Hiburan"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  Catering &amp; Hiburan
                </h3>
                <p className="text-gray-700 mb-4">
                  Nikmati sajian kuliner lezat dan hiburan yang mengesankan untuk
                  menyemarakkan acara.
                </p>
                <a
                  href="/contact"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Pelajari Lebih Lanjut &rarr;
                </a>
              </div>
            </div>

            {/* Service Card 5: Makeup & Styling */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/mua1.jpg"
                  alt="Makeup & Styling"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  Makeup &amp; Styling
                </h3>
                <p className="text-gray-700 mb-4">
                  Layanan profesional untuk makeup dan styling agar penampilan Anda
                  maksimal di hari istimewa.
                </p>
                <a
                  href="/contact"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Pelajari Lebih Lanjut &rarr;
                </a>
              </div>
            </div>

            {/* Service Card 6: Konsultasi Pernikahan */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/konsultasi1.jpg"
                  alt="Konsultasi Pernikahan"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  Konsultasi Pernikahan
                </h3>
                <p className="text-gray-700 mb-4">
                  Dapatkan sesi konsultasi gratis untuk mendiskusikan konsep dan
                  perencanaan pernikahan Anda bersama ahli kami.
                </p>
                <a
                  href="/contact"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Pelajari Lebih Lanjut &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Detail Layanan Kami
          </h2>
          <div className="space-y-8">
            <article>
              <h3 className="text-2xl font-semibold mb-2">
                Paket Pernikahan Lengkap
              </h3>
              <p className="text-gray-700">
                Paket kami mencakup seluruh aspek pernikahan, mulai dari
                perencanaan konsep, pemilihan vendor, dekorasi, hingga dokumentasi.
                Tim kami akan bekerja sama dengan Anda untuk menciptakan acara yang
                unik dan personal.
              </p>
            </article>
            <article>
              <h3 className="text-2xl font-semibold mb-2">
                Dekorasi &amp; Venue
              </h3>
              <p className="text-gray-700">
                Kami menyediakan berbagai pilihan dekorasi dan venue yang sesuai
                dengan tema pernikahan Anda. Setiap detail dekorasi dirancang untuk
                menciptakan suasana yang elegan dan memukau.
              </p>
            </article>
            <article>
              <h3 className="text-2xl font-semibold mb-2">
                Dokumentasi Profesional
              </h3>
              <p className="text-gray-700">
                Layanan dokumentasi kami mencakup fotografi dan videografi dengan
                peralatan modern dan tim profesional, sehingga setiap momen berharga
                dapat diabadikan dengan sempurna.
              </p>
            </article>
            <article>
              <h3 className="text-2xl font-semibold mb-2">
                Catering &amp; Hiburan
              </h3>
              <p className="text-gray-700">
                Kami menyajikan menu catering yang variatif dan lezat, disesuaikan
                dengan selera Anda, serta menyediakan hiburan yang akan membuat acara
                semakin meriah.
              </p>
            </article>
            <article>
              <h3 className="text-2xl font-semibold mb-2">
                Makeup &amp; Styling
              </h3>
              <p className="text-gray-700">
                Layanan makeup dan styling kami menjamin penampilan Anda akan
                memukau, dengan konsultasi yang mendetail sesuai tema dan keinginan Anda.
              </p>
            </article>
            <article>
              <h3 className="text-2xl font-semibold mb-2">
                Konsultasi Pernikahan
              </h3>
              <p className="text-gray-700">
                Kami menyediakan sesi konsultasi gratis untuk membantu Anda merencanakan
                setiap detail pernikahan. Mulai dari pemilihan tema hingga anggaran, tim
                ahli kami siap memberikan saran terbaik.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Tertarik dengan layanan kami?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Hubungi kami sekarang untuk mendapatkan penawaran terbaik dan konsultasi gratis.
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
            &copy; {new Date().getFullYear()} Wedding Organizer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
