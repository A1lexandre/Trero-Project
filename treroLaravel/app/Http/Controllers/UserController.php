<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\AuthController;
use App\Models\User;

class UserController extends Controller
{

    public $authController;

    public function __construct(AuthController $authController) {

      $this->authController = $authController; 

    }

    public function create(Request $request) {

      $dadosValidados = $request->validate([
          'name' => 'required',
          'email' => 'email|required',
          'password' => 'required'
      ]);

      $dadosValidados['password'] = Hash::make($request->password);
        
       $user = User::create($dadosValidados);

       $token = $this->authController->createToken($user, 'authToken');
 
       return response(['user' => $user, 'token' => $token]);

    }

    public function edit(Request $request) {
       //
    }

    
}
