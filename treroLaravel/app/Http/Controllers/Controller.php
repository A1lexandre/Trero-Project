<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\AuthController;
use App\Models\User;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public $authController;

    public function construct(AuthController $authController) {

      $this->authController = $authController;

    }

    public function login(Request $request) {
      
      $dadosLogin = $request->validate([
        'email' => 'email|required',
        'password' => 'required'
      ]);

      $user = User::where('Email', $request->email)->first();

      if ($user) {
         
          if (Hash::check($request->password, $user->password)){

            $token = $user->createToken('Token de autenticação')->accessToken;

            return response()->json([
              'token' => $token,
            ], 200);
            
          } else {

            return response()->json([
              'message' => 'Senha inválida'
            ], 401);

          }

    } else {

      return response()->json([
        'message' => 'Usuário não existe'
      ], 422);

    } 
  }

}


/*public function login(Request $request) {
        
      if(!auth()->attempt($dadosLogin)) {
        return response(['message' => 'Credenciais inválidas']);
      }

      $token = auth()->user()->createToken('authToken')->accessToken;

      return response(['user' => auth()->user(), 'token' => $token]);
      
} */
