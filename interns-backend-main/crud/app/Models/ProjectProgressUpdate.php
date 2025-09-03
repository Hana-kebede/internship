<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectProgressUpdate extends Model
{
    use HasFactory;

    protected $fillable = [
         'project',
        'client_id',
        'progress',
        'current_status',
        'completed_milestones',
        'next_deadline',
        'last_update',
        'notes',
    ];

    // Relationship to User (client)
    public function client()
    {
        return $this->belongsTo(User::class, 'client_id');
    }
}