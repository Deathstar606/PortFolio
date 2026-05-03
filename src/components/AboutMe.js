import { Container, Row, Col } from "reactstrap";
import { SectionXPos, SectionXNeg, StaggeredText } from "./Animations";
import { useInView as InObs } from "react-intersection-observer";
import { motion } from "framer-motion";
import MediaQuery from "react-responsive";

const SliderRev = {
  hidden: {
    left: 0,
  },
  visible: {
    left: "100%",
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
};

function AboutMe() {
  const [ref, inView] = InObs({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <Container style={{ maxWidth: "95%" }}>
      <h2
        className="headerdec pt-3 pb-3" // You can now safely reduce padding here
        id="about"
        style={{
          color: "#DD6410",
          position: "relative",
          display: "inline-block",
          overflow: "hidden",
          lineHeight: "1.2", // FIX 1: Ensures the bounding box calculates the text height correctly
          marginBottom: "0", // FIX 2: Prevents margin collapse from clipping inside hidden overflow
        }}
      >
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
            bottom: 0, // FIX 3: Removed the -7 hack. It now perfectly aligns with the h2 boundaries
            background: "#A9A9A9",
            zIndex: 20,
          }}
        />
      </h2>
      <Row style={{ padding: "5vh 0px 5vh 0px" }}>
        <Col md={4} className="pb-4">
          <div
            className="embed-responsive embed-responsive-16by9"
            style={{ borderRadius: "15px" }}
          >
            <iframe
              src="https://drive.google.com/file/d/14XdYlzpEwsEc-TvDc8EHmJALQUKdfsAo/preview"
              width="640"
              height="480"
              allow="autoplay"
            ></iframe>
          </div>
        </Col>
        <Col
          className="d-flex align-items-center pb-4" // Removed 'border-right' class
          md={4}
          style={{
            color: "#BCBAB8",
            fontWeight: "400",
            fontSize: "20px",
            borderWidth: "0 2px 0 0", // Sets width only for the right border (Top Right Bottom Left)
            borderStyle: "solid",
            borderImage: "linear-gradient(to bottom, #BCBAB8, #DD6410) 1", // Applies the gradient
          }}
        >
          <SectionXNeg>
            I have 4 years of experience as a full-stack developer, ready to
            give life to your imagination. I’ve never achieved or learned
            anything easily. Instead, I’ve found that I often need more time and
            effort to accomplish something than the people around me. Through
            these hardships, I realized how stubborn I am, the never-giving-up
            mentality, the unyielding patience and the sheer will to stay
            focused until I reach my goal.
          </SectionXNeg>
        </Col>
        <Col
          md={4}
          className="d-flex align-items-center"
          style={{
            color: "#BCBAB8",
            fontWeight: "400",
            fontSize: "20px",
            overflow: "hidden",
          }}
        >
          <SectionXPos>
            <div>
              <MediaQuery maxWidth={639}>
                <h3
                  className="mt-3 text-center"
                  style={{ fontWeight: "500", color: "#DD6410" }}
                >
                  Core Competencies
                </h3>
                <ul className="list-group list-group-flush d-flex text-center">
                  <li className="list-group-item bg-transparent text-BCBAB8 border-BCBAB8">
                    High work ethic, not able to rest until I am satisfied with
                    my progress.
                  </li>
                  <li className="list-group-item bg-transparent text-BCBAB8 border-BCBAB8">
                    Quick learner, easily able to adapt to new situations and
                    thrive in dynamic work environments.
                  </li>
                  <li className="list-group-item bg-transparent text-BCBAB8 border-BCBAB8">
                    Skilled problem solver, finding out new ways of thinking and
                    implementing the best solution.
                  </li>
                </ul>
              </MediaQuery>
              <MediaQuery minWidth={640}>
                <h3
                  className="pl-3 mt-3"
                  style={{ fontWeight: "500", color: "#DD6410" }}
                >
                  Core Competencies
                </h3>
                <ul className="list-group list-group-flush d-flex">
                  <li className="list-group-item bg-transparent text-BCBAB8 border-BCBAB8">
                    High work ethic, not able to rest until I am satisfied with
                    my progress.
                  </li>
                  <li className="list-group-item bg-transparent text-BCBAB8 border-BCBAB8">
                    Quick learner, easily able to adapt to new situations and
                    thrive in dynamic work environments.
                  </li>
                  <li className="list-group-item bg-transparent text-BCBAB8 border-BCBAB8">
                    Skilled problem solver, finding out new ways of thinking and
                    implementing the best solution.
                  </li>
                </ul>
              </MediaQuery>
            </div>
          </SectionXPos>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
