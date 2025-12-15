import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Target, Zap, Globe } from "lucide-react";

const phases = [
  {
    icon: Rocket,
    phase: "Phase 1",
    title: "Foundation",
    period: "2024",
    description:
      "Establish team structure, set up AVL lab access, begin RC car platform development, and recruit founding members.",
    status: "completed",
  },
  {
    icon: Target,
    phase: "Phase 2",
    title: "First Competition",
    period: "2025",
    description:
      "Complete autonomous RC car build, implement core perception and planning systems, compete at first RoboRacer event.",
    status: "current",
  },
  {
    icon: Zap,
    phase: "Phase 3",
    title: "Advanced Systems",
    period: "2026",
    description:
      "Integrate advanced ML models, implement full SLAM pipeline, develop custom simulation environment, expand team capabilities.",
    status: "upcoming",
  },
  {
    icon: Globe,
    phase: "Phase 4",
    title: "Scale & Impact",
    period: "2027+",
    description:
      "Develop varying levels of autonomous vehicles in large-scale and small-scale applications to deepen understanding of evolving technologies.",
    status: "future",
  },
];

export const Roadmap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "completed":
        return "border-accent/50 bg-accent/10";
      case "current":
        return "border-accent bg-accent/20 ring-2 ring-accent/30";
      case "upcoming":
        return "border-border bg-secondary/50";
      case "future":
        return "border-border/50 bg-secondary/30";
      default:
        return "border-border bg-secondary/50";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-accent/20 text-accent";
      case "current":
        return "bg-accent text-accent-foreground";
      case "upcoming":
        return "bg-muted text-muted-foreground";
      case "future":
        return "bg-muted/50 text-muted-foreground/70";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="roadmap" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container-width relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent border border-accent/20">
            Our Vision
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Roadmap & <span className="gradient-text">Future</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In the future, we seek to develop varying levels of autonomous cars in large-scale
            and small-scale applications to deepen understanding of evolving technologies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-border/30" />

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent -translate-x-1/2 mt-6 ring-4 ring-background" />

                {/* Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div
                    className={`glass-card p-6 border ${getStatusStyles(phase.status)} hover-glow`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <phase.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-foreground">{phase.phase}</span>
                          <span
                            className={`text-xs font-medium px-2 py-0.5 rounded-full ${getStatusBadge(
                              phase.status
                            )}`}
                          >
                            {phase.status === "current" ? "In Progress" : phase.period}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground">{phase.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
