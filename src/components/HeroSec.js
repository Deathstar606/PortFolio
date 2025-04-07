import {useState, useEffect} from "react";
import { Container, Row, Col } from 'reactstrap';
import { SectionYPos } from "./Animations";
import { StaggeredText } from "./Animations";
import { motion, AnimatePresence } from "framer-motion"
import Head from "../images/Header.png"
import Amper from "../images/ampersand.png"
import Fb from "../images/Socials/facebook light.png"
import Lin from "../images/Socials/linkedin light.png"
import Dis from "../images/Socials/discord light.png"
import Arrow from "../images/arrow.gif"

const LangVariants = {
    hidden: { opacity: 0, y: -50},
    visible: { opacity: 1, y: 0},
    exit: { opacity: 0, y: 50 }
  };

const headerImg = {
    hidden: { y: 0 },
    visible: {
      y: [10, -10, 10, -10, 10],
      transition: {
        duration: 10,
        ease: "easeInOut", // Can use other easing functions like "linear", "easeOut", etc.
        repeat: Infinity,
        repeatType: "loop",
        delay: 0
      }
    }
};
  
const scrollTarget = (tid) => {
  const element = document.getElementById(tid);
  if (element) {
    const offset = 100; // Set your desired offset here
    const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Get element position
    const offsetPosition = elementPosition - offset; // Adjust for offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}  

function TestHead() {
    const nameArr = ["Python", "C++"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [name, setName] = useState(nameArr[0]);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % nameArr.length);
        setName(nameArr[currentIndex]);
      }, 3000);
  
      return () => clearInterval(intervalId);
    }, [currentIndex, nameArr]);
  
    return (
        <span>
          <AnimatePresence mode="wait">
            <motion.div
              className='ml-2'
              key={name}
              variants={LangVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {name}
            </motion.div>
          </AnimatePresence>
        </span>
    );
  }

const HeroSec = () => {

    return(
        <>
          <div className="headerback">
            <SectionYPos>
                <div className="jumbotron">
                    <Container className="lg-container">
                        <Row className="mt-3">
                            <Col md={6} xs={12} className="d-flex justify-content-center align-items-center">
                                <div className="text-center">
                                    <h6 style={{color: "#BCBAB8"}}>I am...</h6>
                                    <h1><StaggeredText text={"Fardin Rahman"}></StaggeredText></h1>
                                    <h2 style={{color: "#BCBAB8"}}>Fullstack developer</h2>
                                    <h3 className="d-flex"><img className="mr-1" style={{color: "white", height: "40px", width: "40px", marginBottom: "10px"}} src={Amper}/><span style={{color: "#BCBAB8"}}> Instructor in </span><span className="desigt"><TestHead/></span></h3>
                                    <h5 className="mt-2" style={{color: "#BCBAB8"}}>Let's start our epic journey together 😁</h5>
                                    <a href="https://www.facebook.com/profile.php?id=100007104457895" target="_blank"><img style={{height: "40px", width: "40px", marginTop: "15px", marginRight: "10px" }}  src={Fb} alt="Facebook" /></a>
                                    <a href="https://www.linkedin.com/in/fardin-rahman-2311942bb" target="_blank"><img style={{height: "40px", width: "40px", marginTop: "15px", marginRight: "10px" }}  src={Lin} alt="LinkedIn" /></a>
                                    <a href="/"><img style={{height: "40px", width: "40px", marginTop: "15px", marginRight: "10px" }}  src={Dis} alt="Discord" /></a>
                                    <img onClick={() => scrollTarget("about")} style={{width: "80px", cursor: "pointer"}} src={Arrow} alt="arrow"/>
                                </div>                 
                            </Col>
                            <Col md={6} xs={12} className="d-flex justify-content-center">
                                <motion.div 
                                    className="d-flex justify-content-center" style={{width: "100%"}}
                                    variants={headerImg}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <img className="headerimg" src={Head}/>
                                </motion.div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </SectionYPos>
          </div>
        </>
    );
}

export default HeroSec;