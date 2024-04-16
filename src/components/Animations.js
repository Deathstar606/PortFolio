import { motion } from "framer-motion";
import { useInView as InObs } from "react-intersection-observer";
import { useRef } from "react";
import { useInView as FMotion} from "framer-motion";

export const SectionYPos = ({ children }) => {
    const ref = useRef(null);
    const isInView = FMotion(ref, { once: true });
  
    return (
      <section ref={ref}>
        <span className="animeY"
                style={{
                  transform: isInView ? "none" : "translateY(100px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
          {children}
        </span>
      </section>
    );
  }

export const SectionYNeg = ({ children }) => {
    const ref = useRef(null);
    const isInView = FMotion(ref, { once: true });
  
    return (
      <section ref={ref}>
        <span className="animeY2"
                style={{
                  transform: isInView ? "none" : "translateY(-70px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
          {children}
        </span>
      </section>
    );
  }

export const SectionXNeg = ({ children }) => {
    const ref = useRef(null);
    const isInView = FMotion(ref, { once: true });
  
    return (
      <section ref={ref}>
        <span className="animeX"
                style={{
                  transform: isInView ? "none" : "translateX(-100px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
          {children}
        </span>
      </section>
    );
  }

export const SectionXPos = ({ children }) => {
    const ref = useRef(null);
    const isInView = FMotion(ref, { once: true });
  
    return (
      <section ref={ref}>
        <span className="animeX2"
                style={{
                  transform: isInView ? "none" : "translateX(80px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
          {children}
        </span>
      </section>
    );
  }

export const StaggeredText = ({ text }) => {
  const [ref, inView] = InObs({
    threshold: 0.5,
    triggerOnce: true 
  });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
    ref={ref} 
    variants={textVariants} 
    initial="hidden" 
    animate={inView ? "visible" : "initial"}>
      {text.split("").map((letter, index) => (
        <motion.span key={index} variants={letterVariants} style={{position: "relative"}}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};