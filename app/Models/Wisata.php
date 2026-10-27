<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Kategori;

class Wisata extends Model
{
    protected $table = 'wisata';
    protected $primaryKey = 'id_wisata';

    public function kategori(){
        return $this->belongsTo(
            Kategori::class,
            'kategori_id',
            'id_kategori'
        );
    }

    public function kabupaten(){
        return $this->belongsTo(
            Kabupaten::class,
            'kabupaten_id',
            'id_kabupaten'
        );
    }
}
