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

// rotas cujo cliente precisa estar autenticado para acessar
Route::middleware('auth:api')->group(function () {
    Route::put('/editar', 'UserController@edit');
    Route::post('/curriculo', 'CurriculumController@create');
    Route::put('/curriculo/editar', 'CurriculumController@edit');
    Route::get('/logout', 'Controller@logout');
 }
);

// rotas públicas

Route::get('/latest', 'HomeController@inicial');

Route::post('/login', 'Controller@login');

Route::post('/create', 'UserController@create');

Route::put('/editar', 'UserController@edit');

Route::get('/curriculos', 'CurriculumController@getCvs');
Route::get('/curriculo', 'CurriculumController@getCv');
Route::post('/curriculo', 'CurriculumController@create');
Route::put('/curriculo/editar', 'CurriculumController@edit');





