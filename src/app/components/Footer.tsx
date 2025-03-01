// src/app/components/Footer.tsx
'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p>
          &copy; {year ?? new Date().getFullYear()} Wedding Organizer. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
