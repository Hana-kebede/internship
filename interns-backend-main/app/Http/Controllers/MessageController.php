<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Message;
use App\Models\User;

use Illuminate\Support\Facades\Auth;

class MessageController extends Controller

{
    // 1️⃣ List all messages (for admin)
    public function index()
    {
        $messages = Message::with(['sender', 'recipient'])
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json($messages);
    }

    // Send a new message (admin selects recipient name)
    public function store(Request $request)
    {
        $validated = $request->validate([
            'recipient_name' => 'required|string|exists:users,name', // frontend sends name
            'subject'        => 'required|string|max:255',
            'content'        => 'required|string',
        ]);

        // Find recipient by name
        $recipient = User::where('name', $validated['recipient_name'])->first();

        $message = Message::create([
            'sender_id'    => Auth::id(),         // logged-in admin
            'recipient_id' => $recipient->id,     // store user ID
            'subject'      => $validated['subject'],
            'content'      => $validated['content'],
        ]);

        return response()->json([
            'message' => 'Message sent successfully',
            'data'    => $message->load('recipient', 'sender')
        ], 201);
    }

    // Mark message as read
    public function markAsRead($id)
    {
        $message = Message::findOrFail($id);
        $message->update(['is_read' => true]);

        return response()->json(['message' => 'Marked as read']);
    }

    // Reply to a message
    public function reply(Request $request, $id)
    {
        $original = Message::findOrFail($id);

        $validated = $request->validate([
            'content' => 'required|string',
        ]);

        $reply = Message::create([
            'sender_id'    => Auth::id(),
            'recipient_id' => $original->sender_id,
            'subject'      => "Re: " . $original->subject,   
            'content'      => $validated['content'],
        ]);

        return response()->json([
            'message' => 'Reply sent successfully',
            'data'    => $reply->load('recipient', 'sender')
        ]);
    }

    // Delete a message
    public function destroy($id)
    {
        $message = Message::findOrFail($id);
        $message->delete();

        return response()->json(['message' => 'Message deleted']);
    }
}