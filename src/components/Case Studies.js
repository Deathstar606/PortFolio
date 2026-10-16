import { useState, useRef } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";
import { StaggeredText } from "./Animations";
import Rect from "../images/Comprised Off/React.png";
import Json from "../images/Comprised Off/Json.png";
import fire from "../images/Comprised Off/fire.png";
import mongo from "../images/Comprised Off/Mongo.png";
import wp from "../images/Skill_Icons/icons8-wordpress-50.png";
import ConFu from "../images/Case Logo/ConFusion.png";
import Digi from "../images/Case Logo/Digixwhitelogo.png";
import Vergo from "../images/Case Logo/Vergo.png";
import Gren from "../images/Case Logo/galaxyreno.png";
import Velou from "../images/Case Logo/velou.png";
import Techno from "../images/Case Logo/TechnoWave.jpg";
import { useMediaQuery } from "react-responsive";

const case_disc = [
  {
    text: "ConFusion",
    text2: "Restaurant Application",
    src: ConFu,
    src1: Rect,
    src2: mongo,
    link: "https://deathstar606.github.io/ConFusion/#/home",
    key_feat:
      "Interactive dish catalog, reservation management, dynamic customer feedback system, and full responsive menu filtering.",
    tech_stack: "React, Redux, Node.js, Express, MongoDB, Bootstrap",
  },
  {
    text: "Galaxy Reno",
    text2: "Renovation Corporation",
    src: Gren,
    src1: Rect,
    src2: mongo,
    link: "https://galaxyreno-git-main-deathstar606s-projects.vercel.app/#/home",
    key_feat:
      "Full-service renovation portfolio, project estimation requests, modern image gallery showcase, and client consultation bookings.",
    tech_stack: "React, Node.js, MongoDB, Framer Motion, Bootstrap",
  },
  {
    text: "Veloura",
    text2: "Ecommerce Web Application",
    src: Velou,
    src1: Rect,
    src2: mongo,
    link: "https://www.velourabd.com/",
    key_feat:
      "Modern e-commerce storefront featuring real-time product filtering, secure multi-step cart & checkout, dynamic inventory tracking, and client account management.",
    tech_stack: "React, Redux Toolkit, Node.js, Express, MongoDB, RESTful APIs",
  },
  {
    text: "Digix",
    text2: "Ongoing project",
    src: Digi,
    src1: Rect,
    src2: Json,
    link: "https://deathstar606.github.io/Digi_Port/#/home",
    key_feat:
      "Digital agency platform with dynamic service showcases, client engagement workflows, and interactive service proposal views.",
    tech_stack: "React, JSON Server, Framer Motion, CSS Modules",
  },
  {
    text: "VerGo",
    text2: "Clothing Brand App",
    src: Vergo,
    src1: Rect,
    src2: fire,
    link: "https://deathstar606.github.io/VerGo/#/home",
    key_feat:
      "Curated apparel collections, real-time Firebase cloud data synchronization, user authentication, and responsive product discovery.",
    tech_stack: "React, Firebase Realtime Database, Firestore, Bootstrap",
  },
  {
    text: "TechnoWave",
    text2: "Project Built on WordPress",
    src: Techno,
    src1: wp,
    src2: null,
    to: "/techno-wave",
    key_feat:
      "Dynamic tech store application designed for custom PC builds and laptops, featuring WooCommerce product management, customizable carts, and category sorting.",
    tech_stack: "WordPress, WooCommerce, PHP, Elementor, Custom CSS",
  },
];

const SliderRev = {
  hidden: {
    left: 0,
  },
  visible: {
    left: "100%",
    transition: {
      duration: 1.2,
      ease: "easeIn",
    },
  },
};

const Appear = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.6,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

