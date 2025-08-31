'use client';

import Link from 'next/link';
import { Table } from '../ui/Table';
import { Movie } from '@/app/types/movie';

type Props = {
  movies: Movie[];
  onDelete?: (id: number) => void;
  isDeleting?: boolean;
};

export default function MovieTable({ movies, onDelete, isDeleting }: Props) {
  const columns = [
    { header: 'ID', accessor: 'id' as const },
    { header: 'Title', accessor: 'title' as const },
    { header: 'Description', accessor: 'description' as const },
    {
      header: 'Age Rating',
      accessor: (movie: Movie) => movie.age_rating.code,
    },
    {
      header: 'Actions',
      accessor: (movie: Movie) => (
        <div className="space-x-2">
          <Link
            href={`/admin/movies/${movie.id}/edit`}
            className="text-gray-500 hover:underline"
          >
            Edit
          </Link>
          {onDelete && (
            <button
              onClick={() => onDelete(movie.id)}
              disabled={isDeleting}
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          )}
        </div>
      ),
    },
  ];

  return <Table columns={columns} data={movies} rowKey="id" />;
}
