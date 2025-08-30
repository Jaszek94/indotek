<?php

namespace Tests\Unit;

use App\Http\Requests\UpdateMovieRequest;
use App\Models\AgeRating;
use Illuminate\Support\Facades\Validator;
use Tests\TestCase;

class UpdateMovieRequestTest extends TestCase
{
    private function validate(array $data)
    {
        $request = new UpdateMovieRequest();
        $rules = $request->rules();

        return Validator::make($data, $rules);
    }

    public function test_title_is_required()
    {
        $ageRating = AgeRating::factory()->create();

        $validator = $this->validate([
            'description' => 'desc',
            'age_rating_id' => $ageRating->id
        ]);

        $this->assertTrue($validator->fails());
        $this->assertArrayHasKey('title', $validator->errors()->toArray());
    }

    public function test_title_must_be_string()
    {
        $ageRating = AgeRating::factory()->create();

        $validator = $this->validate([
            'title' => 123,
            'description' => 'desc',
            'age_rating_id' => $ageRating->id
        ]);

        $this->assertTrue($validator->fails());
        $this->assertArrayHasKey('title', $validator->errors()->toArray());
    }

    public function test_title_max_length()
    {
        $ageRating = AgeRating::factory()->create();

        $validator = $this->validate([
            'title' => str_repeat('a', 256),
            'description' => 'desc',
            'age_rating_id' => $ageRating->id
        ]);

        $this->assertTrue($validator->fails());
        $this->assertArrayHasKey('title', $validator->errors()->toArray());
    }

    public function test_description_is_required()
    {
        $ageRating = AgeRating::factory()->create();

        $validator = $this->validate([
            'title' => 'Test',
            'age_rating_id' => $ageRating->id
        ]);

        $this->assertTrue($validator->fails());
        $this->assertArrayHasKey('description', $validator->errors()->toArray());
    }

    public function test_description_must_be_string()
    {
        $ageRating = AgeRating::factory()->create();

        $validator = $this->validate([
            'title' => 'Test',
            'description' => 123,
            'age_rating_id' => $ageRating->id
        ]);

        $this->assertTrue($validator->fails());
        $this->assertArrayHasKey('description', $validator->errors()->toArray());
    }

    public function test_age_rating_id_is_required()
    {
        $validator = $this->validate([
            'title' => 'Test',
            'description' => 'desc',
        ]);

        $this->assertTrue($validator->fails());
        $this->assertArrayHasKey('age_rating_id', $validator->errors()->toArray());
    }

    public function test_age_rating_must_exist()
    {
        $validator = $this->validate([
            'title' => 'Test',
            'description' => 'desc',
            'age_rating_id' => 999,
        ]);

        $this->assertTrue($validator->fails());
        $this->assertArrayHasKey('age_rating_id', $validator->errors()->toArray());
    }

    public function test_valid_data_passes()
    {
        $ageRating = AgeRating::factory()->create();

        $validator = $this->validate([
            'title' => 'Valid',
            'description' => 'desc',
            'age_rating_id' => $ageRating->id,
        ]);

        $this->assertFalse($validator->fails());
    }
}
