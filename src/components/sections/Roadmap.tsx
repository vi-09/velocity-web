import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Handshake, Award} from "lucide-react";
import heroImage from "@/assets/vgp-header.jpg";

const stats = [
  { icon: Users, value: "6-8", label: "Participating Teams" },
  { icon: Handshake, value: "100%", label: "Hands-on Training" },
  { icon: Award, value: "1 Day", label: "Competition" },
];

export const Roadmap = () => {
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
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4"> 
            Our Competition:<span className="gradient-text"> Velocity Grand Prix</span> 
          </h2> 
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto"> 
            Our team hosts an undergraduate student competition annually to allow students to develop hands-on skills in autonomous systems by sharing our expertise. 
          </p>
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
              Velocity Grand Prix (VGP) teaches students autonomous systems using beginner-friendly hardware. 
              Students will become familiar with collecting camera data for basic autonomous decision-making. 
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Students receive a fully assembled <span className="text-foreground font-medium">Raspberry Pi–powered vehicle</span> and train their own driving algorithm using the <span className="text-foreground font-medium">DonkeyCar platform</span>, culminating in a live, 1-day competition.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Participants collect <span className="text-foreground font-medium">real camera data</span> and learn how perception connects to control, gaining practical experience in end-to-end autonomy.  
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Through <span className="text-foreground font-medium">3 guided workshops</span>, students learn vehicle architecture, system components, and Linux-based environments with organizers providing technical support throughout.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 text-center hover-glow group"
              >
                <stat.icon className="w-16 h-40 mx-auto mb-3 text-accent group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
