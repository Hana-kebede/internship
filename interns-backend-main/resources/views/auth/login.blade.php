@extends('layouts.app')

@section('content')
    <h1>Login</h1>
    <form method="POST" action="{{ route('login') }}">
        @csrf
        <div class="mb-3">
            <label>Email</label>
            <input type="email" name="email" class="form-control">
        </div>
        <div class="mb-3">
            <label>Password</label>
            <input type="password" name="password" class="form-control">
        </div>
        <button class="btn btn-primary">Login</button>
    </form>
    <div class="text-center mt-3">
        <a href="{{ route('google.login') }}" class="btn btn-danger">
            <i class="fab fa-google"></i> Login with Google
        </a>
    </div>
    
@endsection
