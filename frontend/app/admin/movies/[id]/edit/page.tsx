'use client';

import { use } from 'react'; // új React.use hook
import { useRouter } from 'next/navigation';
import { useMovie, useUpdateMovie } from '@/app/hooks/useMovies';
import MovieForm from '@/app/components/movies/MovieForm';
import { MoviePayload } from '@/app/types/movie';

type Props = {
  params: Promise<{ id: string }>; // params most Promise
};

export default function EditMoviePage({ params }: Props) {
  const { id } = use(params); // itt "unwrap-oljuk" a parametert
  const router = useRouter();

  const { data: movie, isLoading, isError } = useMovie(Number(id));
  const { mutate, isPending, isError: isMutateError } = useUpdateMovie();

  if (isLoading) return <div>Loading...</div>;
  if (isError || !movie) return <div>Error loading movie.</div>;

  const handleSubmit = (data: MoviePayload) => {
    mutate(
      { id: movie.id, ...data },
      {
        onSuccess: () => {
          router.push('/admin/movies');
        },
      }
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Edit Movie</h2>
      <MovieForm
        initialData={{
          title: movie.title,
          description: movie.description,
          age_rating_id: movie.age_rating.id, // átírjuk a számra
        }}
        onSubmit={handleSubmit}
        isPending={isPending}
        isError={isMutateError}
      />
    </div>
  );
}
