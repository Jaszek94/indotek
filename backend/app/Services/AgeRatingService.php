<?php

namespace App\Services;

use App\Interfaces\AgeRatingRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;

class AgeRatingService
{
    public function __construct(
        protected AgeRatingRepositoryInterface $ageRatingRepository
    )
    {
        // Initialization if needed
    }

    /**
     * Get all age ratings.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function list(): Collection
    {
        return $this->ageRatingRepository->all();
    }
}

