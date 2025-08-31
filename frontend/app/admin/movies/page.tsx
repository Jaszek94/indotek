'use client';

import MovieTable from '@/app/components/movies/MovieTable';
import { useMovies } from '@/app/hooks/useMovies';
import Link from 'next/link';

export default function ListMoviesPage() {
  const { data: movies, isLoading, isError } = useMovies();

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

      {isLoading ? (
        <div className="py-10 text-center text-gray-500">Loading...</div>
      ) : isError ? (
        <div className="py-10 text-center text-red-600">
          Error loading movies.
        </div>
      ) : (
        <MovieTable movies={movies || []} />
      )}
    </div>
  );
}
