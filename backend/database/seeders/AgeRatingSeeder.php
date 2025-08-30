<?php

namespace Database\Seeders;

use App\Models\AgeRating;
use Illuminate\Database\Seeder;

class AgeRatingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $ratings = [
            ['code' => 'G', 'name' => 'General Audience'],
            ['code' => 'PG', 'name' => 'Parental Guidance'],
            ['code' => 'PG-13', 'name' => 'Parents Strongly Cautioned'],
            ['code' => 'R', 'name' => 'Restricted'],
        ];

        foreach ($ratings as $rating) {
            AgeRating::firstOrCreate(['code' => $rating['code']], $rating);
        }
    }
}
