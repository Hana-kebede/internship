import { Building2, GraduationCap, Users, Globe } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      icon: Building2,
      name: "Chamber of Commerce",
      description: "Business Development Partnership",
      category: "Business"
    },
    {
      icon: GraduationCap, 
      name: "Kamara School",
      description: "Educational Technology Solutions",
      category: "Education"
    },
    {
      icon: Users,
      name: "Enterprise Solutions",
      description: "Corporate Software Development",
      category: "Enterprise"
    },
    {
      icon: Globe,
      name: "Global Partners",
      description: "International Collaborations",
      category: "Global"
    },
  ];

  return (
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Collaborating with industry leaders and organizations to deliver exceptional results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-2xl border-border/50 hover:border-primary/30 group glow-on-hover text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 spring-transition">
                <partner.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary smooth-transition">
                {partner.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {partner.description}
              </p>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                {partner.category}
              </span>
            </div>
          ))}
        </div>
        
        {/* Social Media Section */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="glass-card p-8 rounded-2xl border-border/50 max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Follow <span className="gradient-text">Our Journey</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Stay updated with our latest projects and insights
            </p>
            <a
              href="https://www.facebook.com/hawisoftware/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold smooth-transition glow-on-hover"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Follow on Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;