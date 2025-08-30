<?php

namespace App\Providers;

use App\Interfaces\AgeRatingRepositoryInterface;
use App\Interfaces\MovieRepositoryInterface;
use App\Repositories\AgeRatingRepository;
use App\Repositories\MovieRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(MovieRepositoryInterface::class, MovieRepository::class);
        $this->app->bind(AgeRatingRepositoryInterface::class, AgeRatingRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
