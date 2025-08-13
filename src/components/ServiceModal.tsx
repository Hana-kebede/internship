import { X, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface ServiceModalProps {
  service: {
    title: string;
    description: string;
    detailedDescription: string;
    features: string[];
    benefits: string[];
    price: string;
    duration: string;
    technologies: string[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal = ({ service, isOpen, onClose }: ServiceModalProps) => {
  const navigate = useNavigate();
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl border-border/50">
        <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border/50 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">{service.title}</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="rounded-full hover:bg-destructive/10"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6 space-y-8">
          {/* Overview */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              Service Overview
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {service.detailedDescription}
            </p>
          </div>

          {/* Features & Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold mb-4">What's Included</h3>
              <div className="space-y-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <div className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Technologies We Use</h3>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-4 mt-8 justify-end">
            <button className="btn btn-primary" onClick={() => navigate('/login')}>Get Started Now</button>
            <button className="btn btn-outline" onClick={() => navigate('/signup')}>Request Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;