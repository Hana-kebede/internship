<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable; // Allows authentication
use Illuminate\Notifications\Notifiable;

class Usermanagement extends Authenticatable
{
    use HasFactory, Notifiable;

    // Table name (optional if your table is 'users', default)
    protected $table = 'usermanagements';

    // Mass assignable fields
    protected $fillable = [
         'name',
        'email',
        'password',
        'company',
        'role',
        'status',
        'joined_date',
        'phone',
    ];

    protected $hidden = [
        'password',
    ];
}