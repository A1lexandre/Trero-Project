<?php

use Illuminate\Database\Seeder;
use App\Models\Curriculum;

class ResumesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\Curriculum::class, 15)->create();
    }
}
