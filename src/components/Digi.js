import React from "react";
import { Container, Row, Col, Button } from 'reactstrap';
import { motion } from "framer-motion";
import CodeImg from "../images/Case Images/Digi.png"
import Rect from "../images/Comprised Off/React.png"

function Descreption() {
    return(
        <Container className="lg-container">
            <h2 className="headerdec mt-5">What is Digix...</h2>
            <Col md={6} className="mt-3">
                <p>Digix is a Frontend web application based on React.It is a web application for a digital marketing agency.(Work in Progress)</p>
            </Col>
            <Row className="mt-5 mb-4">
                <Col md={2} xs={4}>
                    <div className="d-flex justify-content-center">
                        <img src={Rect} alt="Rect" className="skill"/>
                    </div>
                    <h5 className="d-flex justify-content-center mt-2">React</h5>
                </Col>
            </Row>
        </Container>
    )
}

const Digi = () => {

    return(
        <motion.div
        transition={{delay: 0.2, duration: 1, type: "tween", ease: "easeIn"}}
        exit= {{x: -1000, opacity: 0}}>
          <div style={{height: "65vh", backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${CodeImg})`, backgroundPosition:"center 20%", backgroundAttachment: "fixed"}}>
                <div className="jumbotron">
                    <Container className="lg-container">
                        <Row className="mt-4">
                            <Col sm={12} md={6} className="section-hero-data">
                                <h1>Digix</h1>
                                <p>Frontend Web Application</p>                    
                            </Col>
                        </Row>
                    </Container>
                </div>
          </div>
          <Descreption/>
        </motion.div>
    );
}

export default Digi;