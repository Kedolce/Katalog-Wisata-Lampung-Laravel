<?php

namespace App\Http\Controllers;

use App\Models\Wisata;
use Illuminate\Http\Request;
use App\Models\Kategori;
use App\Models\Kabupaten;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        $wisata = Wisata::with(['kategori', 'kabupaten'])
        ->orderByDesc('rating')
        ->get();

    return Inertia::render('Home', [
        'wisata' => $wisata,
        'kategoris' => Kategori::orderBy('nama_kategori')->get(),
        'kabupatens' => Kabupaten::orderBy('nama_kabupaten')->get(),
    ]);
    }
}
