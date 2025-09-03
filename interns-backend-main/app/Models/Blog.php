<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'author',
        'category',
        'status',
        'image_url',
        'content',
        'views',
        'likes',
        'publish_date',
    ];
      public function likedByUsers()
    {
        return $this->belongsToMany(User::class, 'blog_user_likes')->withTimestamps();
    }
}

