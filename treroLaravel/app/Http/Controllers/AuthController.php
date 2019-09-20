<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    
    public function createToken($user, $nome) {
        return $user->createToken($nome)->accessToken;
    }

}
