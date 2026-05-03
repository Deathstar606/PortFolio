import { motion } from "framer-motion";
import { useInView as InObs } from "react-intersection-observer";
import { useRef } from "react";
import { useInView as FMotion } from "framer-motion";

export const SectionYPos = ({ children }) => {
  const ref = useRef(null);
  const isInView = FMotion(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        className="animeY"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
};

export const SectionYNeg = ({ children }) => {
  const ref = useRef(null);
  const isInView = FMotion(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        className="animeY2"
        style={{
          transform: isInView ? "none" : "translateY(-70px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
};

export const SectionXNeg = ({ children }) => {
  const ref = useRef(null);
  const isInView = FMotion(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        className="animeX"
        style={{
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
};

export const SectionXPos = ({ children }) => {
  const ref = useRef(null);
  const isInView = FMotion(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        className="animeX2"
        style={{
          transform: isInView ? "none" : "translateX(80px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
};

export const StaggeredText = ({ text }) => {
  const [ref, inView] = InObs({
    threshold: 0.1, // Reduced from 0.5 to trigger easier on small mobile screens
    triggerOnce: true,
  });

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2, // Make sure this syncs with your parent slider delay
      },
    },
  };

  const letterVariants = {
    // FIX 1: Use 100% instead of 50px. It dynamically adjusts to the font size
    // instead of a massive hardcoded pixel drop.
    hidden: { opacity: 0, y: "100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.4 },
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={textVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={{ display: "inline-block", position: "relative", zIndex: 30 }} // Keep above slider
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          style={{
            // FIX 2: display: inline-block is STRICTLY REQUIRED for 'y' transforms to work
            display: "inline-block",
            // FIX 3: Prevents Framer Motion from collapsing empty spaces between words
            whiteSpace: char === " " ? "pre" : "normal",
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};
