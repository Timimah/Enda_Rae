import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";
import slide5 from "../assets/slide5.png";
import slide6 from "../assets/slide6.png";
import slide7 from "../assets/slide7.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import mSlide1 from "../assets/mslide1.png";
import mSlide2 from "../assets/mslide2.png";
import mSlide3 from "../assets/mslide3.png";
import mSlide4 from "../assets/mslide4.png";
import mSlide5 from "../assets/mslide5.png";
import mSlide6 from "../assets/mslide6.png";
import mSlide7 from "../assets/mslide7.png";

const projects = [
  {
    image: slide1,
    mobileImage: mSlide1,
    name: "Seeni",
    github: "https://github.com/SeeniOfficial/frontend",
    view: "https://seeni.netlify.app/",
  },
  {
    image: slide2,
    mobileImage: mSlide2,
    name: "School Portal",
    github: "https://github.com/Timimah/School-portal-system",
    view: "https://school-portal-erae.netlify.app/",
  },
  {
    image: slide3,
    mobileImage: mSlide3,
    name: "Salva",
    github: "https://github.com/ResQ-by-Eureka/frontend",
    view: "https://salva-eureka.netlify.app/",
  },
  {
    image: slide4,
    mobileImage: mSlide4,
    name: "Grocers",
    github: "https://github.com/Timimah/grocery-app",
    view: "https://erae-grocers.netlify.app/",
  },
  {
    image: slide5,
    mobileImage: mSlide5,
    name: "PDFExtrator",
    github: "https://github.com/Timimah/PDFQuestionExtractor",
    view: "https://erae-pdf-extractor.netlify.app/",
  },
  {
    image: slide6,
    mobileImage: mSlide6,
    name: "Enda Rae",
    github: "https://github.com/Timimah/Enda_Rae",
    view: "https://endarae-dev.netlify.app/",
  },
  {
    image: slide7,
    mobileImage: mSlide7,
    name: "Fuoye News",
    github: "https://github.com/OyinDee/fuoyenews",
    view: "https://fuoye-newss.netlify.app/",
  },
];

const images = projects.map((project) => project.image);
const mobileImages = projects.map((project) => project.mobileImage);

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const ProjectsSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [slideHover, setSlideHover] = useState(false);

  const imageIndex = wrap(0, images.length, page);

  const paginate = useCallback(
    (newDirection) => {
      setPage([page + newDirection, newDirection]);
    },
    [page]
  );

  const infoVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 6500); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [paginate]);

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      paginate(1);
    } else if (isRightSwipe) {
      paginate(-1);
    }
  };

  return (
    <div className="w-full h-[40em] py-2 overflow-hidden group relative">
      {/* desktop slider */}
      <div className="hidden md:block">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseOver={() => setSlideHover(true)}
            onMouseLeave={() => setSlideHover(false)}
            className="rounded-2xl  border-8 absolute left-0 right-0 mx-10 border-black overflow-hidden"
          >
            <motion.img
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.04 }}
              src={projects[imageIndex].image}
              className="relative w-full h-[38em] object-cover"
            />
            <AnimatePresence>
              {slideHover && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={infoVariants}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute bottom-0 w-full justify-center gap-4 px-60 text-white shadow-xl bg-black/50 flex flex-col backdrop-blur-sm z-10 text-4xl h-36 items-center"
                >
                  <div className="font-bold">{projects[imageIndex].name}</div>
                  <div className="flex gap-4 items-center">
                    <a
                      href={projects[imageIndex].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-2xl"
                    >
                      GitHub
                    </a>
                    <a
                      href={projects[imageIndex].view}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-2xl flex gap-1 items-center"
                    >
                      <span>View</span>{" "}
                      <span>
                        <MdOpenInNew className="text-sm mt-2" />
                      </span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* mobile slider */}
      <div className="md:hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="rounded-2xl border-4 absolute left-0 right-0 mx-4 border-black overflow-hidden"
          >
            <motion.img
              transition={{ duration: 0.5 }}
              src={mobileImages[imageIndex]}
              className="relative w-full h-[38em] object-cover"
            />
            <div className="absolute bottom-0 w-full justify-center gap-2 px-4 text-white shadow-xl bg-black/50 flex flex-col backdrop-blur-sm z-10 text-4xl h-24 items-center">
              <div className="font-bold">{projects[imageIndex].name}</div>
              <div className="flex gap-4 items-center">
                <a
                  href={projects[imageIndex].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-md            m"
                >
                  GitHub
                </a>
                <a
                  href={projects[imageIndex].view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-md flex gap-1 items-center"
                >
                  <span>View</span>{" "}
                  <span>
                    <MdOpenInNew className="text-xs mt-1" />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Left Arrow */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
        <button
          className="text-white rounded-full p-2 bg-black/50 hover:bg-black/75"
          onClick={() => paginate(-1)}
        >
          <FaAngleLeft />
        </button>
      </div>
      {/* Right Arrow */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
        <button
          className="text-white rounded-full p-2 bg-black/50 hover:bg-black/75"
          onClick={() => paginate(1)}
        >
          <FaAngleRight />
        </button>
      </div>
      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                imageIndex === index ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setPage([index, index > page ? 1 : -1])}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
