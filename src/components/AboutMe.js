import { Container, Row, Col } from "reactstrap";
import { SectionXPos, SectionXNeg, StaggeredText } from "./Animations";
import { useInView as InObs } from "react-intersection-observer";
import {motion} from "framer-motion"

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
 
function AboutMe () {
    const [ref, inView] = InObs({
        threshold: 0.5,
        triggerOnce: true 
      });

    return (
        <Container style={{maxWidth: "95%"}}>
              <h2 className="headerdec pt-5 pb-5" style={{color: "#DD6410", position: "relative", display:"inline-block", overflow: "hidden"}}>
                  <StaggeredText text={"Know Me..."}></StaggeredText>
                  <motion.div
                      ref={ref}
                      variants={SliderRev}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
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
            <Row style={{padding: "5vh 0px 5vh 0px"}}>
                <Col md={4} className="pb-4">
                    <div className="embed-responsive embed-responsive-16by9" style={{ borderRadius: '15px' }}>
                        <iframe src="https://drive.google.com/file/d/14XdYlzpEwsEc-TvDc8EHmJALQUKdfsAo/preview" width="640" height="480" allow="autoplay"></iframe>
                    </div>
                </Col>
                <Col className="d-flex align-items-center border-right pb-4" md={4} style={{color: "#BCBAB8", fontWeight: "400", fontSize: "20px"}}>
                    <SectionXNeg>
                        I am a fresher in the aspect of taking profesional projects.
                        I have never achived or learnt anything easily, rather I have seen that
                        I need more time and effort to achive something, than the people beside
                        me.Through these hardships I realized how stubburn I am, the never giving
                        up mentality, the unyielding patience and the sheer will to never lose my
                        focus until I have reached my goal.    
                    </SectionXNeg>
                </Col>
                <Col md={4} style={{color: "#BCBAB8", fontWeight: "400", fontSize: "20px", overflow: "hidden"}}>
                    <SectionXPos>
                        <div>
                            <h3 style={{ fontWeight: "500", color: "#FF6100" }}>Core Competencies</h3>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item bg-transparent text-BCBAB8 border-BCBAB8">
                                        High work ethic, not able to rest until I am satisfied with my progress. 
                                    </li>
                                    <li className="list-group-item bg-transparent text-BCBAB8 border-BCBAB8">
                                        Quick learner, easily able to adapt to new situations and thrive in dynamic work environments.
                                    </li>
                                    <li className="list-group-item bg-transparent text-BCBAB8 border-BCBAB8">
                                        Skilled problem solver, finding out new ways of thinking and implementing the best solution.
                                    </li>
                                </ul>
                        </div>
                    </SectionXPos>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutMe;