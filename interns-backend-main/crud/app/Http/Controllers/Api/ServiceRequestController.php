<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ServiceRequest;

class ServiceRequestController extends Controller
{
    
    public function index(Request $request)
    {
        $query = ServiceRequest::query();

        if ($request->has('client_name')) {
            $query->where('client_name', 'like', '%'.$request->client_name.'%');
        }
        if ($request->has('status')) {
            $query->where('status', $request->status);
        }

        return response()->json($query->orderBy('submitted_date', 'desc')->get());
    }

    // View single service request
    public function show($id)
    {
        return response()->json(ServiceRequest::findOrFail($id));
    }

    // Delete service request
    public function destroy($id)
    {
        $service = ServiceRequest::findOrFail($id);
        $service->delete();

        return response()->json(['message' => 'Service request deleted successfully']);
    }
}