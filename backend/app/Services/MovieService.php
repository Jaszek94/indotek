<?php

namespace App\Services;

use App\Interfaces\MovieRepositoryInterface;
use App\Models\Movie;

class MovieService
{
    public function __construct(
        protected MovieRepositoryInterface $movieRepository
    )
    {
        // Initialization if needed
    }

    public function list($filters = [])
    {
        return $this->movieRepository->all($filters);
    }

    public function find(int $id): Movie
    {
        return $this->movieRepository->find($id);
    }

    public function create(array $data): Movie
    {
        return $this->movieRepository->create($data);
    }

    public function update(Movie $movie, array $data): Movie
    {
        return $this->movieRepository->update($movie, $data);
    }

    public function delete(Movie $movie): bool
    {
        return $this->movieRepository->delete($movie);
    }
}
