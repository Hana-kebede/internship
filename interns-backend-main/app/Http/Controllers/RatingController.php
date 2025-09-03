<?php

namespace App\Http\Controllers;

use App\Models\Rating;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RatingController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'project_id' => 'required|exists:projects,id',
            'rating' => 'required|integer|min:1|max:5',
            'review' => 'nullable|string'
        ]);
        $validated['user_id'] = Auth::id();
        $rating = Rating::create($validated);
        return response()->json($Rating, 201);
    }

    public function index(Request $request)
    {
        return Rating::where('user_id', Auth::id())->get();
    }
}

