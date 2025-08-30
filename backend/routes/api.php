<?php

use App\Http\Controllers\api\AgeRatingController;
use App\Http\Controllers\api\MovieController;
use Illuminate\Support\Facades\Route;

Route::apiResource('movies', MovieController::class);
Route::get('age-ratings', [AgeRatingController::class, 'index']);
