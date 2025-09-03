<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceRequest extends Model
{
     use HasFactory;

    protected $fillable = [
        'request_title','description','client_name','priority',
        'status','submitted_date','feedback_rating',
        'satisfaction_level','feedback_comment'
    ];
}
