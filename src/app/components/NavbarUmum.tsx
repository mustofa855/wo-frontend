'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function NavLink({ href, children, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block px-4 py-3 border-b-2 transition duration-300
        ${
          isActive
            // Jika link aktif, gunakan warna yang sama untuk bg & border
            ? 'bg-gray-200 border-gray-800 text-gray-800 font-bold py-4'
            : // Jika tidak aktif, border transparan. Bisa juga menambahkan hover effect.
              'border-transparent py-4 text-gray-600 hover:text-gray-900 hover:bg-gray-200 hover:border-gray-200'
        }
      `}
    >
      {children}
    </Link>
  );
}

export default function NavbarUmum() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
    { href: '/login', label: 'Login' },
  ];

  return (
    <nav className="bg-white shadow border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">
            <Link href="/" className="text-gray-800">
              Wedding Organizer
            </Link>
          </div>
          {/* Tombol hamburger untuk layar kecil */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          {/* Menu navigasi untuk layar sedang ke atas */}
          <div className="hidden md:flex space-x-4">
            {navLinks.map(({ href, label }) => (
              <NavLink key={href} href={href}>
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Menu navigasi untuk layar kecil */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map(({ href, label }) => (
                <NavLink key={href} href={href} onClick={toggleMenu}>
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
