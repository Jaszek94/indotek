'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-graybg-light to-graybg-dark">
      {/* Header */}
      <header className="h-14 bg-white shadow flex items-center px-4">
        <h1 className="text-xl font-bold text-brand">Movie Admin</h1>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-56 bg-white border-r border-gray-200 p-4">
          <nav className="space-y-2">
            <Link
              href="/admin/movies"
              className="block px-3 py-2 rounded-md hover:bg-brand hover:text-white transition"
            >
              Movies
            </Link>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
