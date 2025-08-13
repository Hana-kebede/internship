import { ArrowRight, Sparkles, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import { useNavigate } from "react-router-dom";

const Hero = ({ id }: { id?: string }) => {
  const navigate = useNavigate();

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
            <div className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mt-4 font-normal">
              Making Better Future Through Innovation
            </div>
          </h1>
          
          {/* Subtitle */}
          
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="group hero-glow glow-on-hover px-10 py-6 text-lg relative overflow-hidden"
              onClick={() => navigate('/login')}
            >
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-10 py-6 text-lg glass-card border-border/50 hover:border-primary/50 group"
              onClick={() => navigate('/contact')}
            >
              <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
              Schedule Consultation
            </Button>
          </div>
          
          {/* Enhanced Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { number: "100+", label: "Projects Completed", icon: "🚀" },
              { number: "50+", label: "Happy Clients", icon: "😊" },
              { number: "5+", label: "Years Experience", icon: "⭐" },
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

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground scroll-indicator">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-sm mb-3 font-medium">Explore Our Services</span>
          <div className="w-8 h-14 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
          <ChevronDown className="w-5 h-5 mt-2 text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;