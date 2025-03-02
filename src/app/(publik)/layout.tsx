// src/app/layout.tsx
import '../globals.css';
import NavbarUmum from '../components/NavbarUmum';

export const metadata = {
  title: 'Wedding Organizer',
  description: 'Website Wedding Organizer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavbarUmum />
          {children}
      </body>
    </html>
  );
}
