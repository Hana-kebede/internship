@extends('layouts.app')

@section('content')
    <h1>Edit Blog</h1>

    <form action="{{ route('blog.update', $blog->id) }}" method="POST" class="mt-3">
        @csrf
        @method('PUT')

        <div class="mb-3">
            <label class="form-label">Title</label>
            <input type="text" name="title" value="{{ $blog->title }}" class="form-control" required>
        </div>

        <div class="mb-3">
            <label class="form-label">Content</label>
            <textarea name="content" class="form-control" rows="5" required>{{ $blog->content }}</textarea>
        </div>

        <div class="mb-3">
            <label class="form-label">Author</label>
            <input type="text" name="author" value="{{ $blog->author }}" class="form-control">
        </div>

        <button type="submit" class="btn btn-success">Update</button>
        <a href="{{ route('blog.show', $blog->id) }}" class="btn btn-secondary">Cancel</a>
    </form>
@endsection
