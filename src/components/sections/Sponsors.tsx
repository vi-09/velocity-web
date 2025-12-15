import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
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
    featured: true,
  },
];

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
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent border border-accent/20">
            Partner With Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sponsors & <span className="gradient-text">Partners</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your support enables student innovation and helps us compete at the highest level. Join
            us in shaping the future of autonomous vehicles.
          </p>
        </motion.div>

        {/* Why Sponsor */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass-card p-6 text-center hover-glow group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <reason.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Sponsorship Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-10">
            Sponsorship Tiers
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button variant="cta" size="xl" className="group" asChild>
            <a href="#contact">
              Become a Sponsor
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>

        {/* Current Sponsors Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            Our Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-32 h-16 glass-card flex items-center justify-center text-muted-foreground text-sm"
              >
                Logo {i}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
