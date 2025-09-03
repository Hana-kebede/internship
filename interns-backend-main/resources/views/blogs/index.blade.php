@extends('layouts.app')

@section('content')
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h1>Blogs</h1>
        <a href="{{ route('blog.create') }}" class="btn btn-primary">+ New Blog</a>
    </div>

    <div class="list-group">
        @foreach ($blogs as $blog)
            <a href="{{ route('blog.show', $blog->id) }}" class="list-group-item list-group-item-action">
                <h5 class="mb-1">{{ $blog->title }}</h5>
                <small>By {{ $blog->author ?? 'Unknown' }} | {{ $blog->created_at->format('M d, Y') }}</small>
            </a>
        @endforeach
    </div>

    <div class="mt-3">
        {{ $blogs->links() }}
    </div>
@endsection
