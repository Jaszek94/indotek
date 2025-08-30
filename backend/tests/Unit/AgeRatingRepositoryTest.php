<?php

namespace Tests\Unit;

use App\Models\AgeRating;
use App\Repositories\AgeRatingRepository;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AgeRatingRepositoryTest extends TestCase
{
    use RefreshDatabase;

    protected AgeRatingRepository $repository;

    protected function setUp(): void
    {
        parent::setUp();
        $this->repository = new AgeRatingRepository();
    }

    public function test_can_get_all_age_ratings()
    {
        AgeRating::factory()->count(10)->create();

        $ageRatings = $this->repository->all();

        $this->assertCount(10, $ageRatings);

        $this->assertArrayHasKey('id', $ageRatings->first()->toArray());
        $this->assertArrayHasKey('code', $ageRatings->first()->toArray());
        $this->assertArrayHasKey('name', $ageRatings->first()->toArray());
    }
}
