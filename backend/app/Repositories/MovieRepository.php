<?php

namespace App\Repositories;

use App\Interfaces\MovieRepositoryInterface;
use App\Models\Movie;

class MovieRepository implements MovieRepositoryInterface
{
    public function all(array $filters = [])
    {
        $query = Movie::with('ageRating');

        if (!empty($filters['age_rating_id'])) {
            $query->where('age_rating_id', $filters['age_rating_id']);
        }

        return $query->get();
    }

    public function find(int $id): Movie
    {
        return Movie::with('ageRating')->findOrFail($id);
    }

    public function create(array $data): Movie
    {
        return Movie::create($data)->load('ageRating');
    }

    public function update(Movie $movie, array $data): Movie
    {
        $movie->update($data);
        return $movie->load('ageRating');
    }

    public function delete(Movie $movie): void
    {
        $movie->delete();
    }
}
