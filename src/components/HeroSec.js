import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { SectionYPos } from "./Animations";
import { StaggeredText } from "./Animations";
import Head from "../images/Header.png"
import Amper from "../images/ampersand.png"
import Fb from "../images/Socials/facebook light.png"
import Lin from "../images/Socials/linkedin light.png"
import Dis from "../images/Socials/discord light.png"
import Arrow from "../images/arrow.gif"

const HeroSec = () => {

    return(
        <>
          <div className="headerback">
            <SectionYPos>
                <div className="jumbotron">
                    <Container className="lg-container">
                        <Row className="mt-4">
                            <Col md={6} xs={12} className="d-flex justify-content-center align-items-center">
                                <div>
                                    <h6 className="text-white">I am...</h6>
                                    <h1><StaggeredText text={"Fardin Rahman"}></StaggeredText></h1>
                                    <h2><span style={{color: "white"}}> Fullstack </span>developer</h2>
                                    <h2><img style={{color: "white", height: "40px", width: "40px", marginBottom: "10px"}} src={Amper}/><span style={{color: "white"}}> Instructor in </span><span> Python,C++ </span></h2>
                                    <h5 className="mt-4 text-white">Let's start our epic journey together 😁</h5>
                                    <a href="https://www.facebook.com/profile.php?id=100007104457895" target="_blank"><img style={{height: "40px", width: "40px", marginTop: "15px", marginRight: "10px" }}  src={Fb} alt="Facebook" /></a>
                                    <a href="https://www.linkedin.com/in/fardin-rahman-2311942bb" target="_blank"><img style={{height: "40px", width: "40px", marginTop: "15px", marginRight: "10px" }}  src={Lin} alt="LinkedIn" /></a>
                                    <a href="/"><img style={{height: "40px", width: "40px", marginTop: "15px", marginRight: "10px" }}  src={Dis} alt="Discord" /></a>
                                    <img className="arrow" src={Arrow} alt="arrow"/>
                                </div>                 
                            </Col>
                            <Col md={6} xs={12} className="d-flex justify-content-center">
                                <img className="headerimg" src={Head}/>
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