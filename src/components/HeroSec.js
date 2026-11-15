import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { SectionYPos, StaggeredText } from "./Animations";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import layer1Img from "../images/hero_section/layer1.jpg";
import layer2Img from "../images/hero_section/layer2.png";
import layer3Img from "../images/hero_section/layer3.png";
import Fb from "../images/Socials/facebook light.png";
import Lin from "../images/Socials/linkedin light.png";
import git from "../images/Socials/github light.png";
import Arrow from "../images/arrow.gif";

const scrollTarget = (tid) => {
  const element = document.getElementById(tid);
  if (element) {
    const offset = 100;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const titleArr = ["Fullstack Developer", "Machine Learning Engineer"];

const HeroSec = () => {
  const [titleState, setTitleState] = useState({
    index: 0,
    prevIndex: null,
    tick: 0,
  });
  const [viewportHeight, setViewportHeight] = useState(() =>
    typeof window !== "undefined" ? window.innerHeight : 900
  );
  const prefersReducedMotion = useReducedMotion();

  const activeTitle = titleArr[titleState.index];

  // Track viewport height so scroll parallax distances scale cleanly across devices
  useEffect(() => {
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Rotate titles with visibility-aware interval so background tab throttling cannot desync animations
  useEffect(() => {
    let intervalId = null;

    const startTimer = () => {
      if (intervalId !== null) return;
      intervalId = setInterval(() => {
        setTitleState((prev) => ({
          index: (prev.index + 1) % titleArr.length,
          prevIndex: prev.index,
          tick: prev.tick + 1,
        }));
      }, 4000);
    };

    const stopTimer = () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopTimer();
      } else {
        startTimer();
      }
    };

    if (!document.hidden) {
      startTimer();
    }
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopTimer();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Pointer parallax (desktop fine pointers only, smoothed with spring physics)
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothPointerX = useSpring(pointerX, {
    stiffness: 110,
    damping: 24,
    mass: 0.6,
  });
  const smoothPointerY = useSpring(pointerY, {
    stiffness: 110,
    damping: 24,
    mass: 0.6,
  });

  useEffect(() => {
    if (
      prefersReducedMotion ||
      typeof window === "undefined" ||
      typeof window.matchMedia !== "function"
    ) {
      return;
    }
    const finePointerQuery = window.matchMedia("(pointer: fine)");
    if (!finePointerQuery || !finePointerQuery.matches) return;

    const handlePointerMove = (e) => {
      if (e.pointerType && e.pointerType !== "mouse") return;
      const nx = Math.max(-0.5, Math.min(0.5, e.clientX / window.innerWidth - 0.5));
      const ny = Math.max(-0.5, Math.min(0.5, e.clientY / window.innerHeight - 0.5));
      pointerX.set(nx);
      pointerY.set(ny);
    };

    const resetPointer = () => {
      pointerX.set(0);
      pointerY.set(0);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", resetPointer);
    window.addEventListener("blur", resetPointer);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", resetPointer);
      window.removeEventListener("blur", resetPointer);
    };
  }, [prefersReducedMotion, pointerX, pointerY]);

  // Scroll-driven depth parallax mapped proportionally to viewport height
  const { scrollY } = useScroll();
  const scrollRange = Math.max(viewportHeight * 0.65, 320);
  const contentFadeEnd = Math.max(viewportHeight * 0.45, 220);
  const socialsFadeEnd = Math.max(viewportHeight * 0.32, 160);
  const scrollFactor = Math.min(1, Math.max(0.58, viewportHeight / 900));

  const layer1ScrollY = useTransform(
    scrollY,
    [0, scrollRange],
    [0, -55 * scrollFactor]
  );
  const layer1Scale = useTransform(scrollY, [0, scrollRange], [1.03, 1.1]);
  const layer2ScrollY = useTransform(
    scrollY,
    [0, scrollRange],
    [0, -210 * scrollFactor]
  );
  const layer3ScrollY = useTransform(
    scrollY,
    [0, scrollRange],
    [0, -380 * scrollFactor]
  );

  const contentScrollY = useTransform(
    scrollY,
    [0, scrollRange],
    [0, -150 * scrollFactor]
  );
  const contentOpacity = useTransform(scrollY, [0, contentFadeEnd], [1, 0]);
  const socialsScrollY = useTransform(
    scrollY,
    [0, socialsFadeEnd],
    [0, -80 * scrollFactor]
  );
  const socialsOpacity = useTransform(scrollY, [0, socialsFadeEnd], [1, 0]);

  const layer1PointerX = useTransform(smoothPointerX, [-0.5, 0.5], [10, -10]);
  const layer1PointerY = useTransform(smoothPointerY, [-0.5, 0.5], [6, -6]);
  const layer2PointerX = useTransform(smoothPointerX, [-0.5, 0.5], [22, -22]);
  const layer2PointerY = useTransform(smoothPointerY, [-0.5, 0.5], [10, -10]);
  const layer3PointerX = useTransform(smoothPointerX, [-0.5, 0.5], [38, -38]);
  const layer3PointerY = useTransform(smoothPointerY, [-0.5, 0.5], [15, -15]);
  const contentPointerX = useTransform(smoothPointerX, [-0.5, 0.5], [-8, 8]);
  const contentPointerY = useTransform(smoothPointerY, [-0.5, 0.5], [-5, 5]);

  return (
    <section className="headerback" id="hero">
      <div className="hero-sticky">
        {/* 3-Layer Responsive Parallax Landscape */}
        <div className="hero-parallax-stage" aria-hidden="true">
          <motion.div
            className="hero-layer hero-layer-1"
            style={{
              y: prefersReducedMotion ? 0 : layer1ScrollY,
              scale: prefersReducedMotion ? 1.03 : layer1Scale,
            }}
          >
            <motion.div
              className="hero-layer-inner"
              style={{
                x: prefersReducedMotion ? 0 : layer1PointerX,
                y: prefersReducedMotion ? 0 : layer1PointerY,
              }}
            >
              <img
                src={layer1Img}
                alt=""
                className="hero-layer-img hero-layer-img-1"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-layer hero-layer-2"
            style={{ y: prefersReducedMotion ? 0 : layer2ScrollY }}
          >
            <motion.div
              className="hero-layer-inner"
              style={{
                x: prefersReducedMotion ? 0 : layer2PointerX,
                y: prefersReducedMotion ? 0 : layer2PointerY,
              }}
            >
              <img
                src={layer2Img}
                alt=""
                className="hero-layer-img hero-layer-img-2"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-layer hero-layer-3"
            style={{ y: prefersReducedMotion ? 0 : layer3ScrollY }}
          >
            <motion.div
              className="hero-layer-inner"
              style={{
                x: prefersReducedMotion ? 0 : layer3PointerX,
                y: prefersReducedMotion ? 0 : layer3PointerY,
              }}
            >
              <img
                src={layer3Img}
                alt=""
                className="hero-layer-img hero-layer-img-3"
              />
              <div className="hero-layer-3-base" />
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Typography & CTA */}
        <motion.div
          className="hero-content"
          style={{
            y: prefersReducedMotion ? 0 : contentScrollY,
            opacity: prefersReducedMotion ? 1 : contentOpacity,
            x: prefersReducedMotion ? 0 : contentPointerX,
          }}
        >
          <motion.div
            style={{ y: prefersReducedMotion ? 0 : contentPointerY }}
          >
            <SectionYPos>
              <Container className="lg-container">
                <Row className="d-flex flex-column justify-content-center align-items-center">
                  <Col
                    md={10}
                    lg={8}
                    xs={12}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <div className="text-center w-100">
                      <h4 className="hero-eyebrow">I am...</h4>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          width: "100%",
                          marginTop: "0.65rem",
                        }}
                      >
                        <div className="hero-name-wrap">
                          <h1 className="headertext" style={{ margin: 0 }}>
                            <StaggeredText text={"Fardin Mridul"} />
                          </h1>
                        </div>
                      </div>

                      {/* Two-slot compositor title switcher prevents AnimatePresence lockups */}
                      <div className="hero-title-stage">
                        {titleState.prevIndex !== null && (
                          <h2
                            key={`out-${titleState.tick}`}
                            className="hero-role-title hero-role-exit"
                            aria-hidden="true"
                          >
                            {titleArr[titleState.prevIndex]}
                          </h2>
                        )}
                        <h2
                          key={`in-${titleState.tick}`}
                          className={
                            titleState.tick > 0
                              ? "hero-role-title hero-role-enter"
                              : "hero-role-title"
                          }
                        >
                          {activeTitle}
                        </h2>
                      </div>

                      {/* Arrow & Journey CTA */}
                      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center text-center hero-cta-row">
                        <h5 className="mb-0 hero-journey-pill">
                          Let's start our epic journey together 🌌
                        </h5>
                        <img
                          onClick={() => scrollTarget("about")}
                          className="hero-arrow"
                          src={Arrow}
                          alt="Scroll to About section"
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </SectionYPos>
          </motion.div>
        </motion.div>

        {/* Social Links anchored cleanly over foreground forest */}
        <motion.div
          className="position-absolute w-100 d-flex justify-content-center align-items-center hero-socials"
          style={{
            y: prefersReducedMotion ? 0 : socialsScrollY,
            opacity: prefersReducedMotion ? 1 : socialsOpacity,
          }}
        >
          <motion.a
            href="https://www.facebook.com/profile.php?id=100007104457895"
            target="_blank"
            rel="noreferrer"
            whileHover={{ filter: "brightness(150%)" }}
            style={{ transition: "filter 0.3s ease" }}
          >
            <img
              style={{ height: "35px", width: "35px" }}
              src={Fb}
              alt="Facebook"
            />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/fardin-rahman-2311942bb"
            target="_blank"
            rel="noreferrer"
            whileHover={{ filter: "brightness(150%)" }}
            style={{ transition: "filter 0.3s ease" }}
          >
            <img
              style={{ height: "35px", width: "35px" }}
              src={Lin}
              alt="LinkedIn"
            />
          </motion.a>

          <motion.a
            href="https://github.com/Deathstar606?tab=repositories"
            target="_blank"
            rel="noreferrer"
            whileHover={{ filter: "brightness(150%)" }}
            style={{ transition: "filter 0.3s ease" }}
          >
            <img
              style={{ height: "35px", width: "35px" }}
              src={git}
              alt="GitHub"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSec;
