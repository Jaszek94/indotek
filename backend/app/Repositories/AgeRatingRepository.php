<?php

namespace App\Repositories;

use App\Interfaces\AgeRatingRepositoryInterface;
use App\Models\AgeRating;
use Illuminate\Database\Eloquent\Collection;

class AgeRatingRepository implements AgeRatingRepositoryInterface
{
    /**
     * Get all age ratings.
     *
     * @return Collection
     */
    public function all(): Collection
    {
        return AgeRating::all();
    }
}
