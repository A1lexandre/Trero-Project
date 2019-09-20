<?php

use Illuminate\Database\Seeder;
use App\Models\Curriculum;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

       /* User::create([
            'name' => 'Alexandre Araújo', 
            'email' => 'a1lexandre@hotmail.com',
            'password' => '123',
            'nickname' => 'A1lex',
            'sexo' => 'M',
            'data_nasc' => '1996-02-23'
        ]); */

        // $this->call(UsersTableSeeder::class);
        
        $this->call(ResumesTableSeeder::class);
    }
}
