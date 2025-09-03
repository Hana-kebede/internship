<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
             $table->string('client_name');
            $table->string('client_email');
            $table->string('project_title');
            $table->string('type'); // e.g. Web Development, Mobile App Development
            $table->string('timeline');
            $table->date('date_received')->default(now());
            $table->string('status')->default('pending');              
            $table->timestamps();

           
        });
    }


    public function down(): void
    {
    
         Schema::dropIfExists('projects');
    }
};
