import { Search, Calendar, FileText, Rocket, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Process = () => {
  const navigate = useNavigate();
  
  const steps = [
    {
      icon: Search,
      step: "01",
      title: "Choose a Service",
      description: "Pick a service from our comprehensive catalog that best fits your project needs and business goals.",
      color: "text-red-400",
      bgColor: "bg-red-500/10",
    },
    {
      icon: Calendar,
      step: "02", 
      title: "Request a Meeting",
      description: "Schedule a consultation meeting for better understanding of your requirements and project scope.",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: FileText,
      step: "03",
      title: "Receive Custom Plan",
      description: "Get a detailed custom plan tailored to your specific requirements, timeline, and budget.",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Rocket,
      step: "04",
      title: "We Make it Happen!",
      description: "Our expert team delivers highly reliable, client-oriented solutions that exceed expectations.",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
    },
  ];

  return (
    <section id="process" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Work <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A streamlined approach to delivering exceptional results, from initial consultation to final delivery
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent transform translate-x-4 z-0" />
              )}
              
              {/* Card */}
              <div className="glass-card p-8 rounded-2xl border-border/50 hover:border-primary/30 glow-on-hover relative z-10 text-center h-full">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg mb-4 group-hover:scale-110 spring-transition">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 ${step.bgColor} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 spring-transition`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary smooth-transition">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="glass-card p-8 rounded-2xl border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your <span className="gradient-text">Project</span>?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can bring your vision to life with our proven process and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;