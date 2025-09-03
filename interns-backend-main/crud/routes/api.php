<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\OverviewController;
use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\MessageController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\ServiceRequestController;
use App\Http\Controllers\Api\ProjectProgressController;
use App\Http\Controllers\Api\TeamMemberController;
use App\Http\Controllers\Api\ProfileController;



// Overview
Route::get('/overview', [OverviewController::class, 'index']);

// User Management
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('users', UserController::class);
});

// Authentication
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
// Team Members
Route::apiResource('team-members', TeamMemberController::class);
Route::post('team-members/bulk-update', [TeamMemberController::class, 'bulkUpdate']);
Route::post('team-members/bulk-delete', [TeamMemberController::class, 'bulkDelete']);
Route::get('team-members/stats', [TeamMemberController::class, 'stats']);

// Project Progress Updates
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('progress-updates', ProjectProgressController::class);
});
// Project Requests
Route::prefix('admin/projects')->group(function () {
    Route::get('/', [ProjectController::class, 'index']);
    Route::get('/{id}', [ProjectController::class, 'show']);
    Route::delete('/{id}', [ProjectController::class, 'destroy']);
});

// Service Requests
Route::prefix('admin/services')->group(function () {
    Route::get('/', [ServiceRequestController::class, 'index']);
    Route::get('/{id}', [ServiceRequestController::class, 'show']);
    Route::delete('/{id}', [ServiceRequestController::class, 'destroy']);
});

// Messages
Route::middleware('auth:sanctum')->prefix('admin/messages')->group(function () {
    Route::get('/', [MessageController::class, 'index']);          // list messages
    Route::post('/', [MessageController::class, 'store']);         // send new message
    Route::patch('/{id}/read', [MessageController::class, 'markAsRead']); // mark as read
    Route::post('/{id}/reply', [MessageController::class, 'reply']);      // reply
    Route::delete('/{id}', [MessageController::class, 'destroy']); // delete
});
// Blogs
Route::apiResource('blogs', BlogController::class);
Route::post('blogs/{id}/increment-views', [BlogController::class, 'incrementViews']);
Route::post('blogs/{id}/increment-likes', [BlogController::class, 'incrementLikes'])->middleware('auth:sanctum');

// User Profile
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/profile', [ProfileController::class, 'show']);       // Get profile
    Route::post('/profile', [ProfileController::class, 'update']);    // Update profile
});