<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */


use App\Models\Curriculum;
use Faker\Generator as Faker;

$factory->define(Curriculum::class, function (Faker $faker) {
    return [
        'user_id' => $faker->numberBetween(1, 16),
        'objetivo' => $faker->text(30),
        'telefone' => '1333534422',
        'email' => $faker->email,
        'area_profissional' => $faker->text(15),
        'auto_desc' => $faker->text,
        'estado' => 'SP',
        'cidade' => $faker->city,
    ];
});
