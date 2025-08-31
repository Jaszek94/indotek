export type AgeRating = {
  id: number;
  code: string;
  name: string;
};

export type Movie = {
  id: number;
  title: string;
  description: string;
  age_rating: AgeRating;
};

export type MoviePayload = {
  title: string;
  description: string;
  age_rating_id: number;
};
