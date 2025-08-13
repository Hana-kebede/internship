import { useState, useContext } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserContext } from "@/App";

const Header = () => {
  const { user } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Navigation items now link to dedicated pages
  const navItems = [
    { label: "Home", href: "/home" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  // In Services dropdown, clicking any item or the dropdown itself should navigate to /services
  const serviceItems = [
    { label: "Brand Identity Development", href: "/services#brand-identity" },
    { label: "Web Design & Development", href: "/services#web-development" },
    { label: "Custom Software Development", href: "/services#software-development" },
    { label: "Mobile Application Development", href: "/services#mobile-development" },
    { label: "Software Consultancy", href: "/services#software-consultancy" },
    { label: "Ecommerce", href: "/services#ecommerce" },
    { label: "Quality assurance and testing", href: "/services#quality-assurance" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/home">
            <img src="https://www.hawisoftware.com/wp-content/uploads/2021/08/logohawi.png" alt="Hawi Software Logo" className="w-36 h-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/home" className="text-muted-foreground hover:text-foreground smooth-transition">Home</Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground smooth-transition">About</Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground smooth-transition">
                Services
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-card border-border/50 bg-background/95 backdrop-blur-sm z-50">
                {serviceItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link to={item.href} className="cursor-pointer hover:bg-primary/10 smooth-transition">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/blog" className="text-muted-foreground hover:text-foreground smooth-transition">Blog</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground smooth-transition">Contact</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" className="hero-glow" asChild>
              <Link to="/login">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block py-2 text-muted-foreground hover:text-foreground smooth-transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button variant="default" className="w-full">
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;