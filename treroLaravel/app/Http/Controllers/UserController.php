<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use App\Http\Controllers\AuthController;
use App\Models\User;

class UserController extends Controller
{

    public $authController;

    public function __construct(AuthController $authController) {

      $this->authController = $authController; 

    }

    public function create(Request $request) {

      /*$dadosValidados = $request->validate([
          'name' => 'required',
          'email' => 'email|required',
          'password' => 'required'
      ]);*/
     
      $dadosValidados = Validator::make($request->all(), [
          'name' => 'required|max:255',
          'data_nasc' => 'required|date',
          'email' => 'required|email',
          'sexo' => ['required', Rule::in(['M', 'F'])],
          'password' => 'required|min:6',
          'passwordConfirmation' => 'required|same:password'
      ]);

      //$dadosValidados['password'] = Hash::make($request->password);

      if ($dadosValidados->fails()) {
        dd($dadosValidados->errors());
        return response(['msg' => 'Dados inválidos'], 400);
      }

       $request['password'] = Hash::make($request->password);

       $user = User::create($request->all());

       $token = $this->authController->createToken($user, 'authToken');
 
       return response(['user' => $user, 'token' => $token], 201);

    }

    public function edit(Request $request) {
       //
    }

    
}
