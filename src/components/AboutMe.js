import { Container, Row, Col } from "reactstrap";
import { SectionXPos, SectionXNeg, StaggeredText } from "./Animations";
import { useInView as InObs } from "react-intersection-observer";
import { motion } from "framer-motion";
import intro from "../images/Introduction.mp4";
import MediaQuery, { useMediaQuery } from "react-responsive";

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
  const isMobile = useMediaQuery({ maxWidth: 639 });

  return (
    <Container
      style={{ maxWidth: "95%", paddingBottom: isMobile ? "0px" : "5vh" }}
    >
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
            style={{
              width: "100%",
              overflow: "hidden", // Forces the video to respect the rounded corners
              backgroundColor: "#000", // Clean black background while loading
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Optional: adds a slight shadow for depth
            }}
          >
            <video
              width="100%"
              height="auto"
              style={{ display: "block" }} // Removes the default inline gap below the video
              controls // Adds standard play/pause/volume controls
              muted // Optional: Required if you want to use autoPlay in modern browsers
              playsInline
            >
              {/* Point this src to where you placed the file in your public folder */}
              <source src={intro} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Col>
        <Col
          className="d-flex justify-content-end text-right pb-4 pr-3 pr-md-4"
          md={4}
          style={{
            color: "#BCBAB8",
            fontWeight: "400",
            paddingTop: isMobile ? "0px" : "30px",
            fontSize: isMobile ? "13px" : "18px",
            lineHeight: isMobile ? "1.5" : "1.6",
            justifyContent: "flex-end",
            textAlign: "right",
            borderWidth: "0 2px 0 0", // Sets width only for the right border (Top Right Bottom Left)
            borderStyle: "solid",
            borderImage: "linear-gradient(to bottom, #BCBAB8, #DD6410) 1", // Applies the gradient
          }}
        >
          <SectionXPos>
            <div
              className="text-right"
              style={{
                textAlign: "right",
                fontSize: isMobile ? "13px" : "18px",
                lineHeight: isMobile ? "1.5" : "1.6",
              }}
            >
              I have 4 years of experience as a full-stack developer, ready to
              give life to your imagination. I’ve never achieved or learned
              anything easily. Instead, I’ve found that I often need more time
              and effort to accomplish something than the people around me.
              Through these hardships, I realized how stubborn I am, the
              never-giving-up mentality, the unyielding patience and the sheer
              will to stay focused until I reach my goal.
            </div>
          </SectionXPos>
        </Col>
        <Col
          md={4}
          className="d-flex align-items-center"
          style={{
            color: "#BCBAB8",
            fontWeight: "400",
            fontSize: isMobile ? "13px" : "17px",
            overflow: "hidden",
          }}
        >
          <SectionXNeg>
            <div>
              <h3
                className="pl-3 mt-3"
                style={{
                  fontWeight: "500",
                  color: "#DD6410",
                  paddingTop: isMobile ? "0px" : "150px",
                }}
              >
                Core Competencies
              </h3>
              <ul className="list-group list-group-flush d-flex">
                <li
                  className="list-group-item bg-transparent text-BCBAB8 border-BCBAB8 py-1"
                  style={{ paddingTop: "4px", paddingBottom: "4px" }}
                >
                  High work ethic, not able to rest until I am satisfied with my
                  progress.
                </li>
                <li
                  className="list-group-item bg-transparent text-BCBAB8 border-BCBAB8 py-1"
                  style={{ paddingTop: "4px", paddingBottom: "4px" }}
                >
                  Quick learner, easily able to adapt to new situations and
                  thrive in dynamic work environments.
                </li>
                <li
                  className="list-group-item bg-transparent text-BCBAB8 border-BCBAB8 py-1"
                  style={{ paddingTop: "4px", paddingBottom: "4px" }}
                >
                  Skilled problem solver, finding out new ways of thinking and
                  implementing the best solution.
                </li>
              </ul>
            </div>
          </SectionXNeg>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
