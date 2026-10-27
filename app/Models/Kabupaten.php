<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kabupaten extends Model
{
    protected $table = 'kabupaten';
    
    protected $primaryKey = 'id_kabupaten';

    public function wisata(){
        return $this->hasMany(
            Wisata::class,
            'kabupaten_id',
            'id_kabupaten'
        );
    }
}
