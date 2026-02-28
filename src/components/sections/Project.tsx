import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Brain, Cpu, ChartSpline, Play, Split } from "lucide-react";
import systemDiagram from "@/assets/system-diagram.png";
import heroImage from "@/assets/roboracer-header.jpg";

const highlights = [
  
  {
    icon: Cpu,
    title: "Localization & Mapping (SLAM)",
    description: "Advanced camera and LiDar systems for environmental understanding of vehicle in physical space.",
    color: "from-cyan-500 to-blue-500 "
  },
  {
    icon: Eye,
    title: "Obstacle Avoidance",
    description: "Detecting instantaneous changes to avoid incoming obstacles and other vehicles for safety.",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: Brain,
    title: "Path Planning",
    description: "Intelligent path planning algorithms developed based on several mapping runs in the environment.",
    color:  "from-indigo-500 to-purple-500"
  },
  {
    icon: Split,
    title: "Raceline Optimization",
    description: "Optimizing generated vehicle paths for best time trials and competitive vehicle performance.",
    color: "from-purple-500 to-pink-500"
  },

  {
    icon: ChartSpline,
    title: "Particle Filtering",
    description: "Rigorous simulation and real-world testing to validate vehicle's ability to follow planned paths.",
    color: "from-pink-500 to-rose-500"
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
          className="text-center mb-12"
        >
          {/* background image*/}  
          <div>
            <img
              src={heroImage}
              alt="TMU Velocity autonomous RC car racing on track"
              className="w-full object-cover rounded-2xl mb-12"
            />
          </div>
      
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent border border-accent/20">
            Current Project
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Autonomous RC Car:<span className="gradient-text"> RoboRacer</span> 
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're modifying an RC car for autonomous navigation to compete at RoboRacer
            competitions worldwide, developing real-world autonomous driving skills.
          </p>
        </motion.div>

        {/* Project Highlights */}
        <h3 className="text-xl font-semibold text-foreground mb-4">Our Topics</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass-card p-6 hover-glow group"
            >


              {/* Gradient accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-60 group-hover:opacity-100 transition-opacity`}
              />


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
                Watch our autonomous RC car navigate the track using real-time path planning.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

  );
};
