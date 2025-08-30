<?php

namespace Tests\Unit;

use App\Models\AgeRating;
use App\Models\Movie;
use App\Repositories\MovieRepository;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class MovieRepositoryTest extends TestCase
{
    use RefreshDatabase;

    protected MovieRepository $repository;

    protected function setUp(): void
    {
        parent::setUp();
        $this->repository = new MovieRepository();
    }

    public function test_can_create_movie()
    {
        $ageRating = AgeRating::factory()->create();

        $movie = $this->repository->create([
            'title' => 'Test Movie',
            'description' => 'Some description',
            'age_rating_id' => $ageRating->id,
        ]);

        $this->assertDatabaseHas('movies', ['title' => 'Test Movie']);
        $this->assertEquals('Test Movie', $movie->title);
    }

    public function test_can_find_movie()
    {
        $movie = Movie::factory()->create();

        $found = $this->repository->find($movie->id);

        $this->assertEquals($movie->id, $found->id);
    }

    public function test_can_update_movie()
    {
        /**
         * @var Movie $movie
         */
        $movie = Movie::factory()->create();

        $updated = $this->repository->update($movie, ['title' => 'Updated']);

        $this->assertEquals('Updated', $updated->title);
    }

    public function test_can_delete_movie()
    {
        /**
         * @var Movie $movie
         */
        $movie = Movie::factory()->create();

        $this->repository->delete($movie);

        $this->assertDatabaseMissing('movies', ['id' => $movie->id]);
    }

    public function test_can_get_all_movies()
    {
        Movie::factory()->count(5)->create();

        $movies = $this->repository->all();

        $this->assertCount(5, $movies);
    }

    public function test_can_filter_movies_by_age_rating()
    {
        $this->seed(\Database\Seeders\AgeRatingSeeder::class);

        $ageRating1 = AgeRating::where('code', 'PG')->first();
        $ageRating2 = AgeRating::where('code', 'R')->first();

        Movie::factory()->count(5)->create(['age_rating_id' => $ageRating1->id]);
        Movie::factory()->count(2)->create(['age_rating_id' => $ageRating2->id]);

        $movies = $this->repository->all(['age_rating_id' => $ageRating1->id]);

        $this->assertCount(5, $movies);
        foreach ($movies as $movie) {
            $this->assertEquals($ageRating1->id, $movie->age_rating_id);
        }
    }
}
