<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Wisata;

Route::get('/', function(){

    $wisata = Wisata::all();

    return Inertia::render('Home', [
        'wisata' => $wisata,
    ]);

});
