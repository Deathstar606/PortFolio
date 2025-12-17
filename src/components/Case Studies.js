import { useState, useRef } from "react";
import { Container, Button } from "react-bootstrap";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { StaggeredText } from "./Animations";
import Rect from "../images/Comprised Off/React.png";
import Json from "../images/Comprised Off/Json.png";
import fire from "../images/Comprised Off/fire.png";
import Glass from "../images/Case Logo/GlassCo.png";
import mongo from "../images/Comprised Off/Mongo.png";
import wp from "../images/Skill_Icons/icons8-wordpress-50.png";
import ConFu from "../images/Case Logo/ConFusion.png";
import Codex from "../images/Case Logo/16353_3867287_580791_image.jpg";
import Digi from "../images/Case Logo/Digixwhitelogo.png";
import Vergo from "../images/Case Logo/Vergo.png";
import Gren from "../images/Case Logo/GALAXY_WEBSITE_Transparent.svg";
import Velou from "../images/Case Logo/Velou.ico";
import Techno from "../images/Case Logo/TechnoWave.jpg";
import MediaQuery from "react-responsive";

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
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 },
};

function HovRev({ text, text2, src, src1, src2, link, to }) {
  const [yeet, setYeet] = useState(false);

  const handleYeet = () => {
    setYeet(true);
  };

  const handleMouseLeave = () => {
    setYeet(false);
  };

  return (
    <motion.div
      className="border-bottom border-top case-sec"
      onMouseEnter={handleYeet}
      onMouseLeave={handleMouseLeave}
    >
      {/* First Column */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flex: "1",
        }}
      >
        <img style={{ height: "30px", width: "30px" }} src={src1} />
        <img style={{ height: "30px", width: "30px" }} src={src2} />
        <div className="pl-4">
          <h1
            style={{
              fontWeight: "520",
              fontSize: "clamp(25px, 4vw, 100px)",
              margin: 0,
            }}
          >
            {text}
          </h1>
          <p>{text2}</p>
        </div>
      </div>

      {/* Second Column */}
      {/*         <div style={{ flex: "1", textAlign: "left" }}>
          <h4
            style={{
              fontSize: "clamp(14px, 1vw, 100px)",
              margin: 0,
            }}
            className="pl-2 pr-1"
          >
            
          </h4>
        </div> */}

      {/* Third Column */}
      <div style={{ flex: "1", textAlign: "right" }}>
        {link ? (
          <Button className="btn-dark text-white">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Launch
            </a>
          </Button>
        ) : (
          <Button className="btn-dark text-white">
            <Link to={to} style={{ color: "inherit", textDecoration: "none" }}>
              Show
            </Link>
          </Button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {yeet && (
          <motion.div
            variants={Appear}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: "absolute",
              top: -100,
              left: "15%",
              zIndex: 1,
            }}
          >
            <MediaQuery maxWidth={639}>
              <img
                style={{
                  width: "200px",
                  borderRadius: "20px",
                }}
                src={src}
              />
            </MediaQuery>
            <MediaQuery minWidth={640}>
              <img
                style={{
                  width: "300px",
                  borderRadius: "20px",
                }}
                src={src}
              />
            </MediaQuery>
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
    <>
      <Container style={{ maxWidth: "95%" }}>
        <h2
          className="headerdec pt-5 pb-5"
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
              top: 0,
              bottom: -7,
              background: "#A9A9A9",
              zIndex: 20,
            }}
          />
        </h2>
      </Container>
      <HovRev
        text="ConFusion"
        text2="Restaurant Application"
        src={ConFu}
        src1={Rect}
        src2={mongo}
        link={"https://deathstar606.github.io/ConFusion/#/home"}
      />
      <HovRev
        text="Galaxy Reno"
        text2="Renovation Corporation"
        src={Gren}
        src1={Rect}
        src2={mongo}
        link={"https://www.galaxyhomesolutions.ca/#/home"}
      />
      <HovRev
        text="Veloura"
        text2="Ecommerce Web Application"
        src={Velou}
        src1={Rect}
        src2={mongo}
        link={"https://www.velourabd.com/"}
      />
      <HovRev
        text="Digix"
        text2="Ongoing project"
        src={Digi}
        src1={Rect}
        src2={Json}
        link={"https://deathstar606.github.io/Digix/#/home"}
      />
      <HovRev
        text="VerGo"
        text2="Clothing Brand App"
        src={Vergo}
        src1={Rect}
        src2={fire}
        link={"https://deathstar606.github.io/VerGo/#/home"}
      />
      <HovRev
        text="GlassCo"
        text2="Eyewear Store App"
        src={Glass}
        src1={Rect}
        src2={mongo}
        link={"https://deathstar606.github.io/GlassCo/#/home"}
      />
      <HovRev
        text="TechnoWave"
        text2="Project Built on WordPress"
        src={Techno}
        src1={wp}
        to={"/techno-wave"}
      />
      <HovRev
        text="Codex"
        text2="Project for varsity"
        src={Codex}
        src1={Rect}
        src2={Json}
        to={"/codex"}
      />
    </>
  );
}

export default RenderItem;
