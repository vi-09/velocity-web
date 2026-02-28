import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import join1 from "@/assets/join1.png";
import join2 from "@/assets/join4.jpg";
import join3 from "@/assets/join3.jpg";

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
    description: "Work on real autonomous systems from sensors to software to competition vehicles.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Join a passionate team of students solving complex autonomy challenges together.",
  },
  {
    icon: Trophy,
    title: "Global Competitions",
    description: "Represent TMU at RoboRacer events and other autonomous vehicle competitions worldwide.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship",
    description: "Learn from experienced members and faculty advisors from the Autonomous Vehicles Laboratory.",
  },
];

const steps = [
  {
    icon: FileText,
    step: "1",
    title: "No Prior Experience is Required",
    description: "All new members complete the structured training package teaching everything needed from the ground up.",
  },
  {
    icon: Calendar,
    step: "2",
    title: "Bring Your Enthusiasm",
    description: "Curiousity and commitment is the key! Showing up consistently ensures you can learn anything.",
  },
  {
    icon: Lightbulb,
    step: "3",
    title: "Join a Community",
    description: "Join us if you are someone looking to connect with peers and build knowledge for future members.",
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
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent border border-accent/20">
            Join Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Join <span className="gradient-text">TMU Velocity</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We open applications for TMU Velocity once or twice a year. Please keep a look out for our social platforms for updates when applications open and next steps. 
          
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-16"
        >
          <Button variant="cta" size="xl" className="group" asChild>
            <a href="https://www.instagram.com/tmuvelocity/"
             target="_blank" rel="noopener noreferrer">
              Visit Social Media
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


        {/* background image*/}  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <img
              src={join1}
              alt="TMU Velocity autonomous RC car racing on track"
              className="w-full object-cover rounded-2xl mb-16"
            />
            <img
              src={join2}
              alt="TMU Velocity autonomous RC car racing on track"
              className="w-full object-cover rounded-2xl mb-16"
            />
            <img
              src={join3}
              alt="TMU Velocity autonomous RC car racing on track"
              className="w-full object-cover rounded-2xl mb-16"
            />
          </div>

      </div>
    </section>
  );
};
