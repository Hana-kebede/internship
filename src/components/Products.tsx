import { ExternalLink, Github, Zap, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const products = [
    {
      title: "HawiCRM",
      description: "Complete customer relationship management solution for small to medium businesses",
      features: ["Lead Management", "Sales Pipeline", "Customer Analytics", "Email Integration"],
      status: "Live",
      category: "CRM Software",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "HawiPOS",
      description: "Modern point of sale system for retail businesses with inventory management",
      features: ["Inventory Tracking", "Sales Reports", "Multi-Payment", "Cloud Sync"],
      status: "Coming Soon",
      category: "Retail Software",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "HawiEdu",
      description: "Learning management system for educational institutions and online courses",
      features: ["Course Management", "Student Portal", "Assessment Tools", "Progress Tracking"],
      status: "Development",
      category: "Education Software",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "HawiFinance",
      description: "Personal finance management app with budgeting and expense tracking",
      features: ["Budget Planning", "Expense Tracking", "Financial Goals", "Reports"],
      status: "Beta",
      category: "Finance App",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-500/10 text-green-400 border-green-500/20";
      case "Beta": return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "Development": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Coming Soon": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      default: return "bg-muted/10 text-muted-foreground border-border/20";
    }
  };

  const navigate = useNavigate();

  return (
    <section id="products" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 morphing-blob"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/5 morphing-blob animation-delay-3000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/3 morphing-blob animation-delay-1500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-6 px-6 py-3 bg-primary/10 text-primary border-primary/20 text-base">
            <Zap className="w-5 h-5 mr-2 animate-pulse" />
            Our Products
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Software <span className="gradient-text text-shimmer">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our range of innovative software products designed to streamline your business 
            operations and enhance productivity across various industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="glass-card border-border/50 hover:border-primary/30 group glow-on-hover animate-slide-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 spring-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className={`${getStatusColor(product.status)} border`}>
                    {product.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-muted/80 backdrop-blur-sm">
                    {product.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary smooth-transition">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm bg-muted/20 px-3 py-2 rounded-lg">
                      <Star className="w-3 h-3 text-primary fill-current" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Card className="glass-card max-w-2xl mx-auto border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Have a Custom Product Idea?
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                We can help you build custom software solutions tailored to your specific needs.
              </p>
              <Button size="lg" className="hero-glow" onClick={() => navigate('/login')}>
                Discuss Your Idea
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Products;