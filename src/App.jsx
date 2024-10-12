import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import vector from "./assets/vector2.jpg";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { animateScroll as scroll } from "react-scroll";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    // Enable smooth scrolling
    const enableSmoothScroll = () => {
      document.documentElement.style.scrollBehavior = "smooth";
    };

    enableSmoothScroll();

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
    // Delay header appearance
    const timer = setTimeout(() => {
      setShowHeader(true);
    }, 5000); // 5 seconds delay, adjust as needed

    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => {
    setIsProjectsVisible(true);
    console.log("Mouse entered, isProjectsVisible:", true);
  };

  const handleMouseLeave = () => {
    setIsProjectsVisible(false);
    console.log("Mouse left, isProjectsVisible:", false);
  };

  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 -z-50"
        style={{
          backgroundImage: `url(${vector})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          // transform: 'rotate(180deg)',
          height: '100vh',
          width: '100vw',
        }}
        src={vector}
        alt=""
      />
      <AnimatePresence>
        {!isProjectsVisible && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 20,
            }}
          >
            <Header />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="hero" onPointerEnter={handleMouseLeave}>
        <Hero />
      </div>
      <div className="relative z-10" onPointerEnter={handleMouseEnter}>
        <Projects id="projects" />
      </div>
      <div className="skills" onPointerEnter={handleMouseLeave}>
        <Skills />
        <div className="">
          <About />
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
