'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen relative">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-100 text-gray-800 flex flex-col p-4 relative overflow-hidden">
        {/* Blur dekoráció a sidebar közepén */}
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary-light rounded-full opacity-20 filter blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        {/* Cím */}
        <div className="text-2xl font-bold mb-6 z-10 relative">Movie Admin</div>

        {/* Menüpontok */}
        <nav className="flex flex-col space-y-2 z-10 relative">
          <Link
            href="/admin/movies"
            className={`px-3 py-2 rounded transition ${
              pathname.startsWith('/admin/movies')
                ? 'bg-primary-light/30'
                : 'hover:bg-primary-light/20'
            }`}
          >
            Movies
          </Link>
        </nav>
      </aside>

      {/* Jobb oldali tartalom */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-14 flex items-center justify-between px-4 bg-white shadow-sm">
          {/* Keresőmező bal oldalon */}
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Keresés..."
              className="w-full px-4 py-2 rounded-lg bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none text-sm"
            />
          </div>

          {/* Monogram jobb oldalon */}
          <div className="ml-4 w-10 h-10 rounded-full bg-primary-light/50 flex items-center justify-center text-gray-700 fontsemibold">
            JA
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 p-4 bg-gray-50 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
