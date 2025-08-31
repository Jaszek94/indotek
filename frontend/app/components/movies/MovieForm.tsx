'use client';

import { MoviePayload } from '@/app/types/movie';
import { useState } from 'react';
import Form from '../ui/Form';
import FormInput from '../ui/FormInput';
import { useCreateMovie } from '@/app/hooks/useMovies';

export default function MovieForm() {
  const [form, setForm] = useState<MoviePayload>({
    title: '',
    description: '',
    age_rating_id: 1, // dummy default
  });

  const { mutate, isPending, isError } = useCreateMovie();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'age_rating_id' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form);
  };

  return (
    <Form onSubmit={handleSubmit} className="">
      <FormInput
        label="Title"
        name="title"
        value={form.title}
        onChange={handleChange}
      />
      <FormInput
        label="Description"
        name="description"
        value={form.description}
        onChange={handleChange}
      />
      <FormInput
        label="Age Rating ID"
        name="age_rating_id"
        value={form.age_rating_id}
        onChange={handleChange}
        type="number"
      />

      <button
        type="submit"
        disabled={isPending}
        className="px-4 py-2 bg-primary-light text-white rounded-lg hover:bg-primary-dark transition"
      >
        {isPending ? 'Creating...' : 'Create Movie'}
      </button>

      {isError && <div className="text-red-600">Error creating movie.</div>}
    </Form>
  );
}
