import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { SectionYPos, StaggeredText } from "./Animations";
import { motion, AnimatePresence } from "framer-motion";
import Fb from "../images/Socials/facebook light.png";
import Lin from "../images/Socials/linkedin light.png";
import git from "../images/Socials/github light.png";
import Arrow from "../images/arrow.gif";

const TitleVariants = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -80 },
};

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
  const [activeTitle, setActiveTitle] = useState(titleArr[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveTitle((prevTitle) => {
        const currentIndex = titleArr.indexOf(prevTitle);
        const nextIndex = (currentIndex + 1) % titleArr.length;
        return titleArr[nextIndex];
      });
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/* CRITICAL ARCHITECTURAL CHANGE: Sticky Stacking Container
        1. 'height: 100vh' reserves the exact space for the scroll.
        2. Sub-components lower in the application MUST have a solid background 
           and a z-index > 1 to successfully slide over this frozen section.
      */}
      <div
        className="headerback"
        id="hero"
        style={{
          height: "100vh",
          zIndex: 1,
        }}
      >
        {/* The inner container freezes at the top of the viewport when scrolling */}
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <SectionYPos>
            <div className="jumbotron" style={{ background: "transparent" }}>
              <Container className="lg-container">
                <Row className="d-flex flex-column justify-content-center align-items-center">
                  <Col
                    md={8}
                    xs={12}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <div className="text-center w-100">
                      <h4
                        style={{
                          color: "#3b1811",
                          fontSize: "clamp(20px, 3vw, 32px)",
                        }}
                      >
                        I am...
                      </h4>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          width: "100%",
                          marginTop: "1rem",
                        }}
                      >
                        <div
                          style={{
                            display: "inline-flex",
                            justifyContent: "center",
                            borderBottom: "3px solid #BCBAB8",
                            paddingBottom: "10px",
                            maxWidth: "100%",
                          }}
                        >
                          <h1
                            className="headertext"
                            style={{
                              margin: 0,
                              color: "#3b1811",
                            }}
                          >
                            <StaggeredText text={"Fardin Mridul"} />
                          </h1>
                        </div>
                      </div>

                      {/* Animated Title Container */}
                      <div
                        style={{
                          // NEW FEATURE: Fluid margin scales from 1rem (mobile) to 1.5rem (large screens)
                          marginTop: "clamp(0.7rem, 2.5vw, 1.5em)",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          overflow: "hidden",
                        }}
                      >
                        <AnimatePresence mode="wait">
                          <motion.h2
                            key={activeTitle}
                            variants={TitleVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            whileHover={{ filter: "brightness(130%)" }}
                            style={{
                              color: "#3b1811",
                              fontSize: "clamp(22px, 4vw, 32px)",
                              fontWeight: "700",
                              textAlign: "center",
                              width: "100%",
                              cursor: "default",
                              margin: 0,
                            }}
                          >
                            {activeTitle}
                          </motion.h2>
                        </AnimatePresence>
                      </div>

                      {/* Arrow & Journey Text */}
                      <div
                        className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-3 text-center"
                        style={{ gap: "15px" }}
                      >
                        <h5
                          className="mb-0"
                          style={{
                            color: "#BCBAB8",
                            fontSize: "clamp(16px, 2.5vw, 22px)",
                            // Reverted: whiteSpace property removed to allow natural responsive behavior
                          }}
                        >
                          Let's start our epic journey together 🌌
                        </h5>
                        <motion.img
                          onClick={() => scrollTarget("about")}
                          whileHover={{ filter: "brightness(140%)" }}
                          style={{
                            width: "60px",
                            cursor: "pointer",
                            transition: "filter 0.3s ease",
                          }}
                          src={Arrow}
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </SectionYPos>

          {/* Social Links securely anchored to the bottom of the sticky viewport */}
          <div
            className="position-absolute w-100 d-flex justify-content-center align-items-center"
            style={{ bottom: "30px", left: 0, gap: "20px" }}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSec;
