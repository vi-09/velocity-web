import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail, MapPin, Send, Linkedin, Instagram, Github } from "lucide-react";
import { Award, Eye, Users, Handshake, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Bronze",
    price: "$500+",
    color: "from-amber-700 to-amber-900",
    benefits: [
      "Logo on team website",
      "Social media recognition",
      "Newsletter mentions",
    ],
  },
  {
    name: "Silver",
    price: "$1,500+",
    color: "from-slate-400 to-slate-600",
    benefits: [
      "All Bronze benefits",
      "Logo on team apparel",
      "Event recognition",
      "Recruitment access",
    ],
    featured: false,
  },
  {
    name: "Gold",
    price: "$3,000+",
    color: "from-yellow-500 to-amber-600",
    benefits: [
      "All Silver benefits",
      "Logo on competition vehicle",
      "Exclusive demo sessions",
      "Priority recruitment access",
      "Speaking opportunity at events",
    ],
    featured: false,
  },
  {
    name: "Platinum",
    price: "$3,000+",
    color: "from-yellow-500 to-amber-600",
    benefits: [
      "All Silver benefits",
      "Logo on competition vehicle",
      "Exclusive demo sessions",
      "Priority recruitment access",
      "Speaking opportunity at events",
    ],
    featured: true,
  },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent! We'll get back to you soon.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container-width relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent border border-accent/20">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Questions about joining the team or partnering with us? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:velocity@torontomu.ca"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      velocity@torontomu.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">
                      Toronto, Ontario, Canada
                      <br />
                      Toronto Metropolitan University
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
            <div className="glass-card p-8 mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  target="_blank" rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/tmu-velocity/"
                  className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  target="_blank" rel="noopener noreferrer"
                  href="https://www.instagram.com/tmuvelocity/"
                  className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  target="_blank" rel="noopener noreferrer"
                  href="https://github.com/TMU-Velocity"
                  className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/20 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Download Sponsorship Package</h3>
              <div className="flex gap-4">
                
                <Button size="lg" className="group" asChild>
                  <a href="https://drive.google.com/uc?export=download&id=16z5X4wYFHzELQVkAPGia2tNGKKG3hAjv" download="2025-2026 TMU Velocity Sponsorship Package.pdf">
                    Become a Sponsor
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                
              </div>
            </div>
          </motion.div>
          </div>
        
      </div>
    </section>
  );
};
