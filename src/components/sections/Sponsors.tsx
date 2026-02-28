import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Award, Eye, Users, Handshake, ArrowRight } from "lucide-react";
import platinum1 from "@/assets/platinum1.png";
import platinum2 from "@/assets/platinum2.png";

const reasons = [
  {
    icon: Award,
    title: "Support Innovation",
    description: "Enable students to develop cutting-edge autonomous technology.",
  },
  {
    icon: Eye,
    title: "Brand Visibility",
    description: "Gain exposure at competitions, events, and through our media channels.",
  },
  {
    icon: Users,
    title: "Talent Pipeline",
    description: "Connect with motivated engineering students for internships and recruitment.",
  },
  {
    icon: Handshake,
    title: "Community Impact",
    description: "Contribute to TMU's engineering community and STEM education.",
  },
];

const tiers = [
  {
    name: "Bronze",
    price: "$500+",
    color: "from-amber-700 to-amber-900",
    benefits: [
      "Logo on website",
    ],
  },
  {
    name: "Silver",
    price: "$1,500+",
    color: "from-slate-400 to-slate-600",
    benefits: [
      "Logo on website",
      "Logo on RoboRacer vehicle"
    ],
    featured: false,
  },
  {
    name: "Gold",
    price: "$2,000+",
    color: "from-yellow-500 to-amber-600",
    benefits: [
      "Logo on website",
      "Logo on RoboRacer vehicle", 
      "Logo on general merchandise",
      "Banner recognition",
    ],
    featured: false,
  },
  {
    name: "Platinum",
    price: "$3,000+",
    color: "from-cyan-500 to-cyan-600",
    benefits: [
      "Logo on website",
      "Logo on RoboRacer vehicle", 
      "Logo on general merchandise",
      "Banner recognition",
      "VGP Merchandise",
      "Progress Updates",
      "Dedicated Social Media Post",
    ],
    featured: true,
  },
];

export const Sponsors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sponsors" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container-width relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent border border-accent/20">
            Thank you
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your support enables student innovation and helps us compete at the highest level. Join
            us in shaping the future of autonomous vehicles.
          </p>
        </motion.div>

        {/* Platinum */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16"
        >
          <span className="inline-block px-4 py-2 mb-12 text-sm font-medium rounded-full bg-accent/10 text-muted-foreground border border-accent/20">
            Platinum Sponsors
          </span>
          <div className="flex flex-wrap justify-center gap-8">
            <div key="1" className="w-44 h-16 flex items-center justify-center text-muted-foreground text-sm mb-4">
                <img
                  src={platinum1}
                  alt="Autonomous Vehicles Laboratory (AVL) Logo"
                  className="w-full object-cover rounded-2xl"
                />
            </div>
            <div key="2" className="w-44 h-16 flex items-center justify-center text-muted-foreground text-sm mb-4">
                <img
                  src={platinum2}
                  alt="Metropolitan Undergraduate Engineering Society (MUES) Logo"
                  className="w-full object-cover rounded-2xl"
                /> 
            </div>
          </div>
        </motion.div>

        {/* Why Sponsor */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >

          <br /><br /><br />
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent border border-accent/20">
            Partner With Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sponsor Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your support enables student innovation and helps us compete at the highest level. Join
            us in shaping the future of autonomous vehicles.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-8"
        >
          <Button variant="cta" size="xl" className="group" asChild>
            <a href="https://drive.google.com/uc?export=download&id=16z5X4wYFHzELQVkAPGia2tNGKKG3hAjv" download="2025-2026 TMU Velocity Sponsorship Package.pdf">
              Become a Sponsor
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>

        {/* Sponsorship Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-4 gap-6">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className={`glass-card p-6 relative ${
                  tier.featured ? "ring-2 ring-accent" : ""
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <div
                  className={`h-2 w-full bg-gradient-to-r ${tier.color} rounded-full mb-6`}
                />
                <h4 className="text-xl font-bold text-foreground mb-1">{tier.name}</h4>
                <p className="text-2xl font-bold text-accent mb-6">{tier.price}</p>
                <ul className="space-y-3">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      

      </div>
    </section>
  );
};
