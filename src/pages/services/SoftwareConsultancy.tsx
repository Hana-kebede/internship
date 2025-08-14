import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Lightbulb, Users, Target, BarChart3, Shield, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const SoftwareConsultancy = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Lightbulb,
      title: "Technology Strategy",
      description: "Strategic technology planning and roadmap development for your business"
    },
    {
      icon: Users,
      title: "Team Augmentation",
      description: "Expert developers and consultants to augment your existing team"
    },
    {
      icon: Target,
      title: "Architecture Review",
      description: "Comprehensive review and optimization of your software architecture"
    },
    {
      icon: BarChart3,
      title: "Performance Analysis",
      description: "In-depth analysis and optimization of application performance"
    },
    {
      icon: Shield,
      title: "Security Assessment",
      description: "Security audits and recommendations for your software systems"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Guidance through digital transformation initiatives"
    }
  ];

  const expertise = [
    {
      category: "Technology Stack",
      items: ["Cloud Architecture", "Microservices", "DevOps", "CI/CD", "Containerization", "API Design"]
    },
    {
      category: "Business Analysis",
      items: ["Requirements Gathering", "Process Optimization", "Workflow Design", "Data Analysis", "ROI Assessment"]
    },
    {
      category: "Project Management",
      items: ["Agile Methodologies", "Scrum Master", "Project Planning", "Risk Management", "Quality Assurance"]
    },
    {
      category: "Industry Expertise",
      items: ["E-commerce", "Healthcare", "Finance", "Education", "Manufacturing", "Logistics"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "Comprehensive analysis of your current technology landscape and business needs"
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Creating a tailored technology strategy aligned with your business goals"
    },
    {
      step: "03",
      title: "Implementation Planning",
      description: "Detailed planning for implementing recommended solutions and improvements"
    },
    {
      step: "04",
      title: "Execution Support",
      description: "Ongoing support and guidance during implementation phase"
    },
    {
      step: "05",
      title: "Monitoring & Optimization",
      description: "Continuous monitoring and optimization of implemented solutions"
    },
    {
      step: "06",
      title: "Knowledge Transfer",
      description: "Training and knowledge transfer to your internal teams"
    }
  ];

  const benefits = [
    "Expert guidance from experienced consultants",
    "Cost-effective technology solutions",
    "Reduced project risks and failures",
    "Improved team productivity and efficiency",
    "Access to latest industry best practices",
    "Long-term strategic technology planning"
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
                <Lightbulb className="w-5 h-5 mr-2" />
                Software Consultancy Services
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                Expert <span className="gradient-text">Technology</span> Guidance
              </h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Our expert consultants provide strategic guidance to help you make informed 
                technology decisions, optimize your software systems, and achieve your business 
                objectives through technology innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="hero-glow px-8 py-6 text-lg" onClick={() => navigate('/contact')}>
                  Get Consultation
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg" onClick={() => navigate('/')}>
                  View All Services
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Consultancy</span> Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive software consultancy services to drive your technology success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="glass-card border-border/50 hover:border-primary/30 group glow-on-hover animate-fade-in-up">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 spring-transition">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary smooth-transition">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Areas of <span className="gradient-text">Expertise</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our consultants bring deep expertise across various technology domains
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {expertise.map((category, index) => (
                <Card key={index} className="glass-card border-border/50 hover:border-primary/30 group glow-on-hover animate-fade-in-up">
                  <CardHeader>
                    <CardTitle className="text-xl text-center group-hover:text-primary smooth-transition">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="text-sm text-muted-foreground text-center">
                          {item}
                        </div>
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
                Our <span className="gradient-text">Consultancy Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A structured approach to delivering expert technology guidance
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
                  Why Choose Our <span className="gradient-text">Consultancy</span> Services?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Our consultancy services provide expert guidance to help you make the right technology decisions and achieve your business goals.
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
                <h3 className="text-2xl font-bold mb-6">Ready for Expert Technology Guidance?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how our consultancy services can help you optimize your technology strategy and achieve your business objectives.
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

export default SoftwareConsultancy;
