'use client';

import { useState } from 'react';
import MovieForm from '@/app/components/movies/MovieForm';
import { useCreateMovie } from '@/app/hooks/useMovies';
import { MoviePayload } from '@/app/types/movie';

export default function CreateMoviePage() {
  const { mutate, isPending, isError } = useCreateMovie();
  const [apiErrors, setApiErrors] = useState<Record<string, string[]>>({});

  const handleSubmit = (formData: MoviePayload) => {
    setApiErrors({}); // reseteljük a hibákat minden próbánál
    mutate(formData, {
      onError: (err: any) => {
        if (err?.response?.data?.errors) {
          setApiErrors(err.response.data.errors);
        }
      },
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-700">Create Movie</h2>
      </div>

      <MovieForm
        onSubmit={handleSubmit}
        isPending={isPending}
        isError={isError}
        apiErrors={apiErrors}
      />
    </div>
  );
}
