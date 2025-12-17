import React from "react";
import { Container, Row } from "reactstrap";
import { StaggeredText } from "./Animations";
import { motion } from "framer-motion";
import MediaQuery from "react-responsive";
import Prog from "../images/Skill_Icons/icons8-python-50.png";
import Rect from "../images/Skill_Icons/icons8-react-96.png";
import Node from "../images/Skill_Icons/icons8-node-js-96.png";
import wp from "../images/Skill_Icons/icons8-wordpress-50.png";
import next from "../images/Skill_Icons/icons8-nextjs-48.png";
import Mongo from "../images/Skill_Icons/icons8-mongo-db-96.png";
import Redu from "../images/Skill_Icons/icons8-redux-100.png";
import Fire from "../images/Skill_Icons/firebase.png";
import arrowGif from "../images/RigtArrow.gif";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar } from "swiper/modules";

function Skills() {
  return (
    <div
      style={{
        backgroundColor: "#DD6410",
        paddingTop: "30px",
        paddingBottom: "30px",
      }}
    >
      <Container style={{ maxWidth: "95%" }}>
        <h2 className="headerdec d-flex align-items-center">
          <StaggeredText text={"Skills"}></StaggeredText>
          <img
            src={arrowGif}
            alt="Arrow"
            className="ml-auto"
            style={{ width: "100px" }}
          />
        </h2>
        <MediaQuery minWidth={639}>
          <Row
            className="mt-5 mb-3"
            style={{ paddingRight: "10%", paddingLeft: "10%" }}
          >
            <Swiper
              scrollbar={{
                hide: true,
              }}
              modules={[Scrollbar]}
              slidesPerView={4}
              className="mySwiper"
            >
              <SwiperSlide>
                <motion.div className="d-flex justify-content-center">
                  <motion.img
                    src={Prog}
                    alt="back"
                    className="skill"
                    animate={{
                      rotate: [0, -5, 5, -5, 5, 0], // slight rotation back and forth
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <h5 className="d-flex justify-content-center mt-2 mb-5">
                  Python
                </h5>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div className="d-flex justify-content-center">
                  <motion.img
                    src={Rect}
                    alt="back"
                    className="skill"
                    animate={{
                      rotate: [0, -5, 5, -5, 5, 0], // slight rotation back and forth
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <h5 className="d-flex justify-content-center mt-2 mb-5">
                  React
                </h5>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div className="d-flex justify-content-center">
                  <motion.img
                    src={Node}
                    alt="back"
                    className="skill"
                    animate={{
                      rotate: [0, -5, 5, -5, 5, 0], // slight rotation back and forth
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <h5 className="d-flex justify-content-center mt-2 mb-5">
                  Node JS
                </h5>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div className="d-flex justify-content-center">
                  <motion.img
                    src={wp}
                    alt="wordpress"
                    className="skill"
                    animate={{
                      rotate: [0, -5, 5, -5, 5, 0], // slight rotation back and forth
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <h5 className="d-flex justify-content-center mt-2 mb-5">
                  WordPress
                </h5>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div className="d-flex justify-content-center">
                  <motion.img
                    src={Mongo}
                    alt="back"
                    className="skill"
                    animate={{
                      rotate: [0, -5, 5, -5, 5, 0], // slight rotation back and forth
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <h5 className="d-flex justify-content-center mt-2 mb-5">
                  Mongo DB
                </h5>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div className="d-flex justify-content-center">
                  <motion.img
                    src={next}
                    alt="back"
                    className="skill"
                    animate={{
                      rotate: [0, -5, 5, -5, 5, 0], // slight rotation back and forth
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <h5 className="d-flex justify-content-center mt-2 mb-5">
                  NextJs
                </h5>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div className="d-flex justify-content-center">
                  <motion.img
                    src={Redu}
                    alt="back"
                    className="skill"
                    animate={{
                      rotate: [0, -5, 5, -5, 5, 0], // slight rotation back and forth
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <h5 className="d-flex justify-content-center mt-2 mb-5">
                  Redux
                </h5>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div className="d-flex justify-content-center">
                  <motion.img
                    src={Fire}
                    alt="back"
                    className="skill"
                    animate={{
                      rotate: [0, -5, 5, -5, 5, 0], // slight rotation back and forth
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <h5 className="d-flex justify-content-center mt-2 mb-5">
                  Firebase
                </h5>
              </SwiperSlide>
            </Swiper>
          </Row>
        </MediaQuery>
        <MediaQuery maxWidth={638}>
          <Row className="mt-5 mb-3">
            <Swiper
              scrollbar={{
                hide: true,
              }}
              modules={[Scrollbar]}
              slidesPerView={4}
              className="mySwiper"
            >
              <SwiperSlide>
                <motion.div className="d-flex justify-content-center">
                  <motion.img
                    src={Prog}
                    alt="back"
                    className="skill"
                    animate={{
                      rotate: [0, -5, 5, -5, 5, 0], // slight rotation back and forth
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <h5 className="d-flex justify-content-center mt-2 mb-5">
                  Python
                </h5>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div className="d-flex justify-content-center">
                  <motion.img
                    src={Rect}
                    alt="back"
                    className="skill"
                    animate={{
                      rotate: [0, -5, 5, -5, 5, 0], // slight rotation back and forth
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <h5 className="d-flex justify-content-center mt-2 mb-5">
                  React
                </h5>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div className="d-flex justify-content-center">
                  <motion.img
                    src={Node}
                    alt="back"
                    className="skill"
                    animate={{
                      rotate: [0, -5, 5, -5, 5, 0], // slight rotation back and forth
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <h5 className="d-flex justify-content-center mt-2 mb-5">
                  Node
                </h5>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div className="d-flex justify-content-center">
                  <motion.img
                    src={wp}
                    alt="wordpress"
                    className="skill"
                    animate={{
                      rotate: [0, -5, 5, -5, 5, 0], // slight rotation back and forth
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <h5 className="d-flex justify-content-center mt-2 mb-5">
                  WordPress
                </h5>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div className="d-flex justify-content-center">
                  <motion.img
                    src={Mongo}
                    alt="back"
                    className="skill"
                    animate={{
                      rotate: [0, -5, 5, -5, 5, 0], // slight rotation back and forth
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <h5 className="d-flex justify-content-center mt-2 mb-5">
                  Mongo
                </h5>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div className="d-flex justify-content-center">
                  <motion.img
                    src={next}
                    alt="back"
                    className="skill"
                    animate={{
                      rotate: [0, -5, 5, -5, 5, 0], // slight rotation back and forth
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <h5 className="d-flex justify-content-center mt-2 mb-5">
                  NextJs
                </h5>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div className="d-flex justify-content-center">
                  <motion.img
                    src={Redu}
                    alt="back"
                    className="skill"
                    animate={{
                      rotate: [0, -5, 5, -5, 5, 0], // slight rotation back and forth
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <h5 className="d-flex justify-content-center mt-2 mb-5">
                  Redux
                </h5>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div className="d-flex justify-content-center">
                  <motion.img
                    src={Fire}
                    alt="back"
                    className="skill"
                    animate={{
                      rotate: [0, -5, 5, -5, 5, 0], // slight rotation back and forth
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <h5 className="d-flex justify-content-center mt-2 mb-5">
                  Firebase
                </h5>
              </SwiperSlide>
            </Swiper>
          </Row>
        </MediaQuery>
      </Container>
    </div>
  );
}

export default Skills;
