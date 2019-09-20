<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Curriculum extends Model
{
     // which table this models represents
     protected $table = 'resumes';

     // Attributes that are mass assignable
     protected $fillable = ['user_id',
                            'objetivo',
                            'telefone',
                            'email',
                            'area_profissional',
                            'cidade',
                            'estado',
                            'auto_desc'];
}
