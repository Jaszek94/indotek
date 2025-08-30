<?php

namespace Tests\Unit;

use App\Interfaces\AgeRatingRepositoryInterface;
use App\Models\AgeRating;
use App\Services\AgeRatingService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AgeRatingServiceTest extends TestCase
{
    use RefreshDatabase;

    public function test_list_movies_calls_repository()
    {
        /**
         * @var mixed
         */
        $repo = $this->mock(AgeRatingRepositoryInterface::class);
        $service = new AgeRatingService($repo);

        $ageRatings = AgeRating::factory()->count(3)->create();

        $repo->shouldReceive('all')
            ->once()
            ->andReturn($ageRatings);

        $ageRatingList = $service->list();

        $this->assertCount(3, $ageRatingList);
    }
}
