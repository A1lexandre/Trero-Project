<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->get('/teste', function () {
    return 'Olá, Bem vindo!';
});

Route::get('/latest', 'HomeController@inicial');

Route::post('/login', 'Controller@login');

Route::post('/cadastro', 'UserController@create');

Route::put('/editar', 'UserController@edit');

Route::get('/curriculos', 'CurriculumController@getCvs');
Route::get('/curriculo', 'CurriculumController@getCv');
Route::post('/curriculo', 'CurriculumController@create');
Route::put('/curriculo/editar', 'CurriculumController@edit');





