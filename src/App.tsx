import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import { createContext, useState, Dispatch, SetStateAction } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "@/components/Services";
import ServicesSection from "@/components/Services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

// UserContext for global user state
type UserType = { email: string; role: 'admin' | 'user'; profilePic?: string } | null;
export const UserContext = createContext<{
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType>>;
}>({
  user: null,
  setUser: () => {},
});

const App = () => {
  const [user, setUser] = useState<UserType>(null); // { email, role, profilePic }
  return (
    <UserContext.Provider value={{ user, setUser }}>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<><Header /><ServicesSection id="services" /><Footer /></>} />
              <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
    </UserContext.Provider>
);
};

export default App;
