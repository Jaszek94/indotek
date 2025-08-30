<?php

namespace App\Interfaces;

use Illuminate\Database\Eloquent\Collection;

interface AgeRatingRepositoryInterface
{
    public function all(): Collection;
}
