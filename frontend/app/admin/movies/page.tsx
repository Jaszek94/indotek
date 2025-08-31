'use client';

import MovieTable from '@/app/components/movies/MovieTable';
import { useDeleteMovie, useMovies } from '@/app/hooks/useMovies';
import Link from 'next/link';

export default function ListMoviesPage() {
  const { data: movies, isLoading, isError } = useMovies();
  const { mutate: deleteMovie, isPending: isDeleting } = useDeleteMovie();

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this movie?'
    );
    if (confirmDelete) {
      deleteMovie(id);
    }
  };

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
        <MovieTable
          movies={movies || []}
          onDelete={handleDelete}
          isDeleting={isDeleting}
        />
      )}
    </div>
  );
}