function HovRev({
  text,
  text2,
  src,
  src1,
  src2,
  link,
  to,
  key_feat,
  tech_stack,
}) {
  const isMobile = useMediaQuery({ maxWidth: 639 });
  const [yeet, setYeet] = useState(false);
  const [btnHover, setBtnHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseEnter = (e) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.jump(x);
    mouseY.jump(y);
    setYeet(true);
  };

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setYeet(false);
  };

  const toggleOpen = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <motion.div
      className="case-sec"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        y: yeet && !isMobile ? -4 : 0,
        boxShadow:
          yeet && !isMobile
            ? "0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.3)"
            : "0 0px 0px rgba(0, 0, 0, 0)",
        zIndex: yeet ? 1000 : 1,
      }}
      transition={{
        y: { duration: 0.25, ease: "easeOut" },
        boxShadow: { duration: 0.25, ease: "easeOut" },
      }}
      style={{
        position: "relative",
        zIndex: yeet ? 1000 : 1,
        flexDirection: "column",
        alignItems: "stretch",
        padding: 0,
      }}
    >
      {/* Top Header Row of the Case Study Item */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
          width: "100%",
        }}
      >
        {/* Left Column: Tech Icons & Title */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "3px",
            flex: "1",
            minWidth: 0,
          }}
        >
          {src1 && (
            <img
              style={{ height: "30px", width: "30px", flexShrink: 0 }}
              src={src1}
              alt=""
            />
          )}
          {src2 && (
            <img
              style={{ height: "30px", width: "30px", flexShrink: 0 }}
              src={src2}
              alt=""
            />
          )}
          <div className="pl-2 pl-md-4">
            <motion.h1
              animate={{
                color: yeet ? "#DD6410" : "#000000",
                scale: yeet && !isMobile ? 1.04 : 1,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              style={{
                fontWeight: "520",
                fontSize: "clamp(18px, 4vw, 100px)",
                margin: 0,
                paddingTop: "14px",
                paddingBottom: "14px",
                display: "inline-block",
                transformOrigin: "left center",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
              onClick={toggleOpen}
            >
              {text}
            </motion.h1>
          </div>
        </div>

        {/* Right Column: Details Expand Button */}
        <div style={{ flexShrink: 0, textAlign: "right" }}>
          <Button
            className="btn-dark text-white d-flex align-items-center"
            onClick={toggleOpen}
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            style={{
              padding: "7px 16px",
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "0.4px",
              borderRadius: "6px",
              gap: "8px",
              border: "none",
              backgroundColor: "#181818",
              cursor: "pointer",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.25)",
            }}
          >
            <span>Details</span>
            <motion.i
              className="fa fa-chevron-down"
              aria-hidden="true"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ fontSize: "12px", display: "inline-block" }}
            />
          </Button>
        </div>
      </div>

      {/* Downward Expandable Details Pane */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.35, ease: "easeInOut" },
                opacity: { duration: 0.25, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                opacity: { duration: 0.15 },
                height: { duration: 0.3, ease: "easeInOut" },
              },
            }}
            style={{
              overflow: "hidden",
              backgroundColor: "#202020",
              color: "#f0f0f0",
              borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            <div
              style={{
                padding: "20px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              {key_feat && (
                <div>
                  <span
                    style={{
                      color: "#DD6410",
                      fontSize: "0.85rem",
                      fontWeight: "700",
                      letterSpacing: "0.8px",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    Key Features
                  </span>
                  <p
                    style={{
                      color: "#d4d4d4",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {key_feat}
                  </p>
                </div>
              )}

              {tech_stack && (
                <div>
                  <span
                    style={{
                      color: "#DD6410",
                      fontSize: "0.85rem",
                      fontWeight: "700",
                      letterSpacing: "0.8px",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    Tech Stack
                  </span>
                  <p
                    style={{
                      color: "#b0b0b0",
                      fontSize: "0.92rem",
                      lineHeight: "1.5",
                      margin: 0,
                      fontWeight: "500",
                    }}
                  >
                    {tech_stack}
                  </p>
                </div>
              )}

              {/* Launch / Show Action inside the Expanded Pane */}
              <div
                style={{
                  paddingTop: "6px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {link ? (
                  <Button
                    style={{
                      backgroundColor: "#DD6410",
                      borderColor: "#DD6410",
                      color: "#ffffff",
                      fontWeight: "600",
                      padding: "8px 22px",
                      borderRadius: "6px",
                      boxShadow: "0 3px 10px rgba(221, 100, 16, 0.3)",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#c45408";
                      e.currentTarget.style.borderColor = "#c45408";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#DD6410";
                      e.currentTarget.style.borderColor = "#DD6410";
                    }}
                  >
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "inherit",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      Launch{" "}
                      <i className="fa fa-external-link" aria-hidden="true"></i>
                    </a>
                  </Button>
                ) : (
                  <Button
                    style={{
                      backgroundColor: "#DD6410",
                      borderColor: "#DD6410",
                      color: "#ffffff",
                      fontWeight: "600",
                      padding: "8px 22px",
                      borderRadius: "6px",
                      boxShadow: "0 3px 10px rgba(221, 100, 16, 0.3)",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#c45408";
                      e.currentTarget.style.borderColor = "#c45408";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#DD6410";
                      e.currentTarget.style.borderColor = "#DD6410";
                    }}
                  >
                    <Link
                      to={to}
                      style={{
                        color: "inherit",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      Show Case Study →
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop-Only Hover Image Preview Following Cursor */}
      <AnimatePresence>
        {!isMobile && yeet && !btnHover && (
          <motion.div
            variants={Appear}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              x: cursorX,
              y: cursorY,
              pointerEvents: "none",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                transform: "translate(calc(-100% - 20px), -50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pointerEvents: "none",
              }}
            >
              <img
                style={{
                  width: "300px",
                  borderRadius: "10px",
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.6)",
                }}
                src={src}
                alt={text}
              />
              {text2 && (
                <div
                  style={{
                    marginTop: "8px",
                    color: "#ffffff",
                    backgroundColor: "rgba(20, 20, 20, 0.85)",
                    padding: "3px 12px",
                    borderRadius: "6px",
                    fontSize: "14px",
                    fontWeight: "500",
                    textAlign: "center",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {text2}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function RenderItem() {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  return (
    <div style={{ overflow: "hidden" }}>
      <Container style={{ maxWidth: "95%" }}>
        <h2
          className="headerdec pt-3 pb-3"
          id="casestu"
          style={{
            color: "#DD6410",
            position: "relative",
            display: "inline-block",
            overflow: "hidden",
          }}
        >
          <StaggeredText text={"Case Studies"}></StaggeredText>
          <motion.div
            ref={ref}
            variants={SliderRev}
            initial="hidden"
            animate={isInview ? "visible" : "hidden"}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              bottom: -7,
              background: "#A9A9A9",
              zIndex: 20,
            }}
          />
        </h2>
        <div
          className="d-flex justify-content-center flex-column pb-5"
          style={{ width: "fit-content" }}
        >
          <Row className="no-gutters align-items-start flex-nowrap">
            {/* Quote Content */}
            <Col style={{ width: "fit-content" }}>
              <div className="pb-1">
                <h5
                  style={{
                    color: "#DD6410",
                    fontWeight: "500",
                    fontSize: "clamp(0.9rem, 2vw, 1rem)",
                    lineHeight: "1.4",
                    margin: 0,
                  }}
                ></h5>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Mapped Case Studies List */}
      {case_disc.map((item, index) => (
        <HovRev
          key={item.text || index}
          text={item.text}
          text2={item.text2}
          src={item.src}
          src1={item.src1}
          src2={item.src2}
          link={item.link}
          to={item.to}
          key_feat={item.key_feat}
          tech_stack={item.tech_stack}
        />
      ))}
    </div>
  );
}

export default RenderItem;
