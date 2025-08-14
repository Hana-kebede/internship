import { ArrowRight, Sparkles, Play, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-bg.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Hero = ({ id }: { id?: string }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      
      // Define searchable content and their corresponding routes with better matching
      const searchableContent = [
        { keywords: ['web development', 'website', 'web app', 'web application', 'frontend', 'backend'], route: '/services/web-development' },
        { keywords: ['ui ux design', 'ui/ux', 'design', 'user interface', 'user experience', 'ux design', 'ui design'], route: '/services/ui-ux-design' },
        { keywords: ['software development', 'custom software', 'application development', 'software solution'], route: '/services/software-development' },
        { keywords: ['software consultancy', 'consultancy', 'consulting', 'it consulting', 'technology consulting'], route: '/services/software-consultancy' },
        { keywords: ['mobile development', 'mobile app', 'android', 'ios', 'react native', 'flutter'], route: '/services/mobile-development' },
        { keywords: ['ecommerce', 'e-commerce', 'online store', 'shopping cart', 'payment gateway'], route: '/services/ecommerce' },
        { keywords: ['quality assurance', 'testing', 'qa', 'test automation', 'manual testing'], route: '/services/quality-assurance' },
        { keywords: ['about', 'about us', 'who we are', 'company'], route: '/about' },
        { keywords: ['contact', 'contact us', 'get in touch', 'reach us'], route: '/contact' },
        { keywords: ['home', 'main page', 'landing'], route: '/' },
        { keywords: ['services', 'our services', 'what we do'], route: '/services/ui-ux-design' }
      ];

      // Find matching route with better logic
      const matchedRoute = searchableContent.find(item => 
        item.keywords.some(keyword => query.includes(keyword))
      );

      if (matchedRoute) {
        navigate(matchedRoute.route);
      } else {
        // If no specific match, show a simple alert and navigate to services
        alert(`Searching for: "${searchQuery}" - Redirecting to our services page.`);
        navigate('/services/ui-ux-design');
      }
    }
  };

  return (
    <section id={id} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 mt-24 pb-40">
      {/* Animated background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/10 morphing-blob"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-accent/10 morphing-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/5 morphing-blob animation-delay-4000"></div>
      </div>

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-scroll opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 container mx-auto px-4 text-center pt-20 mt-0 mb-24">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card mb-8 border border-primary/20 -mt-8">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Leading Software Solutions in Ethiopia</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="gradient-text text-shimmer">Hawi Software</span>
            <br />
            <span className="text-foreground">Solutions</span>
          </h1>
          
          {/* Subtitle moved further down */}
          <div className="text-xl md:text-2xl lg:text-3xl mb-32 font-medium">
            <span className="text-foreground">Making Better Future Through </span>
            <span className="gradient-text animate-pulse">Innovation</span>
            <span className="text-primary animate-bounce inline-block ml-2">✨</span>
          </div>

          {/* Search Field */}
          <div className="max-w-2xl mx-auto mb-16">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary w-6 h-6 z-10" />
                <Input
                  type="text"
                  placeholder="Search for services, solutions, or technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg bg-background/90 backdrop-blur-sm border-primary/30 focus:border-primary/70 focus:ring-2 focus:ring-primary/20 rounded-2xl h-16 shadow-lg hover:shadow-xl transition-all duration-300"
                />
                <Button 
                  type="submit" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 h-12 hero-glow hover:scale-105 transition-transform"
                  disabled={!searchQuery.trim()}
                >
                  Search
                </Button>
              </div>
            </form>

          </div>
          
          {/* Enhanced Stats - removed 5+ Years Experience */}
          <div className="grid grid-cols-2 gap-8 max-w-xl mx-auto mb-16">
            {[
              { number: "100+", label: "Projects Completed", icon: "🚀" },
              { number: "50+", label: "Happy Clients", icon: "😊" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-slide-in-up glass-card p-6 rounded-xl hover:scale-105 transition-transform" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;