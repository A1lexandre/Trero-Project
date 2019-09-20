<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('curriculum_id');
            $table->string('cargo', 20);
            $table->string('nome_empresa', 20);
            $table->date('entrada', 'F Y');
            $table->date('saida', 'F Y');
            $table->string('desc_cargo', 40);

            $table->foreign('curriculum_id')->references('id')->on('resumes');       

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jobs');
    }
}
