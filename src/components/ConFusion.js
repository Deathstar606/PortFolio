import React from "react";
import { Container, Row, Col, Button } from 'reactstrap';
import CodeImg from "../images/Case Images/Mern.png"
import Rect from "../images/Comprised Off/React.png"
import Mongo from "../images/Comprised Off/Mongo.png"
import Node from "../images/Comprised Off/Node.png"

function Descreption() {
    return(
        <Container className="lg-container">
            <h2 className="headerdec mt-5">What is ConFusion...</h2>
            <Col md={6} className="mt-3">
                <p>ConFusion is a fullstack web application.Which is based on React, NodeJs and MongoDB.It was part of the fullstack course completed on coursera under Hong Kong University of Science and Technology (HKUST).</p>
            </Col>
            <Row className="mt-5 mb-4">
                <Col md={2} xs={4}>
                    <div className="d-flex justify-content-center">
                        <img src={Rect} alt="Rect" className="skill"/>
                    </div>
                    <h5 className="d-flex justify-content-center mt-2">React</h5>
                </Col>
                <Col md={2} xs={4}>
                    <div className="d-flex justify-content-center">
                        <img src={Node} alt="Node" className="skill"/>
                    </div>
                    <h5 className="d-flex justify-content-center mt-2">Node JS</h5>
                </Col>
                <Col md={2} xs={4}>
                    <div className="d-flex justify-content-center">
                        <img src={Mongo} alt="Node" className="skill"/>
                    </div>
                    <h5 className="d-flex justify-content-center mt-2">Mongo DB</h5>
                </Col>
            </Row>
        </Container>
    )
}

const ConFusion = () => {

    return(
        <>
          <div style={{height: "65vh", backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${CodeImg})`, backgroundPosition:"center 20%", backgroundAttachment: "fixed"}}>
                <div className="jumbotron">
                    <Container className="lg-container">
                        <Row className="mt-4">
                            <Col sm={12} md={6} className="section-hero-data">
                                <h1>ConFusion</h1>
                                <p>Fullstack Web Application</p>                    
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                            <a href="https://github.com/Deathstar606/ConFusion_Front" target="_blank"><Button className="butt">Github</Button></a> 
                            </Col>
                        </Row>
                    </Container>
                </div>
          </div>
          <Descreption/>
        </>
    );
}

export default ConFusion;