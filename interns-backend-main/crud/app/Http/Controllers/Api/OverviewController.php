<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\UserManagement;
use App\Models\Project;
use App\Models\ServiceRequest; // Assuming you have a service_requests table

class OverviewController extends Controller
{
    public function index()
    {
        
        
        $totalUsers = User::count();

        $activeProjects = Project::whereIn('status', ['Planning', 'Review', 'In Progress'])->count();

        $pendingRequests = ServiceRequest::where('status', 'Open')->count();

        $recentProjects = Project::orderBy('id', 'desc')->take(3)->get();

       $recentRequests = ServiceRequest::orderBy('id', 'desc')->take(3)->get();

        
        return response()->json([
            'stats' => [
                'total_users' => $totalUsers,
                'active_projects' => $activeProjects,
                'pending_requests' => $pendingRequests,
            ],
            'recent_projects' => $recentProjects,
          'recent_requests' => $recentRequests,
        ]);
    }
}
