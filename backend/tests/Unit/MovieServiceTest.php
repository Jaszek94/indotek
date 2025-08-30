<?php

namespace Tests\Unit;

use App\Interfaces\MovieRepositoryInterface;
use App\Models\AgeRating;
use App\Models\Movie;
use App\Services\MovieService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class MovieServiceTest extends TestCase
{
    use RefreshDatabase;

    public function test_list_movies_calls_repository()
    {
        /**
         * @var mixed
         */
        $repo = $this->mock(MovieRepositoryInterface::class);
        $service = new MovieService($repo);

        $movies = Movie::factory()->count(3)->create();

        $repo->shouldReceive('all')
            ->once()
            ->with([])
            ->andReturn($movies);

        $movieList = $service->list();

        $this->assertCount(3, $movieList);
    }

    public function test_find_movie_calls_repository()
    {
        /**
         * @var mixed
         */
        $repo = $this->mock(MovieRepositoryInterface::class);
        $service = new MovieService($repo);

        $movie = Movie::factory()->create();

        $repo->shouldReceive('find')
            ->once()
            ->with($movie->id)
            ->andReturn($movie);

        $foundMovie = $service->find($movie->id);

        $this->assertEquals($movie->id, $foundMovie->id);
    }

    public function test_create_movie_calls_repository()
    {
        /**
         * @var mixed
         */
        $repo = $this->mock(MovieRepositoryInterface::class);
        $service = new MovieService($repo);

        $ageRating = AgeRating::factory()->create();

        $data = [
            'title' => 'Service Movie',
            'description' => 'desc',
            'age_rating_id' => $ageRating->id,
        ];

        $repo->shouldReceive('create')
            ->once()
            ->with($data)
            ->andReturn(new Movie($data));

        $movie = $service->create($data);

        $this->assertEquals('Service Movie', $movie->title);
    }

    public function test_update_movie_calls_repository()
    {
        /**
         * @var mixed
         */
        $repo = $this->mock(MovieRepositoryInterface::class);
        $service = new MovieService($repo);

        /* @var Movie $movie */
        $movie = Movie::factory()->create();
        $ageRating = AgeRating::factory()->create();

        $data = [
            'title' => 'Updated Title',
            'description' => 'Updated desc',
            'age_rating_id' => $ageRating->id,
        ];

        $repo->shouldReceive('update')
            ->once()
            ->with($movie, $data)
            ->andReturn(new Movie(array_merge($movie->toArray(), $data)));

        $updatedMovie = $service->update($movie, $data);

        $this->assertEquals('Updated Title', $updatedMovie->title);
    }

    public function test_delete_movie_calls_repository()
    {
        /**
         * @var mixed
         */
        $repo = $this->mock(MovieRepositoryInterface::class);
        $service = new MovieService($repo);

        /* @var Movie $movie */
        $movie = Movie::factory()->create();

        $repo->shouldReceive('delete')
            ->once()
            ->with($movie)
            ->andReturn(true);

        $result = $service->delete($movie);

        $this->assertTrue($result);
    }
}
