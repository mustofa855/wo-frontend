// src/app/contact/page.tsx
import Footer from '../../components/Footer'; // Sesuaikan path jika berbeda

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center min-h-[40vh] md:h-64 relative flex items-center justify-center px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: 'url(/images/contact-hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
            Hubungi Kami
          </h1>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Informasi Kontak</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Alamat */}
            <div className="flex flex-col items-center text-center">
              <svg
                className="w-12 h-12 text-blue-600 mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 8c0-3.3137-2.6863-6-6-6S4 4.6863 4 8c0 2.3 1.2972 4.2894 3.1648 5.3556.3412.1889.7256.3552 1.1372.4896.4116.1344.8544.2344 1.332.2971.4776.0628.964.1 1.456 0a9.0629 9.0629 0 004.350-1.245 8.9903 8.9903 0 002.1157-1.5863C15.1688 12.313 16 10.2837 16 8z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.318 17.317C12.206 19.428 8.775 19.428 6.663 17.317c-2.112-2.112-2.112-5.543 0-7.655m7.655 0a5.486 5.486 0 011.5863 1.332c.1344.4116.2344.8544.2971 1.332.0628.4776.1.964 0 1.456a9.0629 9.0629 0 01-1.245 4.350m0 0c-.1889.3412-.3552.7256-.4896 1.1372a8.9903 8.9903 0 01-1.5863 2.1157"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Alamat</h3>
              <p className="text-gray-700">Jl. Contoh Alamat No.123, Jakarta, Indonesia</p>
            </div>
            {/* Email */}
            <div className="flex flex-col items-center text-center">
              <svg
                className="w-12 h-12 text-blue-600 mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26c.3.2.68.2.98 0L21 8m0 0a2.5 2.5 0 00-2.5-2.5h-13A2.5 2.5 0 003 8m18 0v8a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 16V8"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-700">info@weddingorganizer.com</p>
            </div>
            {/* Telepon */}
            <div className="flex flex-col items-center text-center">
              <svg
                className="w-12 h-12 text-blue-600 mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2 16.5V21a2 2 0 002 2h16a2 2 0 002-2v-4.5M16 3H8a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2z"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Telepon</h3>
              <p className="text-gray-700">+62 812 3456 7890</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Kirim Pesan Kepada Kami</h2>
          <div className="max-w-2xl mx-auto">
            <form className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nama Anda"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Anda"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subjek Pesan"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tulis pesan Anda di sini..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Lokasi Kami</h2>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.2286889672!2d106.68943127065807!3d-6.214620741209882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698a0c4a3edc2d%3A0x26f137ad0ab34a74!2sJakarta!5e0!3m2!1sen!2sid!4v1675647900000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ikuti Kami di Media Sosial</h2>
          <div className="flex justify-center flex-wrap space-x-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.505 0-1.796.716-1.796 1.765v2.316h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 1.184-.897-.959-2.173-1.555-3.59-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.229-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.397 0-.79-.023-1.175-.069 2.179 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.209 0-.423-.015-.637.961-.695 1.8-1.562 2.46-2.549z" />
              </svg>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.347 3.608 1.322.975.975 1.26 2.242 1.322 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.347 2.633-1.322 3.608-.975.975-2.242 1.26-3.608 1.322-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.347-3.608-1.322-.975-.975-1.26-2.242-1.322-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.347-2.633 1.322-3.608.975-.975 2.242-1.26 3.608-1.322 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.332.012 7.052.07 5.771.128 4.602.443 3.678 1.367 2.754 2.292 2.438 3.461 2.38 4.742.012 8.332 0 8.741 0 12c0 3.259.012 3.668.07 4.948.058 1.281.373 2.45 1.297 3.374.924.924 2.093 1.239 3.374 1.297C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.45-.373 3.374-1.297.924-.924 1.239-2.093 1.297-3.374.058-1.28.07-1.689.07-4.948s-.012-3.668-.07-4.948c-.058-1.281-.373-2.45-1.297-3.374C19.398.443 18.229.128 16.948.07 15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
