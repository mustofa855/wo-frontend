'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavbarUmum() {
  const pathname = usePathname();

  // Jika link aktif, gunakan background gelap dan border bawah
  const linkClass = (href: string) =>
    pathname === href
      ? "bg-gray-300 border-b-5 border-gray-800 text-gray-800 font-bold px-3 py-4.5 pb-4 "
      : "text-gray-600 hover:text-gray-900 px-3 py-1 hover:bg-gray-300 px-3 py-4.5 transition duration-400";

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold">
            <Link href="/" className="text-gray-800">
              Wedding Organizer
            </Link>
          </div>
          <div className="space-x-4">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
            <Link href="/servicess" className={linkClass("/servicess")}>
              Services
            </Link>
            <Link href="/portfolio" className={linkClass("/portfolio")}>
              Portfolio
            </Link>
            <Link href="/contact" className={linkClass("/contact")}>
              Contact
            </Link>
            <Link href="/login" className={linkClass("/login")}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
