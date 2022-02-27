<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paises extends Model
{
    use HasFactory;

    protected $primaryKey = 'cod_numerico';
    public $incrementing = false;

    protected $fillable = [
        'cod_numerico', 'codigoISO2', 'cod_numerico', 'nombre',
    ];
}
