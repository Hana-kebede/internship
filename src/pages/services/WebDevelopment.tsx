import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe, Code, Smartphone, Zap, Shield, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const WebDevelopment = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Globe,
      title: "Responsive Web Design",
      description: "Websites that work perfectly on all devices and screen sizes"
    },
    {
      icon: Code,
      title: "Custom Web Applications",
      description: "Tailored web applications built to meet your specific business needs"
    },
    {
      icon: Smartphone,
      title: "Progressive Web Apps",
      description: "Modern PWA development for enhanced user experience"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Fast-loading websites optimized for speed and efficiency"
    },
    {
      icon: Shield,
      title: "Security & SSL",
      description: "Secure websites with SSL certificates and best security practices"
    },
    {
      icon: Users,
      title: "CMS Development",
      description: "Content management systems for easy website maintenance"
    }
  ];

  const technologies = [
    {
      category: "Frontend",
      tech: ["React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      category: "Backend",
      tech: ["Node.js", "Python", "PHP", "Java", "C#", "Go"]
    },
    {
      category: "Databases",
      tech: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase"]
    },
    {
      category: "Cloud & DevOps",
      tech: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your requirements and creating a detailed project plan"
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "Creating wireframes and visual designs for your approval"
    },
    {
      step: "03",
      title: "Development",
      description: "Building your website using modern technologies and best practices"
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Thorough testing across all devices and browsers"
    },
    {
      step: "05",
      title: "Deployment",
      description: "Launching your website with proper hosting and domain setup"
    },
    {
      step: "06",
      title: "Maintenance",
      description: "Ongoing support, updates, and maintenance services"
    }
  ];

  const benefits = [
    "Professional and modern website design",
    "Mobile-responsive across all devices",
    "Fast loading times and SEO optimization",
    "Secure and scalable architecture",
    "Easy content management system",
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
                <Globe className="w-5 h-5 mr-2" />
                Web Development Services
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                Build <span className="gradient-text">Powerful</span> Web Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                We create modern, responsive, and high-performance websites and web applications 
                that drive business growth. From simple landing pages to complex web applications, 
                we deliver solutions that exceed expectations.
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
                Our <span className="gradient-text">Web Development</span> Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive web development services tailored to your business needs
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
                We use cutting-edge technologies to build robust and scalable web solutions
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
                A systematic approach to delivering high-quality web solutions
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
                  Why Choose Our <span className="gradient-text">Web Development</span> Services?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Our web development services deliver exceptional results that drive business growth and user engagement.
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
                <h3 className="text-2xl font-bold mb-6">Ready to Build Your Web Solution?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how our web development services can help you create a powerful online presence that drives results.
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

export default WebDevelopment;
