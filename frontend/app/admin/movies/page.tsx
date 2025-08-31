'use client';

import MovieTable from '@/app/components/movies/MovieTable';
import Link from 'next/link';

export default function ListMoviesPage() {
  // Példa adatok
  const movies = [
    { id: 1, title: 'Inception', year: 2010, age_rating: 'PG-13' },
    { id: 2, title: 'The Matrix', year: 1999, age_rating: 'PG-13' },
    { id: 3, title: 'Interstellar', year: 2014, age_rating: 'PG-13' },
    { id: 4, title: 'Dunkirk', year: 2017, age_rating: 'PG-13' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-700">List Movies</h2>
        <Link
          href="/admin/movies/create"
          className="px-4 py-2 bg-primary/30 text-gray-800 rounded-lg hover:bg-primary/50 transition"
        >
          Add Movie
        </Link>
      </div>

      <MovieTable movies={movies} />
    </div>
  );
}
