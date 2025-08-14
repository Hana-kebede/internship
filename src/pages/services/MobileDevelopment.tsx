import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Smartphone, Zap, Shield, Users, Globe, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const MobileDevelopment = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Smartphone,
      title: "Native iOS Development",
      description: "High-performance iOS apps built with Swift and SwiftUI"
    },
    {
      icon: Smartphone,
      title: "Native Android Development",
      description: "Robust Android apps developed with Kotlin and Jetpack Compose"
    },
    {
      icon: Globe,
      title: "Cross-Platform Development",
      description: "React Native and Flutter apps for both iOS and Android"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimized apps for speed, battery life, and user experience"
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Secure mobile apps with data protection and privacy compliance"
    },
    {
      icon: Users,
      title: "App Store Optimization",
      description: "ASO services to improve app visibility and downloads"
    }
  ];

  const technologies = [
    {
      category: "iOS Development",
      tech: ["Swift", "SwiftUI", "UIKit", "Core Data", "Xcode", "TestFlight"]
    },
    {
      category: "Android Development",
      tech: ["Kotlin", "Jetpack Compose", "Android SDK", "Room Database", "Android Studio"]
    },
    {
      category: "Cross-Platform",
      tech: ["React Native", "Flutter", "Xamarin", "Ionic", "Cordova"]
    },
    {
      category: "Backend & APIs",
      tech: ["Firebase", "AWS", "REST APIs", "GraphQL", "Push Notifications"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "Understanding your app requirements and target audience"
    },
    {
      step: "02", 
      title: "UI/UX Design",
      description: "Creating intuitive and engaging mobile app designs"
    },
    {
      step: "03",
      title: "Development",
      description: "Building your mobile app using modern technologies"
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Comprehensive testing across multiple devices and platforms"
    },
    {
      step: "05",
      title: "App Store Submission",
      description: "Preparing and submitting your app to app stores"
    },
    {
      step: "06",
      title: "Maintenance & Updates",
      description: "Ongoing support, updates, and feature enhancements"
    }
  ];

  const benefits = [
    "Native performance and user experience",
    "Cross-platform compatibility",
    "App store optimization and visibility",
    "Regular updates and maintenance",
    "Security and privacy compliance",
    "24/7 technical support"
  ];

  return (
    <>
      <Header />
      <div className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 px-6 py-3 bg-primary/10 text-primary border-primary/20 text-base">
                <Smartphone className="w-5 h-5 mr-2" />
                Mobile Application Development
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                Build <span className="gradient-text">Amazing</span> Mobile Apps
              </h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                We create innovative mobile applications that engage users and drive business growth. 
                From native iOS and Android apps to cross-platform solutions, we deliver 
                high-quality mobile experiences that users love.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="hero-glow px-8 py-6 text-lg" onClick={() => navigate('/contact')}>
                  Start Your Project
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg" onClick={() => navigate('/')}>
                  View All Services
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Mobile Development</span> Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive mobile app development services for all platforms
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="glass-card border-border/50 hover:border-primary/30 group glow-on-hover animate-fade-in-up">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 spring-transition">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary smooth-transition">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Mobile <span className="gradient-text">Technologies</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We use cutting-edge mobile technologies to build exceptional apps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((category, index) => (
                <Card key={index} className="glass-card border-border/50 hover:border-primary/30 group glow-on-hover animate-fade-in-up">
                  <CardHeader>
                    <CardTitle className="text-xl text-center group-hover:text-primary smooth-transition">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Development Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A systematic approach to delivering high-quality mobile applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <Card key={index} className="glass-card border-border/50 hover:border-primary/30 group glow-on-hover animate-fade-in-up">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                        {step.step}
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary smooth-transition">
                        {step.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Why Choose Our <span className="gradient-text">Mobile Development</span> Services?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Our mobile development services deliver exceptional apps that engage users and drive business growth.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 animate-fade-in-up">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass-card p-8 rounded-2xl border-border/50">
                <h3 className="text-2xl font-bold mb-6">Ready to Build Your Mobile App?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how our mobile development services can help you create an amazing app that users love.
                </p>
                <Button size="lg" className="w-full hero-glow" onClick={() => navigate('/contact')}>
                  Get Started Today
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default MobileDevelopment;
