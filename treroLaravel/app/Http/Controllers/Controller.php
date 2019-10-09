<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public $authController;

    public function construct(AuthController $authController) {

      $this->authController = $authController;

    }

    public function login(Request $request) {
      
      /*$dadosLogin = $request->validate([
        'email' => 'email|required',
        'password' => 'required'
      ]); */

      $dadosLogin = Validator::make($request->all(), [
        'email' => 'required|email',
        'password' => 'required'
      ]);

      if ($dadosLogin->fails()) {
        return response(['msg' => 'Dados inválidos'], 400);
      }

      $user = User::where('Email', $request->email)->first();

      if ($user) {
         
          if (Hash::check($request->password, $user->password)){

            $token = $user->createToken('Token de autenticação')->accessToken;

            return response([
              'user' => $user,
              'token' => $token,
            ], 200);
            
          } else {

            return response([
              'msg' => 'Senha inválida'
            ], 401);

          }

    } else {

      return response([
        'msg' => 'Usuário não existe'
      ], 422);

    } 
  }



public function logout(Request $request) {

  $token = $request->user()->token();
  $token->revoke();

  return response(['msg' => 'Você não está mais logado no sistema'], 200);

}

}

