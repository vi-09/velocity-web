import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Wrench, 
  Trophy, 
  Users, 
  FileText, 
  Calendar, 
  Lightbulb,
  ArrowRight
} from "lucide-react";

const benefits = [
  {
    icon: Wrench,
    title: "Hands-On Experience",
    description: "Work on real autonomous systems—from sensors to software to competition vehicles.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Join a passionate team of engineers solving complex autonomy challenges together.",
  },
  {
    icon: Trophy,
    title: "Global Competitions",
    description: "Represent TMU at RoboRacer events and other autonomous vehicle competitions worldwide.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship",
    description: "Learn from experienced members and faculty advisors from the AVL lab.",
  },
];

const steps = [
  {
    icon: FileText,
    step: "1",
    title: "Fill Out Interest Form",
    description: "Submit your interest and tell us about your background and skills.",
  },
  {
    icon: Calendar,
    step: "2",
    title: "Attend Onboarding Meeting",
    description: "Join our orientation to learn about the team, projects, and expectations.",
  },
  {
    icon: Lightbulb,
    step: "3",
    title: "Choose a Subteam",
    description: "Select the subteam that matches your interests and start contributing.",
  },
];

export const Join = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="join" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="container-width relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent border border-accent/20">
            Join Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Join <span className="gradient-text">TMU Velocity</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We welcome students from all years and disciplines who are passionate about autonomous
            systems, robotics, and pushing the boundaries of technology.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass-card p-6 text-center hover-glow group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* How to Join Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-8 md:p-12 mb-12"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-10">How to Join</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.step} className="relative text-center">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-accent/50 to-transparent" />
                )}
                <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent/50 flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-2xl font-bold text-accent">{step.step}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button variant="cta" size="xl" className="group" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Apply / Interest Form
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Questions? Email us at{" "}
            <a href="mailto:velocity@torontomu.ca" className="text-accent hover:underline">
              velocity@torontomu.ca
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
