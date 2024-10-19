import {useRef} from "react";
import { Container, Row, Col, CardImg } from "reactstrap";
import { StaggeredText } from "./Animations";
import {motion, useInView} from "framer-motion"
import fr from "../images/certification/icons8-frontend-64.png"
import br from "../images/certification/icons8-backend-development-96.png"
import ui from "../images/certification/icons8-ui-96.png"
import pr from "../images/certification/icons8-programing-64.png"

const SliderRev = {
    hidden : {
      left: 0
    },
    visible : {
      left: "100%",
      transition: {
        duration: 1,
        ease: "easeIn"
      }
    }
  }

function Cert () {
    const ref = useRef(null);
    const isInview = useInView(ref, { once: true });

    return (
        <Container style={{maxWidth: "95%"}} className="pb-5">
            <h2 className="headerdec pt-5 pb-5" style={{color: "#DD6410", position: "relative", display:"inline-block", overflow: "hidden"}}>
                <StaggeredText text={"Services"}></StaggeredText>
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
            <Container style={{maxWidth: "95%", color: "#DD6410"}}>
                <Row className="d-flex justify-content-center pt-4 pb-4">
                    <Col md={3} xs={6} className="text-center mb-3" style={{padding: '10px 0px 10px 0px', borderRadius: "25px"}}>
                        <h5 style={{fontWeight: "600", fontSize: "clamp(20px, 1vw, 40px)"}}>Frontend Development</h5>
                        <CardImg style={{width: "120px"}} src={fr}/>
                    </Col>
                    <Col md={3} xs={6} className="text-center mb-3" style={{padding: '10px 0px 10px 0px', borderRadius: "25px" }}>
                        <h5 style={{fontWeight: "600", fontSize: "clamp(20px, 1vw, 40px)"}}>Backend Development</h5>
                        <CardImg style={{width: "120px"}} src={br}/>
                    </Col>
                    <Col md={3} xs={6} className="text-center mb-3" style={{padding: '10px 0px 10px 0px', borderRadius: "25px" }}>
                        <h5 style={{fontWeight: "600", fontSize: "clamp(20px, 1vw, 40px)"}}>UI/UX Design</h5>
                        <CardImg style={{width: "120px"}} src={ui}/>
                    </Col>
                    <Col md={3} xs={6} className="text-center mb-3" style={{padding: '10px 0px 10px 0px', borderRadius: "25px" }}>
                        <h5 style={{fontWeight: "600", fontSize: "clamp(20px, 1vw, 40px)"}}>Programing Course</h5>
                        <CardImg style={{width: "120px"}} src={pr}/>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Cert;