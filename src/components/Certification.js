import React from "react";
import { Container, Row, Col, CardImg } from "reactstrap";
import { StaggeredText } from "./Animations";
import fr from "../images/certification/icons8-frontend-64.png"
import br from "../images/certification/icons8-backend-development-96.png"
import ui from "../images/certification/icons8-ui-96.png"
import pr from "../images/certification/icons8-programing-64.png"

function Cert () {
    return (
        <Container style={{maxWidth: "95%"}} className="pb-5">
            <h2 className="headerdec mt-5 mb-5" style={{color: "#DD6410"}}><StaggeredText text={"Services"}></StaggeredText></h2>
            <Container style={{maxWidth: "85%", color: "#DD6410"}}>
                <Row className="d-flex justify-content-center">
                    <Col md={3} xs={12} className="text-center mb-3" style={{ border: '3px solid #ccc', padding: '10px 0px 10px 0px', borderRadius: "25px" }}>
                        <h5>Frontend Development</h5>
                        <CardImg style={{height: "60px", width: "60px"}} src={fr}/>
                    </Col>
                    <Col md={3} xs={12} className="text-center mx-5 mb-3" style={{ border: '3px solid #ccc', padding: '10px 0px 10px 0px', borderRadius: "25px" }}>
                        <h5>Backend Development</h5>
                        <CardImg style={{height: "60px", width: "60px"}} src={br}/>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col md={3} xs={12} className="text-center mb-3" style={{ border: '3px solid #ccc', padding: '10px 0px 10px 0px', borderRadius: "25px" }}>
                        <h5>UI/UX Design</h5>
                        <CardImg style={{height: "60px", width: "60px"}} src={ui}/>
                    </Col>
                    <Col md={3} xs={12} className="text-center mb-3 mx-5" style={{ border: '3px solid #ccc', padding: '10px 0px 10px 0px', borderRadius: "25px" }}>
                        <h5>Programing Course</h5>
                        <CardImg style={{height: "60px", width: "60px"}} src={pr}/>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Cert;