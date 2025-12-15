import { motion } from "framer-motion";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#project", label: "Project" },
  { href: "#join", label: "Join" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-xl">
      <div className="container-width px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-xl font-bold mb-2"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span className="text-accent">TMU</span>
              <span className="text-foreground">Velocity</span>
            </a>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} TMU Velocity. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Affiliations */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              An initiative of the{" "}
              <span className="text-foreground">Autonomous Vehicles Laboratory (AVL)</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Under the{" "}
              <span className="text-foreground">
                Metropolitan Undergraduate Engineering Society (MUES)
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
