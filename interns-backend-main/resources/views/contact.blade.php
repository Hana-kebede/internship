@extends('layouts.app')

@section('title', 'Contact Us')

@section('content')
<div class="container mt-4">
    <h1>Contact Us</h1>
    <p>If you have any inquiries, please fill out the form below or find us at our office.</p>

    <div class="row">
        <!-- Contact Form -->
        <div class="col-md-6 mb-4">
            <form action="{{ route('contact.submit') }}" method="POST">
                @csrf
                <div class="mb-3">
                    <label class="form-label">Your Name</label>
                    <input type="text" name="name" class="form-control" required>
                </div>

                <div class="mb-3">
                    <label class="form-label">Your Email</label>
                    <input type="email" name="email" class="form-control" required>
                </div>

                <div class="mb-3">
                    <label class="form-label">Message</label>
                    <textarea name="message" rows="5" class="form-control" required></textarea>
                </div>

                <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
        </div>

        <!-- Google Map -->
        <div class="col-md-6 mb-4">
            <h4 class="mb-3">Our Location</h4>
            <div class="ratio ratio-4x3">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.565436704936!2d39.269!3d8.556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85c1a1b4d9f5%3A0xf0a5f6e6f8f68d20!2sEthiopia!5e0!3m2!1sen!2set!4v1693232452365!5m2!1sen!2set" 
                    style="border:0;" allowfullscreen="" loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </div>
</div>
@endsection
