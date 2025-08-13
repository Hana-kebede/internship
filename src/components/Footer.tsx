import { Heart, Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      "Brand Identity Development",
      "Web Design & Development", 
      "Custom Software Development",
      "Mobile App Development"
    ],
    company: [
      "About Us",
      "Our Team",
      "Careers",
      "Contact"
    ],
    resources: [
      "Blog",
      "Case Studies",
      "FAQ",
      "Support"
    ]
  };

  const contactInfo = [
    { icon: Mail, text: "hello@hawisoftware.com", href: "mailto:hello@hawisoftware.com" },
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, text: "Your City, Country", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/hawisoftware/", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="relative bg-background border-t border-border/50">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground text-xl">
                H
              </div>
              <span className="text-xl font-bold">Hawi Software</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transforming ideas into powerful digital solutions with cutting-edge technology and innovative design.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-card border-border/50 hover:border-primary/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary smooth-transition"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-muted-foreground hover:text-primary smooth-transition">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-muted-foreground hover:text-primary smooth-transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a 
                    href={contact.href}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary smooth-transition group"
                  >
                    <contact.icon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 spring-transition" />
                    <span className="text-sm">{contact.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <span>© {currentYear} Hawi Software Solutions. Made with</span>
              <Heart className="w-4 h-4 text-primary" />
              <span>for a better future.</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary smooth-transition">Privacy Policy</a>
              <a href="#" className="hover:text-primary smooth-transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;