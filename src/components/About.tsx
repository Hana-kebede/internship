import { CheckCircle, Users, Target, Lightbulb } from "lucide-react";

const About = () => {
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

  const achievements = [
    "50+ Successful Projects Delivered",
    "25+ Satisfied Clients Worldwide", 
    "5+ Years of Industry Experience",
    "100% Client Satisfaction Rate",
    "Expert Team of Developers",
    "24/7 Technical Support",
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-20 left-5 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 right-5 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Who <span className="gradient-text">We Are</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Hawi Software Solutions is a leading software development company dedicated to making a better future 
              through innovative technology. We specialize in brand identity development, web design and development, 
              custom software solutions, and mobile application development. Our mission is to help businesses 
              transform their ideas into powerful digital solutions that drive growth and success.
            </p>
            
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
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
              <div className="w-24 h-24 bg-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary-foreground">H</span>
              </div>
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