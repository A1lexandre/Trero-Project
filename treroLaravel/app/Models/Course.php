<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
     // Attributes thar are mass assignable
     protected $fillable = ['curriculum_id',
                            'nome',
                            'instituition',
                            'nivel_curso',
                            'duracao'];
}