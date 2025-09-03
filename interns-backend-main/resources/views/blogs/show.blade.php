@extends('layouts.app')

@section('content')
    <div class="card">
        <div class="card-body">
            <h2 class="card-title">{{ $blog->title }}</h2>
            <p class="text-muted">
                By {{ $blog->author ?? 'Unknown' }} | {{ $blog->created_at->format('M d, Y') }}
            </p>
            <hr>
            <p class="card-text">{{ $blog->content }}</p>
        </div>
    </div>

    <div class="mt-3 d-flex gap-2">
        <a href="{{ route('blog.index') }}" class="btn btn-secondary">Back to Blogs</a>
        <a href="{{ route('blog.edit', $blog->id) }}" class="btn btn-warning">Edit</a>

        <form action="{{ route('blog.destroy', $blog->id) }}" method="POST" class="d-inline">
            @csrf
            @method('DELETE')
            <button type="submit" class="btn btn-danger" onclick="return confirm('Are you sure?')">
                Delete
            </button>
        </form>
    </div>
@endsection
