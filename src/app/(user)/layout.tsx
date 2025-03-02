// src/app/(user)/layout.tsx
import '../globals.css'; // Opsional: style khusus untuk user layout
import NavbarUser from '../components/NavbarUser'

export const metadata = {
  title: 'Dashboard Pelanggan - Wedding Organizer',
  description: 'Halaman untuk pengguna yang sudah login',
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <NavbarUser />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
