import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Trophy, Calendar, Building2 } from "lucide-react";

const stats = [
  { icon: Users, value: "25+", label: "Student Members" },
  { icon: Trophy, value: "Global", label: "Competitions" },
  { icon: Calendar, value: "2024", label: "Established" },
  { icon: Building2, value: "TMU", label: "University" },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container-width relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent border border-accent/20">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="gradient-text">TMU Velocity</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              TMU Velocity is an undergraduate student team dedicated to developing autonomous
              vehicles. We bridge the gap between classroom theory and real-world engineering
              through hands-on projects and global competitions.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Founded as an initiative under the <span className="text-foreground font-medium">Autonomous Vehicles Laboratory (AVL)</span> to introduce self-driving
                  fundamentals to eager students.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  In 2024, became an official organization under the <span className="text-foreground font-medium">Metropolitan Undergraduate Engineering Society (MUES)</span>.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  We build competitive vehicles for global competitions, preparing members for
                  careers in autonomous systems and robotics.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 text-center hover-glow group"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

         {/* Photo Gallery Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">Our Team</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div
              key={1}
              className="aspect-square glass-card flex items-center justify-center text-muted-foreground text-sm"
            >
              photo 1
            </div>


            <div
              key={2}
              className="aspect-square glass-card flex items-center justify-center text-muted-foreground text-sm"
            >
              photo 2
            </div>

            <div
              key={3}
              className="aspect-square glass-card flex items-center justify-center text-muted-foreground text-sm"
            >
              photo 3
            </div>

            
          </div>
        </motion.div>
      </div>
    </section>
  );
};
