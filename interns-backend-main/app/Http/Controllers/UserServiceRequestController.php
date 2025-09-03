<?php

namespace App\Http\Controllers;

use App\Models\UserServiceRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserServiceRequestController extends Controller
{
    public function index()
    {
        return UserServiceRequest::where('user_id', Auth::id())->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'priority' => 'required|in:low,medium,high',
            'status' => 'nullable|string'
        ]);
        $validated['user_id'] = Auth::id();
        $userserviceRequest = UserServiceRequest::create($validated);
        return response()->json($userserviceRequest, 201);
    }

    public function show(UserServiceRequest $userserviceRequest)
    {
        $this->authorize('view', $userserviceRequest);
        return $userserviceRequest;
    }

    public function update(Request $request, UserServiceRequest $userserviceRequest)
    {
        $this->authorize('update', $userserviceRequest);
        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'priority' => 'sometimes|required|in:low,medium,high',
            'status' => 'nullable|string'
        ]);
        $userserviceRequest->update($validated);
        return response()->json($userserviceRequest);
    }

    public function destroy(UserServiceRequest $userserviceRequest)
    {
        $this->authorize('delete', $userserviceRequest);
        $userserviceRequest->delete();
        return response()->json(null, 204);
    }
}

