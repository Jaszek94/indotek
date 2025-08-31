'use client';

import { use } from 'react';

interface Props {
  params: Promise<{ id: string }>;
}

export default function ViewMoviePage({ params }: Props) {
  const { id } = use(params); // most már simán elérhető az id

  return <div>View Movie Page for ID: {id}</div>;
}
