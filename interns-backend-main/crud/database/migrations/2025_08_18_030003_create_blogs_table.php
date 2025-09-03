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
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
          $table->string('title');
    $table->string('author');
    $table->string('category');
    $table->enum('status', ['Draft', 'Published', 'Review'])->default('Draft');
    $table->string('image_url')->nullable();
    $table->longText('content');
    $table->unsignedBigInteger('views')->default(0);
    $table->unsignedBigInteger('likes')->default(0);
    $table->date('publish_date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blogs');
    }
};
