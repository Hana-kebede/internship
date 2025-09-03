<?php

namespace App\Http\Controllers;

use App\Models\UserProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserProjectController extends Controller
{
    // Store a new user project
    public function store(Request $request)
    {
        $validated = $request->validate([
            'project_id' => 'required|exists:projects,id',
        ]);
        $validated['user_id'] = Auth::id();
        $userProject = UserProject::create($validated);
        return response()->json($userProject, 201);
    }
    // List all projects assigned to the user
    public function index()
    {
        return UserProject::where('user_id', Auth::id())->latest()->paginate(15);
    }

    // Show details of a specific project
    public function show(UserProject $userproject)
    {
        $this->authorize('view', $userproject);
        return $userproject;
    }
}
