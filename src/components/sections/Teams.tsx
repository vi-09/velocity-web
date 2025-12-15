import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Eye, 
  MapPin, 
  Route, 
  Gauge, 
  Cpu, 
  Code, 
  Users 
} from "lucide-react";

const subteams = [
  {
    icon: Eye,
    title: "Perception",
    description: "Computer vision, lane detection, object detection, and sensor fusion for environmental awareness.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: MapPin,
    title: "Localization & Mapping",
    description: "SLAM algorithms, odometry, and real-time position estimation for precise navigation.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Route,
    title: "Motion Planning",
    description: "Path planning algorithms, trajectory optimization, and decision-making systems.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Gauge,
    title: "Controls",
    description: "PID controllers, MPC implementations, and vehicle dynamics for stable driving.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Cpu,
    title: "Embedded/Hardware",
    description: "RC platform modifications, sensor integration, compute systems, and power management.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Code,
    title: "Software & Simulation",
    description: "ROS/ROS2 development, simulation environments, tooling, and testing frameworks.",
    color: "from-rose-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Operations/Outreach",
    description: "Event coordination, recruitment, sponsorship relations, and team logistics.",
    color: "from-orange-500 to-amber-500",
  },
];

export const Teams = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="teams" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container-width relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent border border-accent/20">
            Technical Teams
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="gradient-text">Subteams</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join one of our specialized subteams and contribute to building autonomous systems
            from the ground up.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {subteams.map((team, index) => (
            <motion.div
              key={team.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="glass-card p-6 hover-glow group relative overflow-hidden"
            >
              {/* Gradient accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${team.color} opacity-60 group-hover:opacity-100 transition-opacity`}
              />

              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <team.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{team.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{team.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
