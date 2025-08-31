'use client';

import { MoviePayload } from '@/app/types/movie';
import { useState, useEffect } from 'react';
import Form from '../ui/Form';
import FormInput from '../ui/FormInput';
import SelectInput from '../ui/SelectInput';
import { useAgeRatings } from '@/app/hooks/useMovies';

type Props = {
  initialData?: MoviePayload;
  onSubmit: (data: MoviePayload) => void;
  isPending?: boolean;
  isError?: boolean;
};

export default function MovieForm({
  initialData,
  onSubmit,
  isPending,
  isError,
}: Props) {
  const { data: ageRatings, isLoading: isAgeLoading } = useAgeRatings();
  const [form, setForm] = useState<MoviePayload>({
    title: '',
    description: '',
    age_rating_id: 0,
  });

  // Ha van kezdeti adat, állítsuk be
  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else if (ageRatings && ageRatings.length > 0) {
      setForm((prev) => ({
        ...prev,
        age_rating_id: ageRatings[0].id,
      }));
    }
  }, [initialData, ageRatings]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'age_rating_id' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  if (isAgeLoading || !ageRatings) return null;

  return (
    <Form onSubmit={handleSubmit}>
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
      <SelectInput
        label="Age Rating"
        name="age_rating_id"
        value={form.age_rating_id}
        onChange={handleChange}
        options={ageRatings.map((ar) => ({ value: ar.id, label: ar.name }))}
      />

      <button
        type="submit"
        disabled={isPending}
        className="px-4 py-2 bg-primary-light text-white rounded-lg hover:bg-primary-dark transition"
      >
        {isPending ? 'Saving...' : 'Save Movie'}
      </button>

      {isError && <div className="text-red-600">Error saving movie.</div>}
    </Form>
  );
}
