<?php

namespace Tests\Feature;

use App\Models\AgeRating;
use App\Models\Movie;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class MovieApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_list_movies()
    {
        Movie::factory(3)->create();

        $response = $this->getJson('/api/movies');

        $response->assertStatus(200)
                 ->assertJsonCount(3);
    }

    public function test_can_create_movie()
    {
        $ageRating = AgeRating::factory()->create();

        $response = $this->postJson('/api/movies', [
            'title' => 'New Movie',
            'description' => 'desc',
            'age_rating_id' => $ageRating->id,
        ]);

        $response->assertStatus(201)
                 ->assertJsonFragment(['title' => 'New Movie']);
    }

    public function test_can_show_movie()
    {
        $movie = Movie::factory()->create();

        $response = $this->getJson("/api/movies/{$movie->id}");

        $response->assertStatus(200)
                 ->assertJsonFragment(['id' => $movie->id]);
    }

    public function test_can_update_movie()
    {
        $movie = Movie::factory()->create();

        $response = $this->putJson("/api/movies/{$movie->id}", [
            'title' => 'Updated',
            'description' => $movie->description,
            'age_rating_id' => $movie->age_rating_id,
        ]);

        $response->assertStatus(200)
                 ->assertJsonFragment(['title' => 'Updated']);
    }

    public function test_can_delete_movie()
    {
        $movie = Movie::factory()->create();

        $response = $this->deleteJson("/api/movies/{$movie->id}");

        $response->assertStatus(204);

        $this->assertDatabaseMissing('movies', ['id' => $movie->id]);
    }
}
