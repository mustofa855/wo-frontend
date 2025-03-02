import Image from 'next/image';

export default function PortfolioPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-64 md:h-80"
        style={{ backgroundImage: 'url(/images/portfolio-hero.jpg)' }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Portfolio Kami
          </h1>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Proyek Kami</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-md overflow-hidden shadow hover:shadow-lg transition-shadow">
              <Image
                src="/images/portfolio1.jpg"
                alt="Proyek 1"
                width={400}
                height={300}
                className="object-cover w-full h-56"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Proyek 1</h3>
                <p className="text-gray-700">
                  Deskripsi singkat tentang proyek 1 yang menonjol.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-md overflow-hidden shadow hover:shadow-lg transition-shadow">
              <Image
                src="/images/portfolio1.jpg"
                alt="Proyek 2"
                width={400}
                height={300}
                className="object-cover w-full h-56"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Proyek 2</h3>
                <p className="text-gray-700">
                  Deskripsi singkat tentang proyek 2 dengan detail yang menarik.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-md overflow-hidden shadow hover:shadow-lg transition-shadow">
              <Image
                src="/images/portfolio1.jpg"
                alt="Proyek 3"
                width={400}
                height={300}
                className="object-cover w-full h-56"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Proyek 3</h3>
                <p className="text-gray-700">
                  Deskripsi singkat tentang proyek 3 dengan konsep unik.
                </p>
              </div>
            </div>
            {/* Tambahkan item portfolio lainnya jika diperlukan */}
          </div>
        </div>
      </section>

      {/* Detailed Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Detail Proyek</h2>
          <div className="space-y-8">
            <article>
              <h3 className="text-2xl font-semibold mb-2">Proyek 1</h3>
              <p className="text-gray-700">
                Proyek 1 mencakup perencanaan konsep pernikahan yang
                inovatif, dekorasi yang elegan, dan dokumentasi profesional
                untuk mengabadikan setiap momen. Detail dan sentuhan personal
                menjadikan acara ini sangat berkesan bagi para klien.
              </p>
            </article>
            <article>
              <h3 className="text-2xl font-semibold mb-2">Proyek 2</h3>
              <p className="text-gray-700">
                Pada Proyek 2, tim kami bekerja sama dengan vendor-vendor
                terbaik untuk menciptakan suasana yang romantis dan mewah.
                Mulai dari pemilihan venue, catering, hingga hiburan, setiap
                detail diatur dengan sempurna.
              </p>
            </article>
            <article>
              <h3 className="text-2xl font-semibold mb-2">Proyek 3</h3>
              <p className="text-gray-700">
                Proyek 3 merupakan contoh nyata kreativitas dan inovasi kami.
                Dengan konsep yang unik dan desain yang modern, proyek ini
                memberikan inspirasi bagi pasangan yang menginginkan pernikahan
                berbeda dan berkesan.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ingin Melihat Lebih Banyak Proyek?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Hubungi kami untuk melihat portofolio lengkap dan dapatkan
            konsultasi gratis.
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
