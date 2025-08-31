'use client';

import MovieForm from '@/app/components/movies/MovieForm';

export default function CreateMoviePage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-700">Create Movie</h2>
      </div>
      <MovieForm />
    </div>
  );
}
