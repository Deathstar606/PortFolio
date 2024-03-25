import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StaggeredText } from './Animations';
import MediaQuery from 'react-responsive';
import Fard from "../images/istockphoto-1495088043-612x612.jpg"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

function TestiSlide() {
  return (
    <>
      <Container className="pb-5" style={{maxWidth: "95%"}}>
        <h2 className="headerdec mt-5" style={{ marginBottom: '40px', '@media screen and (min-width: 1280px)': { marginBottom: '0px' }, color: "#DD6410" }}><StaggeredText text={"Testimonial"}></StaggeredText></h2>
        <Row className="d-flex justify-content-center mb-3" style={{color: "#BCBAB8"}}>
          <h5>Thoughts Shared by </h5>
        </Row>
        <MediaQuery maxWidth={1279}>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <Swiper
                effect={'coverflow'}
                slidesPerView={'1'}
                spaceBetween={15}
                centeredSlides={true}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 50,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[ Pagination, Navigation, EffectCoverflow]}
                className="mySwiper"
              >
                <SwiperSlide>
                    <Card style={{borderRadius: "20px", backgroundColor: "#353935"}}>
                      <Card.Body>
                            <div className='d-flex justify-content-center'>
                                <img src={Fard} style={{ width: '4rem', borderRadius: "120px"}}/>
                            </div>
                            <div className='d-flex justify-content-center mt-2 mb-5' style={{color: "#F5F5F5"}}>
                                Fardin Rahman
                            </div>
                            <Card.Text style={{color: "#F5F5F5"}}>
                            "Some quick example text to build on the card title and make up the
                            bulk of the card's content".
                            </Card.Text>
                            <Card.Subtitle className='mt-2 text-muted'>5🌟</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{borderRadius: "20px", backgroundColor: "#353935"}}>
                      <Card.Body>
                            <div className='d-flex justify-content-center'>
                                <img src={Fard} style={{ width: '4rem', borderRadius: "120px"}}/>
                            </div>
                            <div className='d-flex justify-content-center mt-2 mb-5' style={{color: "#F5F5F5"}}>
                                Fardin Rahman
                            </div>
                            <Card.Text style={{color: "#F5F5F5"}}>
                            "Some quick example text to build on the card title and make up the
                            bulk of the card's content".
                            </Card.Text>
                            <Card.Subtitle className='mt-2 text-muted'>5🌟</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </MediaQuery>
        <MediaQuery minWidth={1280}>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <Swiper
                style={{borderRadius: "20px"}}
                effect={'coverflow'}
                slidesPerView={'2'}
                spaceBetween={15}
                centeredSlides={true}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 50,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[ Pagination, Navigation, EffectCoverflow]}
                className="mySwiper"
              >
                <SwiperSlide>
                    <Card style={{borderRadius: "20px", backgroundColor: "#353935"}}>
                        <Card.Body>
                            <div className='d-flex justify-content-center'>
                                <img src={Fard} style={{ width: '4rem', borderRadius: "120px"}}/>
                            </div>
                            <div className='d-flex justify-content-center mt-2 mb-5' style={{color: "#F5F5F5"}}>
                                Fardin Rahman
                            </div>
                            <Card.Text style={{color: "#F5F5F5"}}>
                            "Some quick example text to build on the card title and make up the
                            bulk of the card's content".
                            </Card.Text>
                            <Card.Subtitle className='mt-2 text-muted'>5🌟</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{borderRadius: "20px", backgroundColor: "#353935"}}>
                        <Card.Body>
                            <div className='d-flex justify-content-center'>
                                <img src={Fard} style={{ width: '4rem', borderRadius: "120px"}}/>
                            </div>
                            <div className='d-flex justify-content-center mt-2 mb-5' style={{color: "#F5F5F5"}}>
                                Fardin Rahman
                            </div>
                            <Card.Text style={{color: "#F5F5F5"}}>
                            "Some quick example text to build on the card title and make up the
                            bulk of the card's content".
                            </Card.Text>
                            <Card.Subtitle className='mt-2 text-muted'>5🌟</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </MediaQuery>
      </Container>
    </>
  );
}

export default TestiSlide;