'use client';

import Link from 'next/link';

export default function ListMoviesPage() {
  return (
    <div>
      List Movies Page
      <Link href="/movies/new">Create New Movie</Link>
    </div>
  );
}
