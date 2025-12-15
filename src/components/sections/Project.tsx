import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Brain, Cpu, TestTube, Play } from "lucide-react";
import systemDiagram from "@/assets/system-diagram.jpg";

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

        {/* Photo Gallery Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">Project Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square glass-card flex items-center justify-center text-muted-foreground text-sm"
              >
                Photo {i}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
