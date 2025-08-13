import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Users,
  FolderOpen,
  MessageSquare,
  BarChart3,
  Bell,
  LogOut,
  Settings,
  Plus,
  Search,
  Filter,
  Calendar,
  TrendingUp,
  DollarSign,
  Target,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  Clock,
  AlertTriangle,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useContext } from "react";
import { UserContext } from "@/App";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  const [notificationOpen, setNotificationOpen] = useState(false);
  const [addUserOpen, setAddUserOpen] = useState(false);
  const [userSearch, setUserSearch] = useState("");
  const [userAction, setUserAction] = useState({ open: false, type: '', user: null });
  const [addProjectOpen, setAddProjectOpen] = useState(false);
  const [projectAction, setProjectAction] = useState({ open: false, type: '', project: null });
  const [filterOpen, setFilterOpen] = useState(false);
  const [requestAction, setRequestAction] = useState({ open: false, type: '', request: null });
  const [messagesOpen, setMessagesOpen] = useState(false);
  const [blogAction, setBlogAction] = useState({ open: false, type: '', post: null });
  const [addPostOpen, setAddPostOpen] = useState(false);
  const [adminProfileOpen, setAdminProfileOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New user registered", time: "1 hour ago", type: "info" },
    { id: 2, message: "Project deadline approaching", time: "3 hours ago", type: "warning" },
    { id: 3, message: "Service request approved", time: "Today", type: "success" }
  ]);
  const { user, setUser } = useContext(UserContext);
  const [adminProfilePic, setAdminProfilePic] = useState(user?.profilePic || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face");
  const [adminProfileEdit, setAdminProfileEdit] = useState(false);
  const [adminProfileData, setAdminProfileData] = useState({
    name: "Admin",
    email: "admin@hawisoftware.com",
    role: "System Administrator"
  });

  // When adminProfilePic changes, update context
  useEffect(() => {
    setUser(prev => prev ? { ...prev, profilePic: adminProfilePic } : prev);
  }, [adminProfilePic]);

  const handleLogout = () => {
    console.log("Admin logged out");
    navigate("/");
  };

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      company: "Tech Innovations Inc.",
      role: "Client",
      status: "Active",
      projects: 3,
      joined: "2023-12-15"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      company: "Digital Solutions",
      role: "Client",
      status: "Active",
      projects: 2,
      joined: "2024-01-08"
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "michael@hawisoft.com",
      company: "Hawi Software",
      role: "Developer",
      status: "Active",
      projects: 8,
      joined: "2023-06-20"
    }
  ];

  const projects = [
    {
      id: 1,
      name: "E-commerce Platform",
      client: "John Doe",
      status: "In Progress",
      progress: 75,
      deadline: "2024-02-15",
      budget: "$15,000",
      team: ["Michael Chen", "Sarah Dev"]
    },
    {
      id: 2,
      name: "Mobile App",
      client: "Sarah Johnson",
      status: "Review",
      progress: 90,
      deadline: "2024-01-30",
      budget: "$8,000",
      team: ["Lisa Park", "David Kim"]
    },
    {
      id: 3,
      name: "Website Redesign",
      client: "Tech Corp",
      status: "Planning",
      progress: 25,
      deadline: "2024-03-20",
      budget: "$5,000",
      team: ["Michael Chen"]
    }
  ];

  const serviceRequests = [
    {
      id: 1,
      title: "SEO Optimization Request",
      client: "John Doe",
      status: "Open",
      priority: "High",
      date: "2024-01-20"
    },
    {
      id: 2,
      title: "Additional Features",
      client: "Sarah Johnson",
      status: "In Progress",
      priority: "Medium",
      date: "2024-01-18"
    },
    {
      id: 3,
      title: "Bug Fix Request",
      client: "Tech Corp",
      status: "Resolved",
      priority: "Low",
      date: "2024-01-15"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      author: "Admin",
      status: "Published",
      date: "2024-01-15",
      views: 1250,
      category: "Web Development"
    },
    {
      id: 2,
      title: "Mobile App Best Practices",
      author: "Sarah Johnson",
      status: "Draft",
      date: "2024-01-12",
      views: 0,
      category: "Mobile Development"
    },
    {
      id: 3,
      title: "Building Scalable Architecture",
      author: "Michael Chen",
      status: "Review",
      date: "2024-01-10",
      views: 890,
      category: "Software Architecture"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <img src="https://www.hawisoftware.com/wp-content/uploads/2021/08/logohawi.png" alt="Hawi Software Logo" className="w-8 h-8 object-contain" />
                <span className="font-bold text-lg">Hawi Software</span>
              </Link>
              <Badge variant="secondary">Admin Dashboard</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative" onClick={() => setNotificationOpen(true)}>
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 w-4 h-4 rounded-full p-0 flex items-center justify-center text-xs">
                  {notifications.length}
                </Badge>
              </Button>
              <Avatar onClick={() => setAdminProfileOpen(true)} className="cursor-pointer">
                <AvatarImage src={user?.profilePic || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"} />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure you want to logout?</AlertDialogTitle>
                    <AlertDialogDescription>
                      You will be redirected to the home page and will need to login again to access the admin dashboard.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleLogout}>Logout</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your business operations and monitor performance.</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="requests">Requests</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="glass-card hover-scale animate-slide-in-up">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                      <p className="text-3xl font-bold">128</p>
                      <p className="text-sm text-green-600">+12% from last month</p>
                    </div>
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card hover-scale animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Active Projects</p>
                      <p className="text-3xl font-bold">24</p>
                      <p className="text-sm text-blue-600">8 in review</p>
                    </div>
                    <FolderOpen className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card hover-scale animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Revenue</p>
                      <p className="text-3xl font-bold">$284K</p>
                      <p className="text-sm text-green-600">+8% from last month</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card hover-scale animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Pending Requests</p>
                      <p className="text-3xl font-bold">7</p>
                      <p className="text-sm text-yellow-600">Needs attention</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-yellow-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Recent Projects
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {projects.slice(0, 3).map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="flex-1">
                        <h4 className="font-medium">{project.name}</h4>
                        <p className="text-sm text-muted-foreground">Client: {project.client}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant={project.status === "In Progress" ? "default" : project.status === "Review" ? "secondary" : "outline"}>
                            {project.status}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="mt-2" />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-card animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Recent Requests
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {serviceRequests.slice(0, 3).map((request) => (
                    <div key={request.id} className="flex items-start justify-between p-3 rounded-lg bg-muted/50">
                      <div className="flex-1">
                        <h4 className="font-medium">{request.title}</h4>
                        <p className="text-sm text-muted-foreground">From: {request.client}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant={request.status === "Open" ? "destructive" : request.status === "In Progress" ? "default" : "secondary"}>
                            {request.status}
                          </Badge>
                          <Badge variant="outline">{request.priority}</Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">User Management</h2>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Search users..." className="pl-10 w-64" value={userSearch} onChange={e => setUserSearch(e.target.value)} />
                </div>
                <Button className="hero-glow" onClick={() => setAddUserOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add User
                </Button>
              </div>
            </div>

            <Card className="glass-card">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Projects</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Joined</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.filter(u => u.name.toLowerCase().includes(userSearch.toLowerCase()) || u.email.toLowerCase().includes(userSearch.toLowerCase())).map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{user.name}</p>
                              <p className="text-sm text-muted-foreground">{user.email}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{user.company}</TableCell>
                        <TableCell>
                          <Badge variant={user.role === "Client" ? "secondary" : "default"}>
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.projects}</TableCell>
                        <TableCell>
                          <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.joined}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" onClick={() => setUserAction({ open: true, type: 'view', user })}>
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => setUserAction({ open: true, type: 'edit', user })}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="ghost" size="icon" onClick={() => setUserAction({ open: false, type: '', user: null })}>
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Are you sure you want to delete <b>{user.name}</b>?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This action cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction onClick={() => {
                                    // Simulate deletion
                                    console.log("Simulating deletion for user:", user);
                                    setUserAction({ ...userAction, open: false });
                                  }}>Delete</AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Project Management</h2>
              <Button className="hero-glow" onClick={() => setAddProjectOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                New Project
              </Button>
            </div>
            
            <div className="grid gap-6">
              {projects.map((project, index) => (
                <Card key={project.id} className="glass-card hover-scale animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                        <p className="text-muted-foreground">Client: {project.client}</p>
                        <Badge variant={project.status === "In Progress" ? "default" : project.status === "Review" ? "secondary" : "outline"}>
                          {project.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={() => setProjectAction({ open: true, type: 'view', project })}>
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => setProjectAction({ open: true, type: 'edit', project })}>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => setProjectAction({ open: false, type: '', project: null })}>
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you sure you want to delete <b>{project.name}</b>?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => {
                                // Simulate deletion
                                console.log("Simulating deletion for project:", project);
                                setProjectAction({ ...projectAction, open: false });
                              }}>Delete</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Due: {project.deadline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Budget: {project.budget}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{project.progress}% Complete</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{project.team.length} members</span>
                      </div>
                    </div>
                    
                    <Progress value={project.progress} className="mb-2" />
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Team: {project.team.join(", ")}</p>
                      <p className="text-sm text-muted-foreground">Progress: {project.progress}%</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Service Requests Tab */}
          <TabsContent value="requests" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Service Requests</h2>
              <div className="flex items-center gap-4">
                <Button variant="outline" onClick={() => setFilterOpen(true)}>
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
            
            <Card className="glass-card">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Request</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {serviceRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.title}</TableCell>
                        <TableCell>{request.client}</TableCell>
                        <TableCell>
                          <Badge variant={request.priority === "High" ? "destructive" : request.priority === "Medium" ? "default" : "secondary"}>
                            {request.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={request.status === "Open" ? "destructive" : request.status === "In Progress" ? "default" : "secondary"}>
                            {request.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{request.date}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" onClick={() => setRequestAction({ open: true, type: 'view', request })}>
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => setRequestAction({ open: true, type: 'edit', request })}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="ghost" size="icon" onClick={() => setRequestAction({ open: false, type: '', request: null })}>
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Are you sure you want to delete <b>{request.title}</b>?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This action cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction onClick={() => {
                                    // Simulate deletion
                                    console.log("Simulating deletion for request:", request);
                                    setRequestAction({ ...requestAction, open: false });
                                  }}>Delete</AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Client Communications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-medium mb-2">No recent messages</p>
                  <p className="text-muted-foreground mb-4">Client messages and communications will appear here.</p>
                  <Button className="hero-glow" onClick={() => setMessagesOpen(true)}>View All Messages</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Blog Tab */}
          <TabsContent value="blog" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Blog Management</h2>
              <Button className="hero-glow" onClick={() => setAddPostOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </Button>
            </div>

            <Card className="glass-card">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Views</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {blogPosts.map((post) => (
                      <TableRow key={post.id}>
                        <TableCell className="font-medium">{post.title}</TableCell>
                        <TableCell>{post.author}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{post.category}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={post.status === "Published" ? "default" : post.status === "Draft" ? "secondary" : "outline"}>
                            {post.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{post.views}</TableCell>
                        <TableCell>{post.date}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" onClick={() => setBlogAction({ open: true, type: 'view', post })}>
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => setBlogAction({ open: true, type: 'edit', post })}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="ghost" size="icon" onClick={() => setBlogAction({ open: false, type: '', post: null })}>
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Are you sure you want to delete <b>{post.title}</b>?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This action cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction onClick={() => {
                                    // Simulate deletion
                                    console.log("Simulating deletion for post:", post);
                                    setBlogAction({ ...blogAction, open: false });
                                  }}>Delete</AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          {/* Removed Analytics Tab */}
        </Tabs>
      </div>

      {/* Notification Modal */}
      <Dialog open={notificationOpen} onOpenChange={setNotificationOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Notifications</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {notifications.length === 0 ? (
              <p className="text-muted-foreground">No notifications.</p>
            ) : notifications.map((notification) => (
              <div key={notification.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  notification.type === "success" ? "bg-green-500" :
                  notification.type === "warning" ? "bg-yellow-500" : "bg-blue-500"
                }`} />
                <div className="flex-1">
                  <p className="text-sm">{notification.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                    </div>
                    </div>
            ))}
                    </div>
        </DialogContent>
      </Dialog>

      {/* Add User Modal */}
      <Dialog open={addUserOpen} onOpenChange={setAddUserOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
          </DialogHeader>
          <form className="space-y-4">
            <Input placeholder="Full Name" required />
            <Input placeholder="Email" type="email" required />
            <Input placeholder="Company" />
            <Input placeholder="Role" />
            <DialogFooter>
              <Button type="submit">Add User</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* User Action Modal */}
      <Dialog open={userAction.open} onOpenChange={o => setUserAction({ ...userAction, open: o })}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{userAction.type === 'view' ? 'View User' : userAction.type === 'edit' ? 'Edit User' : 'Delete User'}</DialogTitle>
          </DialogHeader>
          {userAction.type === 'view' && userAction.user && (
            <div>
              <p><b>Name:</b> {userAction.user.name}</p>
              <p><b>Email:</b> {userAction.user.email}</p>
              <p><b>Company:</b> {userAction.user.company}</p>
              <p><b>Role:</b> {userAction.user.role}</p>
              <p><b>Status:</b> {userAction.user.status}</p>
              <p><b>Joined:</b> {userAction.user.joined}</p>
                  </div>
          )}
          {userAction.type === 'edit' && userAction.user && (
            <form className="space-y-2">
              <Input defaultValue={userAction.user.name} />
              <Input defaultValue={userAction.user.email} />
              <Input defaultValue={userAction.user.company} />
              <Input defaultValue={userAction.user.role} />
              <DialogFooter>
                <Button type="submit">Save</Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Add Project Modal */}
      <Dialog open={addProjectOpen} onOpenChange={setAddProjectOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Project</DialogTitle>
          </DialogHeader>
          <form className="space-y-4">
            <Input placeholder="Project Name" required />
            <Input placeholder="Client" required />
            <Input placeholder="Deadline" type="date" />
            <Input placeholder="Budget" />
            <DialogFooter>
              <Button type="submit">Add Project</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Project Action Modal */}
      <Dialog open={projectAction.open} onOpenChange={o => setProjectAction({ ...projectAction, open: o })}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{projectAction.type === 'view' ? 'Project Details' : 'Edit Project'}</DialogTitle>
          </DialogHeader>
          {projectAction.type === 'view' && projectAction.project && (
            <div>
              <p><b>Name:</b> {projectAction.project.name}</p>
              <p><b>Client:</b> {projectAction.project.client}</p>
              <p><b>Status:</b> {projectAction.project.status}</p>
              <p><b>Deadline:</b> {projectAction.project.deadline}</p>
              <p><b>Budget:</b> {projectAction.project.budget}</p>
              <p><b>Team:</b> {projectAction.project.team.join(', ')}</p>
                    </div>
          )}
          {projectAction.type === 'edit' && projectAction.project && (
            <form className="space-y-2">
              <Input defaultValue={projectAction.project.name} />
              <Input defaultValue={projectAction.project.client} />
              <Input defaultValue={projectAction.project.deadline} type="date" />
              <Input defaultValue={projectAction.project.budget} />
              <DialogFooter>
                <Button type="submit">Save</Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Filter Modal */}
      <Dialog open={filterOpen} onOpenChange={setFilterOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Filter Requests</DialogTitle>
          </DialogHeader>
          <form className="space-y-4">
            <Input placeholder="Client Name" />
            <Input placeholder="Status" />
            <DialogFooter>
              <Button type="submit">Apply Filter</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Request Action Modal */}
      <Dialog open={requestAction.open} onOpenChange={o => setRequestAction({ ...requestAction, open: o })}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{requestAction.type === 'view' ? 'Request Details' : requestAction.type === 'edit' ? 'Edit Request' : 'Approve Request'}</DialogTitle>
          </DialogHeader>
          {requestAction.type === 'view' && requestAction.request && (
            <div>
              <p><b>Title:</b> {requestAction.request.title}</p>
              <p><b>Client:</b> {requestAction.request.client}</p>
              <p><b>Status:</b> {requestAction.request.status}</p>
              <p><b>Priority:</b> {requestAction.request.priority}</p>
              <p><b>Date:</b> {requestAction.request.date}</p>
                    </div>
          )}
          {requestAction.type === 'edit' && requestAction.request && (
            <form className="space-y-2">
              <Input defaultValue={requestAction.request.title} />
              <Input defaultValue={requestAction.request.client} />
              <Input defaultValue={requestAction.request.status} />
              <Input defaultValue={requestAction.request.priority} />
              <DialogFooter>
                <Button type="submit">Save</Button>
              </DialogFooter>
            </form>
          )}
          {requestAction.type === 'approve' && requestAction.request && (
            <div>
              <p>Approve request <b>{requestAction.request.title}</b> from <b>{requestAction.request.client}</b>?</p>
              <DialogFooter>
                <Button variant="default">Approve</Button>
              </DialogFooter>
                    </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Messages Modal */}
      <Dialog open={messagesOpen} onOpenChange={setMessagesOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>All Messages</DialogTitle>
          </DialogHeader>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            <div className="p-2 bg-muted/50 rounded">User: "Can I get an update on my project?"</div>
            <div className="p-2 bg-muted/50 rounded self-end">Admin: "Your project is on track for delivery."</div>
                  </div>
          <form className="flex gap-2 mt-2">
            <Input placeholder="Type your response..." />
            <Button type="submit">Send</Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Add Post Modal */}
      <Dialog open={addPostOpen} onOpenChange={setAddPostOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Post</DialogTitle>
          </DialogHeader>
          <form className="space-y-4">
            <Input placeholder="Title" required />
            <Input placeholder="Author" />
            <Input placeholder="Category" />
            <Textarea placeholder="Content" />
            <DialogFooter>
              <Button type="submit">Add Post</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Blog Action Modal */}
      <Dialog open={blogAction.open} onOpenChange={o => setBlogAction({ ...blogAction, open: o })}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{blogAction.type === 'view' ? 'View Post' : blogAction.type === 'edit' ? 'Edit Post' : 'Delete Post'}</DialogTitle>
          </DialogHeader>
          {blogAction.type === 'view' && blogAction.post && (
            <div>
              <p><b>Title:</b> {blogAction.post.title}</p>
              <p><b>Author:</b> {blogAction.post.author}</p>
              <p><b>Category:</b> {blogAction.post.category}</p>
              <p><b>Status:</b> {blogAction.post.status}</p>
              <p><b>Date:</b> {blogAction.post.date}</p>
              <p><b>Views:</b> {blogAction.post.views}</p>
                    </div>
          )}
          {blogAction.type === 'edit' && blogAction.post && (
            <form className="space-y-2">
              <Input defaultValue={blogAction.post.title} />
              <Input defaultValue={blogAction.post.author} />
              <Input defaultValue={blogAction.post.category} />
              <Textarea defaultValue={blogAction.post.content} />
              <DialogFooter>
                <Button type="submit">Save</Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Admin Profile Modal */}
      <Dialog open={adminProfileOpen} onOpenChange={setAdminProfileOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Admin Profile</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4">
            <Avatar className="w-20 h-20 cursor-pointer" onClick={() => document.getElementById('admin-profile-pic-input').click()}>
              <AvatarImage src={adminProfilePic} />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <input id="admin-profile-pic-input" type="file" accept="image/*" style={{ display: 'none' }} onChange={e => {
              const file = e.target.files && e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = ev => setAdminProfilePic(ev.target.result as string);
                reader.readAsDataURL(file);
              }
            }} />
            <div className="text-center">
              <h3 className="text-xl font-semibold">{adminProfileData.name}</h3>
              <p className="text-muted-foreground">{adminProfileData.email}</p>
              <p className="text-sm text-muted-foreground">{adminProfileData.role}</p>
                    </div>
            <Button onClick={() => setAdminProfileEdit(true)}>Edit Profile</Button>
                  </div>
        </DialogContent>
      </Dialog>

      {/* Admin Profile Edit Modal */}
      <Dialog open={adminProfileEdit} onOpenChange={setAdminProfileEdit}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Admin Profile</DialogTitle>
          </DialogHeader>
          <form className="space-y-4" onSubmit={e => { e.preventDefault(); setAdminProfileEdit(false); }}>
            <div className="flex flex-col items-center gap-2">
              <Avatar className="w-20 h-20 cursor-pointer" onClick={() => document.getElementById('admin-profile-edit-pic-input').click()}>
                <AvatarImage src={adminProfilePic} />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <input id="admin-profile-edit-pic-input" type="file" accept="image/*" style={{ display: 'none' }} onChange={e => {
                const file = e.target.files && e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = ev => setAdminProfilePic(ev.target.result as string);
                  reader.readAsDataURL(file);
                }
              }} />
            </div>
            <Input value={adminProfileData.name} onChange={e => setAdminProfileData({ ...adminProfileData, name: e.target.value })} placeholder="Name" required />
            <Input value={adminProfileData.email} onChange={e => setAdminProfileData({ ...adminProfileData, email: e.target.value })} placeholder="Email" type="email" required />
            <Input value={adminProfileData.role} onChange={e => setAdminProfileData({ ...adminProfileData, role: e.target.value })} placeholder="Role" />
            <DialogFooter>
              <Button type="submit">Save Changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;