import React from "react";
import { Container, Row, Col } from "reactstrap";
import { SectionYNeg, StaggeredText } from "./Animations";
 
function AboutMe () {
    return (
        <Container style={{maxWidth: "95%"}}>
            <h2 className="headerdec pt-5 mb-5" style={{color: "#DD6410"}}><StaggeredText text={"About Me"}></StaggeredText></h2>
            <Row className="d-flex justify-content-center">
                <Col md={6} xs={12}>
                    <div className="embed-responsive embed-responsive-16by9" style={{ borderRadius: '15px' }}>
                        <iframe src="https://drive.google.com/file/d/14XdYlzpEwsEc-TvDc8EHmJALQUKdfsAo/preview" width="640" height="480" allow="autoplay"></iframe>
                    </div>
                    <SectionYNeg>
                            <div className="d-flex justify-content-center" style={{paddingTop: "2%"}}>
                                <p style={{fontSize: "20px", color: "#BCBAB8"}}>I am here to make your digital imagination come to fruition.To be that guiding hand if your feeling stuck.</p>
                            </div>
                    </SectionYNeg>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutMe;