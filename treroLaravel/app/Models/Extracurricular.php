<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Extracurricular extends Model
{
    // Attributes thar are mass assignable
    protected $fillable = ['curriculum_id',
                           'tipo',
                           'local',
                           'desc'];
}
