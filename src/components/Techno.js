import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { motion } from "framer-motion";
import wordP from "../images/Skill_Icons/icons8-wordpress-50.png";
import dem from "../images/demo.mp4";
import "./video.css";

const VideoBackground = ({ videoSource, children }) => (
  <div className="video-container">
    <video autoPlay loop muted>
      <source src={videoSource} type="video/mp4" />
    </video>
    <h1 className="centered-text">{children}</h1>
  </div>
);

function Descreption() {
  return (
    <Container className="lg-container">
      <h2 className="headerdec mt-5">What is TechnoWave...</h2>
      <Col md={6} className="mt-3">
        <p>
          TechnoWave is a dynamic WordPress application designed to showcase the
          latest laptops and prebuilt desktops. It features a sleek, modern
          interface that allows users to explore products with ease. The site is
          built using WordPress, leveraging its powerful content management
          capabilities to provide a seamless browsing experience. It mainly uses
          Woocommerce for product management and sales.
        </p>
      </Col>
      <Row className="mt-5 mb-4">
        <Col md={2} xs={4}>
          <div className="d-flex justify-content-center">
            <img src={wordP} alt="Rect" className="skill" />
          </div>
          <h5 className="d-flex justify-content-center mt-2">WordPress</h5>
        </Col>
      </Row>
    </Container>
  );
}

const TechnoWave = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ x: -1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 1000, opacity: 0 }}
      transition={{
        duration: 0.5,
        type: "tween",
        ease: "easeInOut",
      }}
    >
      <VideoBackground videoSource={dem} children={"TechnoWave"}>
        <h1 style={{ fontSize: "clamp(44px, 4vw, 70px)" }}>TechnoWave</h1>
        <p>WordPress Application</p>
      </VideoBackground>
      <Descreption />
    </motion.div>
  );
};

export default TechnoWave;
