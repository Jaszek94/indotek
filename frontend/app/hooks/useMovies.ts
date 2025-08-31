import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../lib/api';
import { AgeRating, Movie, MoviePayload } from '../types/movie';
import { useRouter } from 'next/navigation';

export const useAgeRatings = () => {
  return useQuery<AgeRating[]>({
    queryKey: ['age-ratings'],
    queryFn: async () => {
      const { data } = await api.get('/age-ratings');
      return data;
    },
  });
};

// Fetch all movies
export const useMovies = () => {
  return useQuery<Movie[]>({
    queryKey: ['movies'],
    queryFn: async () => {
      const { data } = await api.get('/movies');
      return data;
    },
  });
};

export const useCreateMovie = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async (movie: MoviePayload) => {
      const { data } = await api.post('/movies', movie);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movies'] });
      router.push('/admin/movies');
    },
  });
};

export const useMovie = (id: number) => {
  return useQuery<Movie>({
    queryKey: ['movie', id],
    queryFn: async () => {
      const { data } = await api.get(`/movies/${id}`);
      return data;
    },
    enabled: !!id, // csak akkor fusson le, ha van id
  });
};

export const useUpdateMovie = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (movie: MoviePayload & { id: number }) => {
      const { data } = await api.put(`/movies/${movie.id}`, movie);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movies'] });
    },
  });
};

export const useDeleteMovie = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/movies/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movies'] });
    },
  });
};
