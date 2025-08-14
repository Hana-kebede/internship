import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingCart, CreditCard, Truck, Shield, BarChart3, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Ecommerce = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: ShoppingCart,
      title: "E-commerce Platforms",
      description: "Custom e-commerce solutions built with modern technologies"
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description: "Secure payment gateways and multiple payment options"
    },
    {
      icon: Truck,
      title: "Inventory Management",
      description: "Comprehensive inventory and order management systems"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "PCI DSS compliant secure e-commerce solutions"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Advanced analytics and business intelligence tools"
    },
    {
      icon: Users,
      title: "Customer Management",
      description: "Customer relationship management and loyalty programs"
    }
  ];

  const platforms = [
    {
      category: "Custom Development",
      tech: ["React", "Vue.js", "Node.js", "Python", "PHP", "Laravel"]
    },
    {
      category: "E-commerce Platforms",
      tech: ["Shopify", "WooCommerce", "Magento", "OpenCart", "PrestaShop"]
    },
    {
      category: "Payment Gateways",
      tech: ["Stripe", "PayPal", "Square", "Authorize.net", "2Checkout"]
    },
    {
      category: "Analytics & Marketing",
      tech: ["Google Analytics", "Facebook Pixel", "Google Ads", "Email Marketing"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Business Analysis",
      description: "Understanding your business model and e-commerce requirements"
    },
    {
      step: "02", 
      title: "Platform Selection",
      description: "Choosing the right e-commerce platform for your business"
    },
    {
      step: "03",
      title: "Design & Development",
      description: "Creating a beautiful and functional e-commerce website"
    },
    {
      step: "04",
      title: "Payment Integration",
      description: "Integrating secure payment gateways and systems"
    },
    {
      step: "05",
      title: "Testing & Launch",
      description: "Comprehensive testing and launching your e-commerce store"
    },
    {
      step: "06",
      title: "Support & Optimization",
      description: "Ongoing support, maintenance, and performance optimization"
    }
  ];

  const benefits = [
    "Custom e-commerce solutions tailored to your business",
    "Secure payment processing and PCI compliance",
    "Mobile-responsive design for all devices",
    "Advanced inventory and order management",
    "SEO optimization for better visibility",
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
                <ShoppingCart className="w-5 h-5 mr-2" />
                E-commerce Development
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                Build Your <span className="gradient-text">Online Store</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                We create powerful e-commerce solutions that drive sales and grow your business. 
                From custom online stores to marketplace platforms, we deliver secure, 
                scalable, and user-friendly e-commerce experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="hero-glow px-8 py-6 text-lg" onClick={() => navigate('/contact')}>
                  Start Your Store
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
                Our <span className="gradient-text">E-commerce</span> Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive e-commerce development services for online businesses
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

        {/* Platforms Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                E-commerce <span className="gradient-text">Technologies</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We work with leading e-commerce technologies and platforms
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {platforms.map((category, index) => (
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
                A systematic approach to building successful e-commerce solutions
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
                  Why Choose Our <span className="gradient-text">E-commerce</span> Services?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Our e-commerce development services help you build successful online businesses that drive sales and growth.
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
                <h3 className="text-2xl font-bold mb-6">Ready to Build Your Online Store?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how our e-commerce development services can help you create a successful online business.
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

export default Ecommerce;
