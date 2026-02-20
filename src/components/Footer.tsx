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
        <div className="grid md:grid-cols-1 gap-8 items-center">
          {/* Logo & Copyright */}
          <div className="text-center md:text-right">
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
        </div>
      </div>
    </footer>
  );
};
