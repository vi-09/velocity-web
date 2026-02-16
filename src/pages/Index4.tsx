import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Events } from "@/components/sections/Events";
import { Footer } from "@/components/Footer";

const Index4 = () => {
  return (
    <>
      <Helmet>
        <title>TMU Velocity | Autonomous Vehicles Student Team at Toronto Metropolitan University</title>
        <meta
          name="description"
          content="TMU Velocity is an undergraduate student design team building autonomous vehicles at Toronto Metropolitan University. Join us in developing self-driving technology through RoboRacer competitions."
        />
        <meta
          name="keywords"
          content="TMU Velocity, autonomous vehicles, self-driving cars, Toronto Metropolitan University, RoboRacer, student team, robotics, engineering"
        />
        
        {/* OpenGraph */}
        <meta property="og:title" content="TMU Velocity | Autonomous Vehicles Student Team" />
        <meta
          property="og:description"
          content="Building autonomous vehicles at Toronto Metropolitan University. Join our team or become a sponsor."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tmuvelocity.ca" />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TMU Velocity | Autonomous Vehicles Student Team" />
        <meta
          name="twitter:description"
          content="Building autonomous vehicles at Toronto Metropolitan University."
        />
        
        <link rel="canonical" href="https://tmuvelocity.ca" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Events />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index4;
