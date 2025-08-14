import { CheckCircle, Users, Target, Lightbulb, Heart, Target as TargetIcon, Star } from "lucide-react";

interface AboutProps {
  id?: string;
}

const About = ({ id }: AboutProps) => {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced developers and designers passionate about technology",
    },
    {
      icon: Target,
      title: "Client-Focused",
      description: "We prioritize your goals and deliver solutions that exceed expectations",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "Cutting-edge technology combined with creative problem-solving",
    },
  ];

  const values = [
    "Honesty",
    "Accountability", 
    "Wisdom",
    "Innovation",
    "Integrity"
  ];

  return (
    <section id={id || "about"} className="py-20 relative pt-32">
      {/* Background Elements */}
      <div className="absolute top-20 left-5 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 right-5 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-4">
        {/* Who We Are Section - Back at Top */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who <span className="gradient-text">We Are</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Hawi Software Solutions (HSS) is an emerging software firm located in Adama, Ethiopia producing quality software for its clients. 
            It is established to steer customers through the next generation of business innovation powered by technology with state-of-the-art 
            business automation, software development and consultation services.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mt-4">
            HSS is powered by highly skilled professionals and developers, and equipped with the latest managerial and IT tools and works 
            round-the-clock to assure the timely delivery of your applications with the highest quality.
          </p>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <div className="glass-card p-8 rounded-2xl border-border/50 hover:border-primary/30 group glow-on-hover animate-fade-in-up">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 spring-transition">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary smooth-transition">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                It's through our commitment and passion to our clients that we develop software to face real-world challenges. 
                It's our love for and dedication to what we do that enables us to become a better company for ourselves, 
                our clients, our community and the world.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="glass-card p-8 rounded-2xl border-border/50 hover:border-primary/30 group glow-on-hover animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 spring-transition">
                <TargetIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary smooth-transition">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our vision is to become a world-class software development and technology provider company and to offer 
                client-oriented solutions that are highly reliable.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="glass-card p-8 rounded-2xl border-border/50 hover:border-primary/30 group glow-on-hover animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 spring-transition">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary smooth-transition">Values</h3>
              <div className="space-y-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center justify-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Features</span>
            </h3>
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature.title}: {feature.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 rounded-2xl border-border/50 hover:border-primary/30 group glow-on-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 spring-transition">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary smooth-transition">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Company Logo Placeholder */}
            <div className="mt-8 p-8 glass-card rounded-2xl text-center border-border/50">
              <img 
                src="https://www.hawisoftware.com/wp-content/uploads/elementor/thumbs/cropped-logohawi-2-pcfbk6ai9qzrfkcdr3jdhf52biqlr9k6bd27gv33s8.png"
                alt="Hawi Software"
                className="h-16 w-auto mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Hawi Software Solutions</h3>
              <p className="text-muted-foreground">Making Better Future</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;