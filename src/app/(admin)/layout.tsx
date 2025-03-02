'use client';

import Link from 'next/link';
import '../globals.css';
import { usePathname } from 'next/navigation';
import { ReactNode, useState } from 'react';

// Sidebar link interface
interface SidebarLink {
  href: string;
  label: string;
}

// Komponen layout admin
export default function AdminLayout({ children }: { children: ReactNode }) {
  // Jika ingin toggle sidebar di layar kecil
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Daftar link sidebar
  const links: SidebarLink[] = [
    { href: '/dashboard-admin', label: 'Dashboard' },
    { href: '/services-admin', label: 'Manajemen Layanan' },
    { href: '/portfolio-admin', label: 'Manajemen Portfolio' },
    { href: '/bookings-admin', label: 'Manajemen Booking' },
    { href: '/payments-admin', label: 'Manajemen Pembayaran' },
    { href: '/users', label: 'Manajemen Pengguna' },
  ];

  return (
    <html lang="en">
      <body className="bg-gray-100">
        <div className="flex min-h-screen">
          {/* SIDEBAR */}
          <aside
            className={`bg-white w-64 shadow-md flex-shrink-0 
              ${sidebarOpen ? 'block' : 'hidden'} 
              md:block
            `}
          >
            <div className="p-4 border-b">
              <h1 className="text-xl font-bold">Admin Panel</h1>
            </div>
            <nav className="p-4 space-y-2">
              {links.map((link) => (
                <SidebarNavLink key={link.href} href={link.href}>
                  {link.label}
                </SidebarNavLink>
              ))}
            </nav>
          </aside>

          {/* TOGGLE BUTTON MOBILE */}
          <div className="md:hidden absolute top-4 left-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 bg-white shadow rounded focus:outline-none"
            >
              {sidebarOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* MAIN CONTENT */}
          <main className="flex-1 p-4 md:ml-64">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

// Komponen link sidebar
function SidebarNavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`block px-3 py-2 rounded 
        ${
          isActive
            ? 'bg-blue-100 text-blue-600 font-semibold'
            : 'text-gray-600 hover:bg-gray-100'
        }
      `}
    >
      {children}
    </Link>
  );
}
