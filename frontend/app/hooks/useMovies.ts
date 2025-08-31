import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../lib/api';
import { Movie } from '../types/movie';

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
