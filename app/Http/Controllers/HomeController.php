<?php

namespace App\Http\Controllers;

use App\Models\Wisata;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        $wisata = Wisata::with(['kategori', 'kabupaten'])
        ->orderByDesc('rating')
        ->get();

        return Inertia::render('Home', [
            'wisata' => $wisata
        ]);
    }
}
