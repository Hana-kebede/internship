import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Palette, 
  Code2, 
  Settings, 
  Smartphone,
  ArrowRight,
  Zap,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ServiceModal from "./ServiceModal";

const Services = ({ id }: { id?: string }) => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLearnMore = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const services = [
    {
      icon: Palette,
      title: "Brand Identity Development",
      description: "Creating compelling brand identities that resonate with your target audience and stand out in the marketplace.",
      detailedDescription: "Our comprehensive brand identity development service creates a cohesive visual language that tells your story and connects with your audience. We combine strategic thinking with creative excellence to build brands that stand the test of time and drive business growth.",
      features: ["Logo Design & Variations", "Brand Guidelines & Standards", "Visual Identity System", "Marketing Material Design", "Business Card & Stationery", "Digital Asset Creation"],
      benefits: ["Increased Brand Recognition", "Professional Market Presence", "Consistent Brand Experience", "Competitive Advantage", "Enhanced Customer Trust", "Scalable Brand Assets"],
      price: "Starting at $1,500",
      duration: "2-4 weeks",
      technologies: ["Adobe Creative Suite", "Figma", "Sketch", "InVision", "Canva Pro"],
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      popular: false
    },
    {
      icon: Code2,
      title: "Web Design & Development",
      description: "Building responsive, fast, and user-friendly websites that convert visitors into customers.",
      detailedDescription: "We create modern, responsive websites that not only look stunning but also perform exceptionally well. Our development process focuses on user experience, performance optimization, and scalability to ensure your website grows with your business and delivers measurable results.",
      features: ["Responsive Web Design", "E-commerce Solutions", "CMS Integration", "SEO Optimization", "Performance Optimization", "Security Implementation"],
      benefits: ["Increased Online Visibility", "Higher Conversion Rates", "Mobile-First Experience", "Fast Loading Times", "Search Engine Friendly", "Easy Content Management"],
      price: "Starting at $2,500",
      duration: "3-6 weeks",
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "WordPress", "Shopify"],
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      popular: true
    },
    {
      icon: Settings,
      title: "Custom Software Development",
      description: "Developing tailored software solutions that streamline your business processes and boost productivity.",
      detailedDescription: "Our custom software development service transforms your unique business requirements into powerful, scalable solutions. We build software that automates processes, improves efficiency, and gives you a competitive edge in your industry.",
      features: ["Custom Web Applications", "API Development & Integration", "Database Design & Optimization", "System Integration", "Cloud Solutions", "Maintenance & Support"],
      benefits: ["Automated Business Processes", "Improved Efficiency", "Reduced Operational Costs", "Scalable Architecture", "Data-Driven Insights", "Competitive Advantage"],
      price: "Starting at $5,000",
      duration: "6-12 weeks",
      technologies: ["Python", "JavaScript", "React", "Node.js", "PostgreSQL", "AWS"],
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      popular: false
    },
    {
      icon: Smartphone,
      title: "Mobile Application Development",
      description: "Creating intuitive mobile apps for iOS and Android that engage users and drive business growth.",
      detailedDescription: "We develop high-performance mobile applications that provide exceptional user experiences across iOS and Android platforms. Our apps are designed to engage users, drive business growth, and leverage the latest mobile technologies for optimal performance.",
      features: ["Native iOS & Android Apps", "Cross-platform Development", "UI/UX Design", "App Store Publishing", "Push Notifications", "Analytics Integration"],
      benefits: ["Wider Market Reach", "Enhanced User Engagement", "Offline Functionality", "Push Notification Marketing", "App Store Visibility", "Mobile-First Customer Experience"],
      price: "Starting at $8,000",
      duration: "8-16 weeks",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux"],
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      popular: false
    },
    {
      icon: Settings,
      title: "Software Consultancy",
      description: "Expert advice and guidance to help you make the right technology decisions for your business.",
      detailedDescription: "Our software consultancy service provides strategic guidance, technology assessments, and solution recommendations to ensure your business leverages the best software practices and tools for growth.",
      features: ["Technology Assessment", "Solution Architecture", "Process Optimization", "Digital Transformation", "Vendor Selection", "IT Strategy"],
      benefits: ["Informed Decision Making", "Reduced Risk", "Optimized IT Spend", "Faster Time to Market", "Future-Proof Solutions", "Expert Guidance"],
      price: "Contact for Quote",
      duration: "Flexible",
      technologies: ["All Major Platforms"],
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      popular: false
    },
    {
      icon: Code2,
      title: "Ecommerce",
      description: "End-to-end ecommerce solutions to help you sell online and grow your business.",
      detailedDescription: "We build robust, scalable ecommerce platforms tailored to your business needs, including storefront design, payment integration, inventory management, and analytics.",
      features: ["Custom Storefronts", "Payment Integration", "Inventory Management", "Order Processing", "Analytics & Reporting", "Mobile Commerce"],
      benefits: ["Increased Sales", "Seamless Shopping Experience", "Secure Transactions", "Easy Management", "Scalable Growth", "Mobile Ready"],
      price: "Starting at $3,000",
      duration: "4-8 weeks",
      technologies: ["Shopify", "WooCommerce", "Magento", "React", "Node.js"],
      color: "text-pink-400",
      bgColor: "bg-pink-500/10",
      popular: false
    },
    {
      icon: Star,
      title: "Quality assurance and testing",
      description: "Comprehensive QA and testing services to ensure your software is reliable and bug-free.",
      detailedDescription: "Our QA and testing services cover manual and automated testing, performance analysis, and security audits to deliver high-quality, reliable software.",
      features: ["Manual Testing", "Automated Testing", "Performance Testing", "Security Audits", "Bug Tracking", "Continuous Integration"],
      benefits: ["Fewer Bugs", "Improved Reliability", "Better User Experience", "Faster Releases", "Reduced Costs", "Peace of Mind"],
      price: "Contact for Quote",
      duration: "Flexible",
      technologies: ["Selenium", "Jest", "Cypress", "Postman", "JMeter"],
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      popular: false
    },
  ];

  return (
    <section id={id} className="py-20 relative overflow-hidden mt-24">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-10 w-80 h-80 bg-primary/5 morphing-blob"></div>
        <div className="absolute bottom-20 -right-10 w-96 h-96 bg-accent/5 morphing-blob animation-delay-3000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/3 morphing-blob animation-delay-1500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-6 px-6 py-3 bg-primary/10 text-primary border-primary/20 text-base">
            <Zap className="w-5 h-5 mr-2 animate-pulse" />
            Our Expertise
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Our <span className="gradient-text text-shimmer">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions to help your business thrive in the modern world. 
            From brand identity to cutting-edge software development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              id={
                service.title === 'Brand Identity Development' ? 'brand-identity' :
                service.title === 'Web Design & Development' ? 'web-development' :
                service.title === 'Custom Software Development' ? 'software-development' :
                service.title === 'Mobile Application Development' ? 'mobile-development' :
                service.title === 'Software Consultancy' ? 'software-consultancy' :
                service.title === 'Ecommerce' ? 'ecommerce' :
                service.title === 'Quality assurance and testing' ? 'quality-assurance' :
                undefined
              }
              className={`glass-card border-border/50 hover:border-primary/30 group glow-on-hover animate-slide-in-up relative overflow-hidden ${
                service.popular ? 'ring-2 ring-primary/30' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 z-20">
                  <Badge className="bg-primary text-primary-foreground flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-6 relative">
                {/* Gradient overlay for popular services */}
                {service.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-t-lg"></div>
                )}
                
                <div className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 spring-transition relative z-10`}>
                  <service.icon className={`w-10 h-10 ${service.color} group-hover:animate-pulse`} />
                </div>
                <CardTitle className="text-2xl mb-3 group-hover:text-primary smooth-transition relative z-10">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed text-base relative z-10">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm bg-muted/20 px-3 py-2 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group glass-card border-border/50 hover:border-primary/50 hover:bg-primary/5 py-6"
                  onClick={() => handleLearnMore(service)}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Card className="glass-card max-w-3xl mx-auto border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">Custom Solutions Available</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                We specialize in creating bespoke software solutions tailored to your unique business needs. 
                Let's discuss how we can bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="hero-glow px-8 py-4">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 glass-card">
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Services;