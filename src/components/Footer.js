import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Contact from './ContactMe';
import Fb from "../images/Socials/facebook dark.png"
import Dis from "../images/Socials/discord dark.png"
import Lin from "../images/Socials/linkedin dark.png"

function Footer() {
    return(
        <div style={{backgroundColor: "darkgrey"}}>
            <Contact/>
            <Container className="lg-container">
                <Row>
                    <Col xs={4} className='d-flex justify-content-center p-5'>Fardin Mridul</Col>
                    <Col xs={3}></Col>
                    <Col xs={4} className='d-flex justify-content-center p-5'>
                        <a href="https://www.facebook.com/profile.php?id=100007104457895" target="_blank"><img style={{height: "40px", width: "40px" }}  src={Fb} alt="facebook" /></a>
                        <a href="https://www.linkedin.com/in/fardin-rahman-2311942bb" target="_blank"><img style={{height: "40px", width: "40px" }} className='ml-2 mr-2' src={Lin} alt="linkedin" /></a>
                        <a href="/"><img style={{height: "40px", width: "40px" }}  src={Dis} alt="discord" /></a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer