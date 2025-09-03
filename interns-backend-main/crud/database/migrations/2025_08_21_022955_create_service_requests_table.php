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
        Schema::create('service_requests', function (Blueprint $table) {
            $table->id();
             $table->string('request_title');
            $table->text('description');
            $table->string('client_name');
            $table->string('priority'); // High, Medium, Low
            $table->string('status')->default('open'); // Open, In Progress, Resolved
            $table->date('submitted_date')->default(now());
            $table->integer('feedback_rating')->nullable(); // 1–5 stars
            $table->string('satisfaction_level')->nullable(); // e.g. Very Satisfied
            $table->text('feedback_comment')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('service_requests');
    }
};
