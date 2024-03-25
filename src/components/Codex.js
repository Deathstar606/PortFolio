import React from "react";
import { Container, Row, Col, Button } from 'reactstrap';
import CodeImg from "../images/Case Images/Codex.png"
import Rect from "../images/Comprised Off/React.png"
import Json from "../images/Comprised Off/Json.png"

function Descreption() {
    return(
        <Container className="lg-container">
            <h2 className="headerdec mt-5">What is Codex...</h2>
            <Col md={6} className="mt-3">
                <p>Codex is a Frontend Web Application Based on React.Data is fetched via a locally hosted Json Server.With Codex Users Can leave comments or reviews on their favourite movies and games.</p>
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
                        <img src={Json} alt="Json" className="skill"/>
                    </div>
                    <h5 className="d-flex justify-content-center mt-2">Json Server</h5>
                </Col>
            </Row>
        </Container>
    )
}

const Codex = () => {

    return(
        <>
          <div style={{height: "65vh", backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${CodeImg})`, backgroundPosition:"center 20%", backgroundAttachment: "fixed"}}>
                <div className="jumbotron">
                    <Container className="lg-container">
                        <Row className="mt-4">
                            <Col sm={12} md={6} className="section-hero-data">
                                <h1>Codex</h1>
                                <p>Frontend Web Application</p>                    
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <a href="https://github.com/Deathstar606/Codex" target="_blank"><Button className="butt">Github</Button></a>
                            </Col>
                        </Row>
                    </Container>
                </div>
          </div>
          <Descreption/>
        </>
    );
}

export default Codex;