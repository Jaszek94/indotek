<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMovieRequest;
use App\Http\Requests\UpdateMovieRequest;
use App\Http\Resources\MovieResource;
use App\Services\MovieService;
use Illuminate\Http\JsonResponse;

class MovieController extends Controller
{
    protected $movieService;

    public function __construct(MovieService $movieService)
    {
        $this->movieService = $movieService;
    }

    public function index(): JsonResponse
    {
        $movies = $this->movieService->list(request()->all());

        return response()->json(MovieResource::collection($movies->load('ageRating')));
    }

    public function store(StoreMovieRequest $request): JsonResponse
    {
        $movie = $this->movieService->create($request->validated());

        return response()->json(new MovieResource($movie->load('ageRating')), 201);
    }

    public function show(string $id): JsonResponse
    {
        $movie = $this->movieService->find($id);

        return response()->json(new MovieResource($movie->load('ageRating')));
    }

    public function update(UpdateMovieRequest $request, string $id): JsonResponse
    {
        $movie = $this->movieService->find($id);
        $updated = $this->movieService->update($movie, $request->validated());

        return response()->json(new MovieResource($updated->load('ageRating')));
    }

    public function destroy(string $id): JsonResponse
    {
        $movie = $this->movieService->find($id);
        $this->movieService->delete($movie);

        return response()->json(null, 204);
    }
}
