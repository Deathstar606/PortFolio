import {useState, useRef} from "react";
import { Container, Button } from "react-bootstrap";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { StaggeredText } from "./Animations";
import Rect from "../images/Comprised Off/React.png"
import Json from "../images/Comprised Off/Json.png"
import fire from "../images/Comprised Off/fire.png"
import mongo from "../images/Comprised Off/Mongo.png"
import Mern from "../images/Case Logo/8901669.jpg"
import Codex from "../images/Case Logo/16353_3867287_580791_image.jpg"
import Digi from "../images/Case Logo/Digixwhitelogo.png"
import Vergo from "../images/Case Logo/Vergo.png"

const SliderRev = {
    hidden : {
      left: 0
    },
    visible : {
      left: "100%",
      transition: {
        duration: 1.2,
        ease: "easeIn"
      }
    }
  }

  const Appear = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 }
  };
  
  function HovRev({text, text2, src, src1, src2, link, to}) {
    const [yeet, setYeet] = useState(false);
  
    const handleYeet = () => {
      setYeet(true);
    };
  
    const handleMouseLeave = () => {
      setYeet(false);
    };
  
    return (
      <motion.div
        className="border-bottom border-top"
        style={{ backgroundColor: "#BCBAB8", position: "relative", display: "flex", alignItems: "center" }}
        onMouseEnter={handleYeet}
        onMouseLeave={handleMouseLeave}
      >
        <img style={{height: "30px", width: "30px", marginLeft: "1%" }}  src={src1}/>
        <img style={{height: "30px", width: "30px", marginLeft: "1%" }}  src={src2}/>
        <h1 style={{fontWeight: "520", fontSize: "clamp(25px, 4vw, 100px)", padding: "20px"}}>{text}</h1>
        <h4 style={{fontSize: "clamp(14px, 1vw, 100px)"}} className="mt-2 pr-1">{text2}</h4>
        {link ? (
        <Button className="ml-auto mr-4 btn-dark text-white">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            Launch
          </a>
        </Button>
      ) : (
        <Button className="ml-auto mr-4 btn-dark text-white">
          <Link to={to} style={{ color: 'inherit', textDecoration: 'none' }}>
            Show
          </Link>
        </Button>
      )}
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
                zIndex: 1
              }}
            >
              <img style={{width: "300px", borderRadius: "20px"}} src={src}/>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

function RenderItem() {

  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

    return(
            <>
            <Container style={{maxWidth: "95%"}}>
              <h2 className="headerdec pt-5 pb-5" id="casestu" style={{color: "#DD6410", position: "relative", display:"inline-block", overflow: "hidden"}}>
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
                          zIndex: 20
                      }}
                      />
              </h2>
            </Container>
            <HovRev text="Codex" text2="Project for varsity" src={Codex} src1={Rect} src2={Json} to={"/codex"}/>
            <HovRev text="VerGo" text2="Personal Project" src={Vergo} src1={Rect} src2={fire} link={"https://deathstar606.github.io/VerGo/#/home"}/>
            <HovRev text="ConFusion" text2="Course Project" src={Mern} src1={Rect} src2={mongo} to={"/confusion"}/>
            <HovRev text="Digix" text2="Ongoing project" src={Digi} src1={Rect} src2={Json} to={"/digi"}/>
            </>                   
    );
}

export default RenderItem;