<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    // Attributes thar are mass assignable
    protected $fillable = ['curriculum_id',
                'cargo',
                'nome_empresa',
                'entrada',
                'saida',
                'desc_cargo'];
}
