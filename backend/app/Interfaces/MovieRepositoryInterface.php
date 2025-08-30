<?php

namespace App\Interfaces;

use App\Models\Movie;

interface MovieRepositoryInterface
{
    public function all(array $filters = []);
    public function find(int $id): Movie;
    public function create(array $data): Movie;
    public function update(Movie $movie, array $data): Movie;
    public function delete(Movie $movie): void;
}
