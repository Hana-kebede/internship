<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeamMember extends Model
{
    use HasFactory;

    // Table name (optional, only if different from "team_members")
    protected $table = 'team_members';

    // Mass assignable fields
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'department',
        'status',
        'phone',
        'performance_score',
    ];

    // Hide sensitive data (like password) in JSON response
    protected $hidden = [
        'password',
    ];
}
