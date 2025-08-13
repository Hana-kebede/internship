import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Ahmed Hassan",
      company: "TechStart Solutions",
      position: "CEO",
      content: "Hawi Software delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and professional approach made the entire process smooth. Our online sales increased by 300% within the first month!",
      rating: 5,
      service: "Web Development",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sarah Miller",
      company: "Creative Agency Pro",
      position: "Marketing Director",
      content: "The mobile app they developed for us is simply outstanding. The user interface is intuitive, and the performance is flawless. Our client engagement has improved significantly since launching the app.",
      rating: 5,
      service: "Mobile Development",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      company: "DataFlow Systems",
      position: "CTO",
      content: "Their custom software solution automated our entire workflow and reduced operational costs by 40%. The team's technical expertise and problem-solving skills are remarkable. Highly recommended!",
      rating: 5,
      service: "Custom Software",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      company: "Fashion Forward",
      position: "Founder",
      content: "The brand identity they created for us perfectly captures our vision. From logo design to complete visual guidelines, everything is professionally crafted. Our brand recognition has increased tremendously.",
      rating: 5,
      service: "Brand Identity",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      company: "Local Restaurant Chain",
      position: "Owner",
      content: "Their POS system has revolutionized our restaurant operations. Order management is now seamless, and the analytics help us make better business decisions. Customer satisfaction has improved significantly.",
      rating: 5,
      service: "POS System",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Lisa Park",
      company: "EduTech Academy",
      position: "Principal",
      content: "The learning management system they built for our school is exactly what we needed. Teachers and students find it easy to use, and the features support our educational goals perfectly.",
      rating: 5,
      service: "Education Software",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const overallStats = [
    { label: "Total Projects", value: "50+" },
    { label: "Happy Clients", value: "25+" },
    { label: "Average Rating", value: "4.9★" },
    { label: "Success Rate", value: "100%" }
  ];

  return (
    <section id="reviews" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/5 morphing-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 morphing-blob animation-delay-3000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 mt-24">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-6 px-6 py-3 bg-primary/10 text-primary border-primary/20 text-base">
            <Star className="w-5 h-5 mr-2 animate-pulse" />
            Customer Reviews
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            What Our <span className="gradient-text text-shimmer">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about 
            their experience working with Hawi Software Solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {overallStats.map((stat, index) => (
            <Card key={index} className="glass-card text-center border-border/50 hover:border-primary/30 glow-on-hover">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Review Carousel */}
        <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Card className="glass-card border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <Quote className="w-12 h-12 text-primary/30" />
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={prevReview}
                    className="rounded-full hover:bg-primary/10"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={nextReview}
                    className="rounded-full hover:bg-primary/10"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < reviews[currentReview].rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`} 
                    />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground mb-8">
                  "{reviews[currentReview].content}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <img
                    src={reviews[currentReview].avatar}
                    alt={reviews[currentReview].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <div className="font-semibold text-lg">{reviews[currentReview].name}</div>
                    <div className="text-muted-foreground">
                      {reviews[currentReview].position} at {reviews[currentReview].company}
                    </div>
                    <Badge variant="secondary" className="mt-1 bg-primary/10 text-primary">
                      {reviews[currentReview].service}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Pagination dots */}
              <div className="flex justify-center gap-2 mt-8">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentReview ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* All Reviews Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {reviews.slice(0, 6).map((review, index) => (
            <Card key={index} className="glass-card border-border/50 hover:border-primary/30 glow-on-hover">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`} 
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  "{review.content.substring(0, 120)}..."
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-sm">{review.name}</div>
                    <div className="text-xs text-muted-foreground">{review.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;