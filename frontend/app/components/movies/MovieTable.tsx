'use client';

import Link from 'next/link';
import { Table } from '../ui/Table';

type Movie = {
  id: number;
  title: string;
  year: number;
  age_rating: string;
};

type Props = {
  movies: Movie[];
};

export default function MovieTable({ movies }: Props) {
  const columns = [
    { header: 'ID', accessor: 'id' as const },
    { header: 'Title', accessor: 'title' as const },
    { header: 'Year', accessor: 'year' as const },
    { header: 'Age Rating', accessor: 'age_rating' as const },
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
          <button className="text-red-600 hover:underline">Delete</button>
        </div>
      ),
    },
  ];

  return <Table columns={columns} data={movies} rowKey="id" />;
}
