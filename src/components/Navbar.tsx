import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "@/assets/logo.png";
import { Link } from "react-router-dom";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Project" },
  { href: "/events", label: "Events" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/join", label: "Join" },
  { href: "/sponsor", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-width px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-xl md:text-2xl font-bold"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="w-8 h-8 rounded-full bg-accent mt-2 flex-shrink-0">
              
              <Link to="/"><img src={heroImage} alt="TMU Velocity logo"/></Link>
              
            </span>
            
            <span className="text-accent">
              <Link to="/">TMU</Link>
            </span>

            <span className="text-foreground">
              <Link to="/">Velocity</Link>
            </span>

          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button key={link.href}  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                <Link to={link.href}>{link.label}</Link>
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="heroOutline" size="sm">
              <Link to="/Sponsors">
                Sponsor Us
              </Link>
            </Button>

            <Button variant="hero" size="sm">
              <Link to="/Join">
                Join the Team
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container-width px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (

                <button key={link.href} className="text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                  <Link to={link.href}>{link.label}</Link>
                </button>
              ))}

              
              <div className="flex flex-col gap-3 pt-4 border-t border-border">              
               
                <Button variant="heroOutline">
                  <Link to="/Sponsors">
                    Sponsor Us
                  </Link>
                </Button>

                <Button variant="hero">
                  <Link to="/Join">
                    Join the Team
                  </Link>
                </Button>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
