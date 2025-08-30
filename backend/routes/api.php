<?php

use App\Http\Controllers\api\MovieController;
use Illuminate\Support\Facades\Route;

Route::apiResource('movies', MovieController::class);
