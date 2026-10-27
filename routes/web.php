<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use Inertia\Inertia;
use App\Models\Wisata;

Route::get('/', [HomeController::class, 'index']);
