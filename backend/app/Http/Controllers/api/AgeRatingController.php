<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AgeRatingResource;
use App\Services\AgeRatingService;

class AgeRatingController extends Controller
{
    public function __construct(
        protected AgeRatingService $ageRatingService
    )
    {
        //
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $ageRatings = $this->ageRatingService->list();

        return response()->json(AgeRatingResource::collection($ageRatings));
    }
}
