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
        Schema::create('project_progress_updates', function (Blueprint $table) {
        $table->id();
        $table->string('project');
        $table->unsignedBigInteger('client_id');      
        $table->integer('progress');
        $table->string('current_status');
        $table->text('completed_milestones')->nullable();
        $table->date('next_deadline')->nullable();
        $table->date('last_update')->nullable();
        $table->text('notes')->nullable();
        $table->timestamps();

         $table->foreign('client_id')->references('id')->on('users')->onDelete('cascade');
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project_progress_updates');
    }
};
