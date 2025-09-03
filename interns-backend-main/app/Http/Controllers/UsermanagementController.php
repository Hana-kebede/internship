<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use App\Models\Usermanagement;
use Illuminate\Http\Request;

class UsermanagementController extends Controller
{
    // ✅ GET all users
    public function index()
    {
        $users = Usermanagement::orderBy('created_at', 'desc')->get();
        return response()->json($users);
    }

    // ✅ Create new user
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'        => 'required|string|max:255',
            'email'       => 'required|email|unique:usermanagements',
            'password'    => 'required|string|min:6',
            'company'     => 'required|string|max:255',
            'role'        => 'required|in:Admin,Client',
            'status'      => 'required|in:Active,Inactive',
            'joined_date' => 'required|date',
            'phone'       => 'nullable|string',
        ]);

        $validated['password'] = Hash::make($validated['password']);

        $user = Usermanagement::create($validated);

        return response()->json([
            'message' => 'User created successfully',
            'data' => $user
        ], 201);
    }

    // ✅ Show single user
    public function show($id)
    {
        $user = Usermanagement::findOrFail($id);
        return response()->json($user);
    }

    // ✅ Update user
    public function update(Request $request, $id)
    {
        $user = Usermanagement::findOrFail($id);

        $validated = $request->validate([
            'name'        => 'sometimes|string|max:255',
            'email'       => 'sometimes|email|unique:usermanagements,email,' . $id,
            'password'    => 'sometimes|string|min:6',
            'company'     => 'sometimes|string|max:255',
            'role'        => 'sometimes|in:Admin,Client',
            'status'      => 'sometimes|in:Active,Inactive',
            'joined_date' => 'sometimes|date',
            'phone'       => 'nullable|string',
        ]);

        if (isset($validated['password'])) {
            $validated['password'] = Hash::make($validated['password']);
        }

        $user->update($validated);

        return response()->json([
            'message' => 'User updated successfully',
            'data' => $user
        ]);
    }

    // ✅ Delete user
    public function destroy($id)
    {
        $user = Usermanagement::findOrFail($id);
        $user->delete();

        return response()->json(['message' => 'User deleted successfully']);
    }
}
