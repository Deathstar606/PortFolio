import {useRef} from "react";
import { Container, Row, Col, CardImg } from "react-bootstrap";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { StaggeredText } from "./Animations";
import Mern from "../images/Case Logo/8901669.jpg"
import Codex from "../images/Case Logo/16353_3867287_580791_image.jpg"
import Digi from "../images/Case Logo/Digixwhitelogo.png"
import Vergo from "../images/Case Logo/Vergo.png"
import "./card.css"

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
            style={{
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}>
        {children}
      </div>
    </section>
  );
}

function RenderItem() {

    return(
            <>
            <Container style={{maxWidth: "97%"}}>
                <h2 className="headerdec mt-5" style={{color: "#DD6410"}} id="casestu"><StaggeredText text={"Case Studies"}></StaggeredText></h2>
                <Row className="mt-5">
                    <Col md={3} className="px-2">
                        <Section>
                        <div className="curd card-container">
                            <CardImg src={Mern}/>
                                <div className="curd-body">
                                <h1 className="curd-title">ConFusion</h1>
                                    <p className="curd-sub-title">Personal project</p>
                                    <p className="curd-info">Fullstack Web Application *MERN*</p>
                                    <Link to= {`/confusion`}>
                                        <div className="curd-button" >View</div>
                                    </Link>
                                </div>
                        </div>
                        </Section>
                    </Col>
                    <Col md={3} className="px-2">
                        <Section>
                        <div className="curd card-container">
                            <CardImg src={Codex}/>
                                <div className="curd-body">
                                <h1 className="curd-title">Codex</h1>
                                    <p className="curd-sub-title">Personal Project</p>
                                    <p className="curd-info">Frontend Web Application *React*</p>
                                    <Link to= {`/codex`}>
                                        <div className="curd-button" >View</div>
                                    </Link>
                                </div>
                        </div>
                        </Section>
                    </Col>
                    <Col md={3} className="px-2">
                        <Section>
                        <div className="curd card-container">
                            <CardImg src={Digi}/>
                                <div className="curd-body">
                                <h1 className="curd-title">Digix</h1>
                                    <p className="curd-sub-title">Digital Marketing Agency</p>
                                    <p className="curd-info">Frontend Web Application *React*</p>
                                    <Link to= {`/digi`}>
                                        <div className="curd-button" >View</div>
                                    </Link>
                                </div>
                        </div>
                        </Section>
                    </Col>
                    <Col md={3} className="px-2">
                        <Section>
                        <div className="curd card-container">
                            <CardImg src={Vergo}/>
                                <div className="curd-body">
                                <h1 className="curd-title">Vergo</h1>
                                    <p className="curd-sub-title">Digital Marketing Agency</p>
                                    <p className="curd-info">Frontend Web Application *React*</p>
                                    <a href="https://deathstar606.github.io/VerGo/#/home" target="_blank">
                                        <div className="curd-button" >Launch</div>
                                    </a>
                                </div>
                        </div>
                        </Section>
                    </Col>                  
                </Row>
            </Container>
            </>                   
    );
}

export default RenderItem;