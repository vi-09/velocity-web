import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

const upcomingEvents = [
  {
    title: "Kick-Off Meeting",
    date: "January 22, 2026",
    time: "6:00 PM - 8:00 PM",
    location: "ENG Building, Room LG11",
    type: "Recruitment",
  },
  {
    title: "Eng Expo Booth - Fall",
    date: "October 6, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Daphne Cockwell Complex, Room 103",
    type: "Demo",
  },
  {
    title: "ROS2 Tutorial",
    date: "September 29, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Kerr Hall East, Room 129",
    type: "Workshop",
  },
  {
    title: "Eng Expo Booth - Summer",
    date: "August 25, 2025",
    time: "12:00 PM - 3:00 PM",
    location: "Kerr Hall Quad",
    type: "Demo",
  },
];

export const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Recruitment":
        return "bg-cyan-500/20 text-cyan-400";
      case "Workshop":
        return "bg-purple-500/20 text-purple-400";
      case "Demo":
        return "bg-blue-500/20 text-blue-400";
      case "VGP":
        return "bg-green-500/20 text-green-400";
      default:
        return "bg-accent/20 text-accent";
    }
  };

  return (
    <section id="events" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="container-width relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent border border-accent/20">
            Get Involved
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Workshops & Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We host events to engage TMU students from intro sessions to meet the team to
            hands-on workshops led by students for students.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" />
              Events
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="glass-card p-5 hover-glow"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h4 className="font-semibold text-foreground">{event.title}</h4>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${getTypeColor(
                        event.type
                      )}`}
                    >
                      {event.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              Why Attend?
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-foreground mb-2">Meet the Team</h4>
                <p className="text-muted-foreground text-sm">
                  Connect with current members, learn about our projects, and discover if our team fits your interests.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Hands-On Learning</h4>
                <p className="text-muted-foreground text-sm">
                  Our workshops cover essential skills from computer vision to ROS2 taught by
                  experienced student members.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Real Projects</h4>
                <p className="text-muted-foreground text-sm">
                  See our autonomous RC car in action and understand how classroom concepts apply
                  to real engineering challenges.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Network & Grow</h4>
                <p className="text-muted-foreground text-sm">
                  Build connections with peers passionate about autonomy, robotics, and the
                  future of robotic systems.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
