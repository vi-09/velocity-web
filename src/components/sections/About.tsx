import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Trophy, Calendar, Building2, UserRound} from "lucide-react";
import heroImage from "@/assets/about-header.png";

import person1 from "@/assets/person1.png";
import person2 from "@/assets/person2.png";
import person3 from "@/assets/person3.png";
import person4 from "@/assets/person4.png";

import person5 from "@/assets/person5.png";
import person6 from "@/assets/person6.png";

import person7 from "@/assets/person7.png";
import person8 from "@/assets/person8.png";

const stats = [
  { icon: Users, value: "30+", label: "Student Members" },
  { icon: Trophy, value: "Global", label: "Competitions" },
  { icon: Calendar, value: "2024", label: "Established" },
  { icon: Building2, value: "TMU", label: "University" },
];

const operations = [
  {
    icon: UserRound,
    title: "Alexander Wojtkowski",
    description: "Team Captain",
  },
  {
    icon: UserRound,
    title: "Vivian Ho",
    description: "Team Coordinator",
  },
  {
    icon: UserRound,
    title: "Jaaharjot Kaur",
    description: "Media Lead",
  },
  {
    icon: UserRound,
    title: "Mackenzie Kim",
    description: "Finanace Lead",
  },
];

const software = [
  {
    icon: UserRound,
    title: "Omer Chandna",
    description: "Software PM",
  },
  {
    icon: UserRound,
    title: "Kazi Shaffan",
    description: "Software PM",
  },
  {
    icon: UserRound,
    title: "",
    description: "Software Lead - Path Following",
  },
  {
    icon: UserRound,
    title: "",
    description: "Software Lead - Obstacle Avoidance",
  },
  {
    icon: UserRound,
    title: "",
    description: "Software Lead - Particle Filter",
  },
  {
    icon: UserRound,
    title: "",
    description: "Software Lead - Raceline Optimization",
  },
  {
    icon: UserRound,
    title: "",
    description: "Software Lead - SLAM",
  },
];

const hardware = [
  {
    icon: UserRound,
    title: "Vivian Ho",
    description: "Hardware PM - VGP",
  },
  {
    icon: UserRound,
    title: "Gurkirat Brar",
    description: "Hardware Lead - VGP",
  },
  {
    icon: UserRound,
    title: "Andrew Oseghale",
    description: "Hardware Lead - VGP",
  },
  {
    icon: UserRound,
    title: "",
    description: "Hardware Member - VGP",
  },
  {
    icon: UserRound,
    title: "",
    description: "Hardware Member - VGP",
  },
  {
    icon: UserRound,
    title: "",
    description: "Hardware Member - VGP",
  },
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
          className="text-center mb-12"
        >

          {/* title block */}
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent border border-accent/20">
            Who We Are
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-12">
            About Us
          </h2>

          {/* background image*/}  
          <div>
            <img
              src={heroImage}
              alt="TMU Velocity autonomous RC car racing on track"
              className="w-full object-cover rounded-2xl"
            />
          </div>

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

        {/* Operations Team */}

        <br></br><br></br>
        <h3 className="text-xl font-semibold text-foreground mb-5">Our Operations</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-6 mb-16">

          {operations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass-card p-6 hover-glow group"
            >
              <div className="w-34 h-34 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                {/*<div>
                  <img
                    src={item.icon}
                    className="object-fit rounded-2xl h-full"
                  />
                </div>*/}

                <item.icon className="h-24 text-accent" />

              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* RoboRacer */}
        <h3 className="text-xl font-semibold text-foreground mb-4">RoboRacer - Competition Team</h3>
   
        <div className="text-sm text-muted-foreground">*Please note our general Software Team Members have not been listed here due to over 20 members.</div> <br></br>
        <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-6 mb-16">

          {software.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass-card p-6 hover-glow group"
            >
              <div className="w-34 h-34 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                {/*<div>
                  <img
                    src={item.icon}
                    className="object-fit rounded-2xl h-full"
                  />
                </div>*/}

                <item.icon className="h-24 text-accent" />
              </div>


              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
          

        {/* VGP Team */}
        <h3 className="text-xl font-semibold text-foreground mb-5">Velocity Grand Prix - Organizing Team</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-6 mb-16">

          {hardware.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass-card p-6 hover-glow group"
            >
              <div className="w-34 h-34 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                {/*<div>
                  <img
                    src={item.icon}
                    className="object-fit rounded-2xl h-full"
                  />
                </div>*/}

                <item.icon className="h-24 text-accent" />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>     

      </div>
    </section>
  );
};
