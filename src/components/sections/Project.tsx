import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Brain, Cpu, TestTube, Play } from "lucide-react";
import systemDiagram from "@/assets/system-diagram.jpg";

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

const highlights = [
  {
    icon: Eye,
    title: "Perception",
    description: "Advanced camera and sensor systems for environmental understanding and obstacle detection.",
  },
  {
    icon: Brain,
    title: "Planning & Control",
    description: "Intelligent path planning algorithms and precise vehicle control systems.",
  },
  {
    icon: Cpu,
    title: "Hardware Integration",
    description: "Custom sensor mounts, compute platforms, and power management systems.",
  },
  {
    icon: TestTube,
    title: "Testing & Iteration",
    description: "Rigorous simulation and real-world testing to validate autonomous behaviors.",
  },
];


export const Project = () => {
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
    <section id="project" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container-width relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent border border-accent/20">
            Current Project
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Autonomous RC Car <span className="gradient-text">RoboRacer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're modifying an RC car for autonomous navigation to compete at RoboRacer
            competitions worldwide, developing real-world autonomous driving skills.
          </p>
        </motion.div>

        {/* Project Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass-card p-6 hover-glow group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* System Diagram & Media */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* System Diagram */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-4 overflow-hidden"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4 px-2">System Architecture</h3>
            <img
              src={systemDiagram}
              alt="TMU Velocity autonomous vehicle system architecture diagram"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>

          {/* Demo Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-card overflow-hidden"
          >
            <div className="aspect-video bg-secondary/50 flex items-center justify-center relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10" />
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 group-hover:scale-110 transition-all">
                  <Play className="w-8 h-8 text-accent ml-1" />
                </div>
                <p className="text-muted-foreground">Demo Video Coming Soon</p>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-foreground mb-2">Track Testing Demo</h3>
              <p className="text-sm text-muted-foreground">
                Watch our autonomous RC car navigate the track using computer vision and real-time
                path planning.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      
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
