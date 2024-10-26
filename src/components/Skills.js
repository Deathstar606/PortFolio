import React from "react";
import { Container, Row } from "reactstrap";
import { StaggeredText } from "./Animations";
import MediaQuery from "react-responsive";
import Prog from "../images/Skills/terminal.png"
import Front from "../images/Skills/front-end.png"
import Back from "../images/Skills/backend.png"
import Serve from "../images/Skills/DBL.png"
import Fire from "../images/Skills/firebase.png"
import arrowGif from "../images/RigtArrow.gif"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';

import { Scrollbar } from 'swiper/modules';

function Skills () {
    return (
        <div style={{backgroundColor: "#DD6410", paddingTop: "30px", paddingBottom: "30px"}}>
            <Container style={{maxWidth: "95%"}}>
                <h2 className="headerdec d-flex align-items-center">
                    <StaggeredText text={"Skills"}></StaggeredText>
                    <img src={arrowGif} alt="Arrow" className="ml-auto" style={{ width: '100px' }} />
                </h2>
                    <MediaQuery minWidth={639}>
                        <Row className="mt-5 mb-3" style={{paddingRight: "10%", paddingLeft: "10%"}}>
                        <Swiper
                            scrollbar={{
                            hide: true,
                            }}
                            modules={[Scrollbar]}
                            slidesPerView={4}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                    <div className="d-flex justify-content-center">
                                        <img src={Prog} alt="back" className="skill"/>
                                    </div>
                                    <h5 className="d-flex justify-content-center mt-2 mb-5">Python & C++</h5>
                            </SwiperSlide>
                            <SwiperSlide>
                                    <div className="d-flex justify-content-center">
                                        <img src={Front} alt="back" className="skill"/>
                                    </div>
                                    <h5 className="d-flex justify-content-center mt-2 mb-5">React</h5>
                            </SwiperSlide>
                            <SwiperSlide>
                                    <div className="d-flex justify-content-center">
                                        <img src={Back} alt="back" className="skill"/>
                                    </div>
                                    <h5 className="d-flex justify-content-center mt-2 mb-5">Node JS</h5>
                            </SwiperSlide>
                            <SwiperSlide>
                                    <div className="d-flex justify-content-center">
                                        <img src={Serve} alt="back" className="skill"/>
                                    </div>
                                    <h5 className="d-flex justify-content-center mt-2 mb-5">MongoDB</h5>
                            </SwiperSlide>
                            <SwiperSlide>
                                    <div className="d-flex justify-content-center">
                                        <img src={Fire} alt="back" className="skill"/>
                                    </div>
                                    <h5 className="d-flex justify-content-center mt-2 mb-5">Firebase</h5>
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
                            slidesPerView={3}
                            className="mySwiper pr-2 pl-2"
                        >
                            <SwiperSlide>
                                    <div className="d-flex justify-content-center">
                                        <img src={Prog} alt="back" className="skill"/>
                                    </div>
                                    <h5 className="d-flex justify-content-center mt-2 mb-5">Python</h5>
                            </SwiperSlide>
                            <SwiperSlide>
                                    <div className="d-flex justify-content-center">
                                        <img src={Front} alt="back" className="skill"/>
                                    </div>
                                    <h5 className="d-flex justify-content-center mt-2 mb-5">React</h5>
                            </SwiperSlide>
                            <SwiperSlide>
                                    <div className="d-flex justify-content-center">
                                        <img src={Back} alt="back" className="skill"/>
                                    </div>
                                    <h5 className="d-flex justify-content-center mt-2 mb-5">Node JS</h5>
                            </SwiperSlide>
                            <SwiperSlide>
                                    <div className="d-flex justify-content-center">
                                        <img src={Serve} alt="back" className="skill"/>
                                    </div>
                                    <h5 className="d-flex justify-content-center mt-2 mb-5">MongoDB</h5>
                            </SwiperSlide>
                            <SwiperSlide>
                                    <div className="d-flex justify-content-center">
                                        <img src={Fire} alt="back" className="skill"/>
                                    </div>
                                    <h5 className="d-flex justify-content-center mt-2 mb-5">Firebase</h5>
                            </SwiperSlide>
                        </Swiper>
                        </Row>
                    </MediaQuery>
            </Container>
        </div>
    )
}

export default Skills;