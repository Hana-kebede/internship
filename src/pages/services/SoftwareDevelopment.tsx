import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code, Database, Settings, Shield, Zap, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const SoftwareDevelopment = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Code,
      title: "Custom Software Solutions",
      description: "Tailored software applications designed specifically for your business needs"
    },
    {
      icon: Database,
      title: "Enterprise Software",
      description: "Scalable enterprise solutions for large organizations"
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Seamless integration with existing systems and workflows"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Secure software with industry-standard compliance and security measures"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "High-performance software optimized for speed and efficiency"
    },
    {
      icon: Users,
      title: "User Management",
      description: "Comprehensive user management and authentication systems"
    }
  ];

  const technologies = [
    {
      category: "Programming Languages",
      tech: ["Java", "C#", "Python", "JavaScript", "TypeScript", "Go", "Rust"]
    },
    {
      category: "Frameworks",
      tech: ["Spring Boot", ".NET", "Django", "Express.js", "FastAPI", "Gin"]
    },
    {
      category: "Databases",
      tech: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Cassandra"]
    },
    {
      category: "Cloud & DevOps",
      tech: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "Deep analysis of your business requirements and technical specifications"
    },
    {
      step: "02", 
      title: "Architecture Design",
      description: "Designing scalable and maintainable software architecture"
    },
    {
      step: "03",
      title: "Development",
      description: "Agile development process with regular updates and feedback"
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Comprehensive testing including unit, integration, and user acceptance testing"
    },
    {
      step: "05",
      title: "Deployment",
      description: "Production deployment with monitoring and logging setup"
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and maintenance services"
    }
  ];

  const benefits = [
    "Custom solutions tailored to your specific needs",
    "Scalable architecture for future growth",
    "Enhanced productivity and efficiency",
    "Reduced operational costs",
    "Competitive advantage through technology",
    "24/7 technical support and maintenance"
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
                <Code className="w-5 h-5 mr-2" />
                Custom Software Development
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                Build <span className="gradient-text">Custom</span> Software Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                We develop custom software solutions that streamline your business operations, 
                improve efficiency, and drive growth. From simple applications to complex 
                enterprise systems, we deliver solutions that work for your business.
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
                Our <span className="gradient-text">Software Development</span> Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive custom software development services for businesses of all sizes
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
                Modern <span className="gradient-text">Technologies</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We use cutting-edge technologies to build robust and scalable software solutions
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
                A systematic approach to delivering high-quality custom software solutions
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
                  Why Choose Our <span className="gradient-text">Software Development</span> Services?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Our custom software development services deliver solutions that transform your business operations and drive growth.
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
                <h3 className="text-2xl font-bold mb-6">Ready to Build Your Custom Software?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how our custom software development services can help you create solutions that drive your business forward.
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

export default SoftwareDevelopment;
