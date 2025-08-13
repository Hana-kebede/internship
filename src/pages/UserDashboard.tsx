import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Settings,
  FolderOpen,
  MessageSquare,
  BarChart3,
  Star,
  Bell,
  LogOut,
  Calendar,
  Clock,
  DollarSign,
  Target,
  TrendingUp,
  FileText,
  CheckCircle,
  AlertCircle,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { UserContext } from "@/App";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [editProfileData, setEditProfileData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    company: "Tech Innovations Inc.",
    industry: "Technology",
    role: "CEO"
  });
  const [messagesOpen, setMessagesOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "dev", text: "Hello! How can we help you today?" }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [requestOpen, setRequestOpen] = useState(false);
  const [newRequest, setNewRequest] = useState({
    title: "",
    description: "",
    priority: "Medium"
  });
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [detailsType, setDetailsType] = useState(null); // 'project' or 'request'
  const [detailsData, setDetailsData] = useState(null);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedback, setFeedback] = useState({ rating: 5, text: "" });
  const [reviews, setReviews] = useState([
    { project: "E-commerce Platform", rating: 5, testimonial: "Excellent work, very professional!" },
    { project: "Mobile App", rating: 4, testimonial: "Great communication and delivery." },
    { project: "Website Redesign", rating: 5, testimonial: "Loved the new design!" }
  ]);
  const { user, setUser } = useContext(UserContext);
  const [profilePic, setProfilePic] = useState(user?.profilePic || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face");
  const [newProjectOpen, setNewProjectOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    name: '',
    status: 'Planning',
    progress: 0,
    deadline: '',
    budget: '',
    spent: ''
  });

  // When profilePic changes, update context
  useEffect(() => {
    setUser(prev => prev ? { ...prev, profilePic } : prev);
  }, [profilePic]);

  const handleLogout = () => {
    // Simulate logout logic
    console.log("User logged out");
    navigate("/");
  };

  const projects = [
    {
      id: 1,
      name: "E-commerce Platform",
      status: "In Progress",
      progress: 75,
      deadline: "2024-02-15",
      budget: "$15,000",
      spent: "$11,250"
    },
    {
      id: 2,
      name: "Mobile App",
      status: "Review",
      progress: 90,
      deadline: "2024-01-30",
      budget: "$8,000",
      spent: "$7,200"
    },
    {
      id: 3,
      name: "Website Redesign",
      status: "Planning",
      progress: 25,
      deadline: "2024-03-20",
      budget: "$5,000",
      spent: "$1,250"
    }
  ];

  const serviceRequests = [
    {
      id: 1,
      title: "SEO Optimization Request",
      status: "Open",
      date: "2024-01-20",
      priority: "High"
    },
    {
      id: 2,
      title: "Additional Features",
      status: "In Progress",
      date: "2024-01-18",
      priority: "Medium"
    },
    {
      id: 3,
      title: "Bug Fix Request",
      status: "Resolved",
      date: "2024-01-15",
      priority: "Low"
    }
  ];

  const notifications = [
    {
      id: 1,
      message: "Project milestone completed",
      time: "2 hours ago",
      type: "success"
    },
    {
      id: 2,
      message: "New message from development team",
      time: "4 hours ago",
      type: "info"
    },
    {
      id: 3,
      message: "Upcoming deadline reminder",
      time: "1 day ago",
      type: "warning"
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
              <Badge variant="secondary">User Dashboard</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative" onClick={() => setNotificationOpen(true)}>
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 w-4 h-4 rounded-full p-0 flex items-center justify-center text-xs">
                  {notifications.length}
                </Badge>
              </Button>
              <Avatar>
                <AvatarImage src={user?.profilePic || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"} />
                <AvatarFallback>JD</AvatarFallback>
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
                      You will be redirected to the home page and will need to login again to access your dashboard.
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
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.email || "User"}!</h1>
          <p className="text-muted-foreground">Here's what's happening with your projects today.</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="requests">Requests</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="feedback">Feedback & Reviews</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="glass-card hover-scale animate-slide-in-up">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Active Projects</p>
                      <p className="text-3xl font-bold">3</p>
                    </div>
                    <FolderOpen className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card hover-scale animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Open Requests</p>
                      <p className="text-3xl font-bold">2</p>
                    </div>
                    <MessageSquare className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card hover-scale animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Spent</p>
                      <p className="text-3xl font-bold">$19.7K</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card hover-scale animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Avg. Rating</p>
                      <p className="text-3xl font-bold">4.9</p>
                    </div>
                    <Star className="h-8 w-8 text-yellow-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Projects and Notifications */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FolderOpen className="h-5 w-5" />
                    Recent Projects
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {projects.slice(0, 3).map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="flex-1">
                        <h4 className="font-medium">{project.name}</h4>
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
                    <Bell className="h-5 w-5" />
                    Recent Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {notifications.map((notification) => (
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
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">My Projects</h2>
              <Button className="hero-glow" onClick={() => setNewProjectOpen(true)}>
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
                        <Badge variant={project.status === "In Progress" ? "default" : project.status === "Review" ? "secondary" : "outline"}>
                          {project.status}
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => { setDetailsType('project'); setDetailsData(project); setDetailsOpen(true); }}>View Details</Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Due: {project.deadline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{project.spent} / {project.budget}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{project.progress}% Complete</span>
                      </div>
                    </div>
                    
                    <Progress value={project.progress} className="mb-2" />
                    <p className="text-sm text-muted-foreground">Progress: {project.progress}%</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Service Requests Tab */}
          <TabsContent value="requests" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Service Requests</h2>
              <Button className="hero-glow" onClick={() => setRequestOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                New Request
              </Button>
            </div>
            
            <div className="grid gap-4">
              {serviceRequests.map((request, index) => (
                <Card key={request.id} className="glass-card hover-scale animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{request.title}</h3>
                        <div className="flex items-center gap-4">
                          <Badge variant={request.status === "Open" ? "destructive" : request.status === "In Progress" ? "default" : "secondary"}>
                            {request.status}
                          </Badge>
                          <Badge variant="outline">{request.priority} Priority</Badge>
                          <span className="text-sm text-muted-foreground">Created: {request.date}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => { setDetailsType('request'); setDetailsData(request); setDetailsOpen(true); }}>View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Communication Center</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-medium mb-2">No recent messages</p>
                  <p className="text-muted-foreground mb-4">Your message history with the development team will appear here.</p>
                  <Button className="hero-glow" onClick={() => setMessagesOpen(true)}>Start a Conversation</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Feedback & Reviews Tab */}
          <TabsContent value="feedback" className="space-y-6">
            <Card className="glass-card animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  Feedback & Reviews
                  </CardTitle>
                </CardHeader>
              <CardContent className="space-y-4">
                <Button className="hero-glow" onClick={() => setFeedbackOpen(true)}>Provide Feedback</Button>
                <div className="space-y-2">
                  {reviews.map((review, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold">{review.project}</span>
                        <span className="text-yellow-500">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
                    </div>
                      <p className="text-sm text-muted-foreground">{review.testimonial}</p>
                    </div>
                  ))}
                  </div>
                </CardContent>
              </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="w-20 h-20 cursor-pointer" onClick={() => document.getElementById('profile-pic-input').click()}>
                    <AvatarImage src={profilePic} />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <input id="profile-pic-input" type="file" accept="image/*" style={{ display: 'none' }} onChange={e => {
                    const file = e.target.files && e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = ev => setProfilePic(ev.target.result as string);
                      reader.readAsDataURL(file);
                    }
                  }} />
                  <div>
                    <h3 className="text-xl font-semibold">John Doe</h3>
                    <p className="text-muted-foreground">john@example.com</p>
                    <p className="text-sm text-muted-foreground">Tech Startup CEO</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Personal Information</h4>
                    <div className="space-y-2">
                      <div>
                        <label className="text-sm text-muted-foreground">Full Name</label>
                        <p className="font-medium">John Doe</p>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">Email</label>
                        <p className="font-medium">john@example.com</p>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">Phone</label>
                        <p className="font-medium">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Company Information</h4>
                    <div className="space-y-2">
                      <div>
                        <label className="text-sm text-muted-foreground">Company</label>
                        <p className="font-medium">Tech Innovations Inc.</p>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">Industry</label>
                        <p className="font-medium">Technology</p>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">Role</label>
                        <p className="font-medium">CEO</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="hero-glow" onClick={() => setEditProfileOpen(true)}>
                    <Settings className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Edit Profile Modal */}
      <Dialog open={editProfileOpen} onOpenChange={setEditProfileOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>
          <form
            className="space-y-4"
            onSubmit={e => {
              e.preventDefault();
              setEditProfileOpen(false);
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <Avatar className="w-20 h-20 cursor-pointer" onClick={() => document.getElementById('edit-profile-pic-input').click()}>
                <AvatarImage src={profilePic} />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <input id="edit-profile-pic-input" type="file" accept="image/*" style={{ display: 'none' }} onChange={e => {
                const file = e.target.files && e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = ev => setProfilePic(ev.target.result as string);
                  reader.readAsDataURL(file);
                }
              }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm">Full Name</label>
                <Input
                  value={editProfileData.name}
                  onChange={e => setEditProfileData({ ...editProfileData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <Input
                  type="email"
                  value={editProfileData.email}
                  onChange={e => setEditProfileData({ ...editProfileData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="text-sm">Phone</label>
                <Input
                  value={editProfileData.phone}
                  onChange={e => setEditProfileData({ ...editProfileData, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm">Company</label>
                <Input
                  value={editProfileData.company}
                  onChange={e => setEditProfileData({ ...editProfileData, company: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm">Industry</label>
                <Input
                  value={editProfileData.industry}
                  onChange={e => setEditProfileData({ ...editProfileData, industry: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm">Role</label>
                <Input
                  value={editProfileData.role}
                  onChange={e => setEditProfileData({ ...editProfileData, role: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save Changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Messages Modal */}
      <Dialog open={messagesOpen} onOpenChange={setMessagesOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Start a Conversation</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-2 max-h-60 overflow-y-auto mb-2">
            {messages.map((msg, idx) => (
              <div key={idx} className={`p-2 rounded-lg ${msg.from === "user" ? "bg-primary/10 self-end" : "bg-muted/50 self-start"}`}>{msg.text}</div>
            ))}
          </div>
          <form
            className="flex gap-2"
            onSubmit={e => {
              e.preventDefault();
              if (newMessage.trim()) {
                setMessages([...messages, { from: "user", text: newMessage }]);
                setNewMessage("");
              }
            }}
          >
            <Input
              value={newMessage}
              onChange={e => setNewMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <Button type="submit">Send</Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* New Request Modal */}
      <Dialog open={requestOpen} onOpenChange={setRequestOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Service Request</DialogTitle>
          </DialogHeader>
          <form
            className="space-y-4"
            onSubmit={e => {
              e.preventDefault();
              setRequestOpen(false);
            }}
          >
            <div>
              <label className="text-sm">Title</label>
              <Input
                value={newRequest.title}
                onChange={e => setNewRequest({ ...newRequest, title: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="text-sm">Description</label>
              <Textarea
                value={newRequest.description}
                onChange={e => setNewRequest({ ...newRequest, description: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="text-sm">Priority</label>
              <select
                className="w-full border rounded-md p-2"
                value={newRequest.priority}
                onChange={e => setNewRequest({ ...newRequest, priority: e.target.value })}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <DialogFooter>
              <Button type="submit">Submit Request</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Details Modal */}
      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{detailsType === 'project' ? 'Project Details' : 'Request Details'}</DialogTitle>
          </DialogHeader>
          {detailsData && (
            <div className="space-y-2">
              {detailsType === 'project' ? (
                <>
                  <div><b>Name:</b> {detailsData.name}</div>
                  <div><b>Status:</b> {detailsData.status}</div>
                  <div><b>Progress:</b> {detailsData.progress}%</div>
                  <div><b>Deadline:</b> {detailsData.deadline}</div>
                  <div><b>Budget:</b> {detailsData.budget}</div>
                  <div><b>Spent:</b> {detailsData.spent}</div>
                </>
              ) : (
                <>
                  <div><b>Title:</b> {detailsData.title}</div>
                  <div><b>Status:</b> {detailsData.status}</div>
                  <div><b>Date:</b> {detailsData.date}</div>
                  <div><b>Priority:</b> {detailsData.priority}</div>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

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

      {/* Feedback Modal */}
      <Dialog open={feedbackOpen} onOpenChange={setFeedbackOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Provide Feedback</DialogTitle>
          </DialogHeader>
          <form
            className="space-y-4"
            onSubmit={e => {
              e.preventDefault();
              setReviews([{ project: "Your Feedback", rating: feedback.rating, testimonial: feedback.text }, ...reviews]);
              setFeedback({ rating: 5, text: "" });
              setFeedbackOpen(false);
            }}
          >
            <div>
              <label className="text-sm">Rating</label>
              <div className="flex gap-1 mt-1">
                {[1,2,3,4,5].map(star => (
                  <button
                    type="button"
                    key={star}
                    className={star <= feedback.rating ? "text-yellow-500" : "text-gray-300"}
                    onClick={() => setFeedback(f => ({ ...f, rating: star }))}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm">Feedback</label>
              <Textarea
                value={feedback.text}
                onChange={e => setFeedback(f => ({ ...f, text: e.target.value }))}
                required
              />
            </div>
            <DialogFooter>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* New Project Modal */}
      <Dialog open={newProjectOpen} onOpenChange={setNewProjectOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Project</DialogTitle>
          </DialogHeader>
          <form className="space-y-4" onSubmit={e => { e.preventDefault(); setNewProjectOpen(false); }}>
            <Input placeholder="Project Name" value={newProject.name} onChange={e => setNewProject({ ...newProject, name: e.target.value })} required />
            <Input placeholder="Status" value={newProject.status} onChange={e => setNewProject({ ...newProject, status: e.target.value })} />
            <Input placeholder="Progress" type="number" value={newProject.progress} onChange={e => setNewProject({ ...newProject, progress: Number(e.target.value) })} />
            <Input placeholder="Deadline" type="date" value={newProject.deadline} onChange={e => setNewProject({ ...newProject, deadline: e.target.value })} />
            <Input placeholder="Budget" value={newProject.budget} onChange={e => setNewProject({ ...newProject, budget: e.target.value })} />
            <Input placeholder="Spent" value={newProject.spent} onChange={e => setNewProject({ ...newProject, spent: e.target.value })} />
            <DialogFooter>
              <Button type="submit">Add Project</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserDashboard;