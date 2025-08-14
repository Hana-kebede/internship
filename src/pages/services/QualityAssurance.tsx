import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Bug, Shield, Zap, Users, BarChart3, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const QualityAssurance = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Bug,
      title: "Manual Testing",
      description: "Comprehensive manual testing across all devices and browsers"
    },
    {
      icon: Zap,
      title: "Automated Testing",
      description: "Automated test suites for faster and more reliable testing"
    },
    {
      icon: Shield,
      title: "Security Testing",
      description: "Penetration testing and security vulnerability assessment"
    },
    {
      icon: Users,
      title: "User Acceptance Testing",
      description: "End-to-end testing from user perspective"
    },
    {
      icon: BarChart3,
      title: "Performance Testing",
      description: "Load testing and performance optimization"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Comprehensive QA processes and best practices"
    }
  ];

  const tools = [
    {
      category: "Test Automation",
      tech: ["Selenium", "Cypress", "Playwright", "Jest", "TestNG", "Appium"]
    },
    {
      category: "Performance Testing",
      tech: ["JMeter", "LoadRunner", "K6", "Artillery", "Gatling", "BlazeMeter"]
    },
    {
      category: "Security Testing",
      tech: ["OWASP ZAP", "Burp Suite", "Nessus", "Acunetix", "Metasploit"]
    },
    {
      category: "Test Management",
      tech: ["Jira", "TestRail", "Zephyr", "qTest", "Xray", "Azure DevOps"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Test Planning",
      description: "Creating comprehensive test strategies and test plans"
    },
    {
      step: "02", 
      title: "Test Case Design",
      description: "Designing detailed test cases and test scenarios"
    },
    {
      step: "03",
      title: "Test Execution",
      description: "Executing manual and automated test cases"
    },
    {
      step: "04",
      title: "Bug Reporting",
      description: "Detailed bug reports with reproduction steps"
    },
    {
      step: "05",
      title: "Regression Testing",
      description: "Ensuring new changes don't break existing functionality"
    },
    {
      step: "06",
      title: "Test Closure",
      description: "Final testing report and quality assessment"
    }
  ];

  const benefits = [
    "Improved software quality and reliability",
    "Reduced production bugs and issues",
    "Faster time to market with confidence",
    "Enhanced user experience and satisfaction",
    "Cost savings through early bug detection",
    "Comprehensive test coverage and documentation"
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
                <Bug className="w-5 h-5 mr-2" />
                Quality Assurance & Testing
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                Ensure <span className="gradient-text">Quality</span> & Reliability
              </h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Our comprehensive quality assurance and testing services ensure your software 
                meets the highest standards of quality, performance, and reliability. 
                From manual testing to automated solutions, we deliver bug-free software.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="hero-glow px-8 py-6 text-lg" onClick={() => navigate('/contact')}>
                  Get Started
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
                Our <span className="gradient-text">QA & Testing</span> Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive testing services to ensure software quality and reliability
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

        {/* Tools Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Testing <span className="gradient-text">Tools & Technologies</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We use industry-leading testing tools and technologies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tools.map((category, index) => (
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
                Our <span className="gradient-text">Testing Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A systematic approach to ensuring software quality and reliability
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
                  Why Choose Our <span className="gradient-text">QA & Testing</span> Services?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Our quality assurance and testing services help you deliver reliable, high-quality software that meets user expectations.
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
                <h3 className="text-2xl font-bold mb-6">Ready to Ensure Software Quality?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how our QA and testing services can help you deliver high-quality software that exceeds expectations.
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

export default QualityAssurance;
