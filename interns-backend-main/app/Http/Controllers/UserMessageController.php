<?php
namespace App\Http\Controllers;

use App\Models\UserMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserMessageController extends Controller
{
    public function index()
    {
        return UserMessage::where('receiver_id', Auth::id())
            ->orWhere('sender_id', Auth::id())
            ->orderBy('created_at', 'desc')
            ->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'receiver_id' => 'required|exists:users,id',
            'content' => 'required|string'
        ]);
        $validated['sender_id'] = Auth::id();
        $usermessage = UserMessage::create($validated);
        return response()->json($usermessage, 201);
    }

    public function show(UserMessage $usermessage)
    {
        $this->authorize('view', $usermessage);
        return $usermessage;
    }
}