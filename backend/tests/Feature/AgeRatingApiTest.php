<?php

namespace Tests\Feature;

use App\Models\AgeRating;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AgeRatingApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_list_age_ratings()
    {
        AgeRating::factory(4)->create();

        $response = $this->getJson('/api/age-ratings');

        $response->assertStatus(200)
                 ->assertJsonCount(4);
    }
}
