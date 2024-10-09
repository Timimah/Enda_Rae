// import { useState, useEffect, useRef } from "react";
// import { Header } from "./components/Header";
// import vector from "./assets/vector2.jpg";
// import { Hero } from "./components/Hero";
// import { Projects } from "./components/Projects";
// import { animateScroll as scroll } from "react-scroll";
// import { motion, useTransform, useScroll, easeInOut } from "framer-motion";

// function App() {
//   const [isProjectsVisible, setIsProjectsVisible] = useState(false);
//   const projectsRef = useRef(null);
//   const { scrollY } = useScroll();

//   const headerOpacity = useTransform(
//     scrollY,
//     [0, 100, 200],
//     [1, 1, isProjectsVisible ? 0 : 1]
//   );

//   const headerY = useTransform(
//     scrollY,
//     [0, 100, 200],
//     [0, 0, isProjectsVisible ? -100 : 0]
//   );

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsProjectsVisible(entry.isIntersecting);
//         console.log(isProjectsVisible)
//       },
//       {
//         threshold: 0.1,
//         rootMargin: "-85% 0px 0px 0px"
//       }
//     );

//     if (projectsRef.current) {
//       observer.observe(projectsRef.current);
//     }

//     return () => {
//       if (projectsRef.current) {
//         observer.unobserve(projectsRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     // Enable smooth scrolling
//     const enableSmoothScroll = () => {
//       document.documentElement.style.scrollBehavior = "smooth";
//     };

//     enableSmoothScroll();

//     return () => {
//       document.documentElement.style.scrollBehavior = "auto";
//     };
//   }, []);

//   return (
//     <div className="overflow-y-auto">
//       <img
//         className="fixed inset-0 rotate-180 object-cover mix-blend-overlay"
//         src={vector}
//         alt=""
//       />
//       <motion.div
//         style={{
//           opacity: headerOpacity,
//           y: headerY,
//           position: "fixed",
//           top: 0,
//           left: 0,
//           right: 0,
//           zIndex: 20,
//         }}
//         transition={{ duration: 0.8, ease: "easeInOut" }}
//       >
//         <Header />
//       </motion.div>
//       <Hero />
//       <div className="relative z-10" ref={projectsRef} onMouseEnter={() =>setIsProjectsVisible(true)} onMouseLeave={() => setIsProjectsVisible(false)}>
//         <Projects />
//       </div>
//     </div>
//   );
// }

// export default App;
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
    <div className="">
      <img
        className="fixed inset-0 rotate-180 object-cover -z-50"
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
      <div
        className="relative z-10"
        onPointerEnter={handleMouseEnter}
      >
        <Projects id="projects" />
      </div>
      <div className="skills" onPointerEnter={handleMouseLeave}>
        <Skills />
      <div className="">
        <About />
      </div>
<Contact />
      </div>
    </div>
  );
}

export default App;
