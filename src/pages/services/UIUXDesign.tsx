import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Palette, Eye, Smartphone, Monitor, Zap, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const UIUXDesign = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Eye,
      title: "User Research",
      description: "Comprehensive user research to understand your target audience and their needs"
    },
    {
      icon: Palette,
      title: "Visual Design",
      description: "Beautiful and modern visual designs that align with your brand identity"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Designs that work perfectly across all devices and screen sizes"
    },
    {
      icon: Monitor,
      title: "Prototyping",
      description: "Interactive prototypes to test and validate design concepts"
    },
    {
      icon: Zap,
      title: "User Testing",
      description: "Real user testing to ensure optimal user experience"
    },
    {
      icon: Users,
      title: "Design Systems",
      description: "Comprehensive design systems for consistent brand experience"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "Understanding your business goals, target users, and market requirements"
    },
    {
      step: "02", 
      title: "User Personas & Journey",
      description: "Creating detailed user personas and mapping user journeys"
    },
    {
      step: "03",
      title: "Wireframing",
      description: "Creating low-fidelity wireframes to establish layout and structure"
    },
    {
      step: "04",
      title: "Visual Design",
      description: "Developing high-fidelity designs with brand colors and typography"
    },
    {
      step: "05",
      title: "Prototyping",
      description: "Building interactive prototypes for user testing and validation"
    },
    {
      step: "06",
      title: "Handoff & Support",
      description: "Providing design assets and specifications for development"
    }
  ];

  const benefits = [
    "Improved user satisfaction and engagement",
    "Reduced development time and costs",
    "Higher conversion rates",
    "Better brand consistency",
    "Increased user retention",
    "Competitive advantage in the market"
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
                <Palette className="w-5 h-5 mr-2" />
                UI/UX Design Services
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                Create <span className="gradient-text">Exceptional</span> User Experiences
              </h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                We design intuitive, beautiful, and user-friendly interfaces that delight your users 
                and drive business growth. Our UI/UX design services combine creativity with data-driven 
                insights to create experiences that convert.
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
                Our <span className="gradient-text">UI/UX Design</span> Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive design services that cover every aspect of user experience and interface design
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

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Design Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A systematic approach to creating exceptional user experiences
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Why Choose Our <span className="gradient-text">UI/UX Design</span> Services?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Our design services deliver measurable results that impact your bottom line and user satisfaction.
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
                <h3 className="text-2xl font-bold mb-6">Ready to Transform Your User Experience?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how our UI/UX design services can help you create exceptional user experiences that drive results.
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

export default UIUXDesign;
