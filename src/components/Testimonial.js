import { useRef } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useInView } from "framer-motion";
import { StaggeredText } from "./Animations";
import MediaQuery from "react-responsive";
import Fard from "../images/istockphoto-1495088043-612x612.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "../components/testimonial.css";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";

const testiData = [
  {
    name: "Fardin Rahman 1",
    img: Fard,
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    rating: "5",
  },
  {
    name: "Fardin Rahman 2",
    img: Fard,
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    rating: "5",
  },
  {
    name: "Fardin Rahman 3",
    img: Fard,
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    rating: "5",
  },
  {
    name: "Fardin Rahman 4",
    img: Fard,
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    rating: "5",
  },
  {
    name: "Fardin Rahman 5",
    img: Fard,
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    rating: "5",
  },
  {
    name: "Fardin Rahman 6",
    img: Fard,
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    rating: "5",
  },
];

function TestimonialCard({ data }) {
  return (
    <Card
      className="acrd"
      style={{
        borderRadius: "20px",
        border: "1px solid #BCBAB8",
        backgroundColor: "transparent",
        position: "relative",
        overflow: "hidden",
        width: "350px",
      }}
    >
      <Card.Body>
        <div className="d-flex justify-content-center">
          <img
            src={data.img}
            alt={data.name}
            style={{ width: "4rem", borderRadius: "120px" }}
          />
        </div>

        <div
          className="d-flex justify-content-center mt-2 mb-5"
          style={{ color: "#F5F5F5" }}
        >
          {data.name}
        </div>

        <Card.Text style={{ color: "#F5F5F5" }}>{data.description}</Card.Text>

        <Card.Subtitle className="mt-2 text-muted">
          {data.rating} 🌟
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

function TestimonialCardPhn({ data }) {
  return (
    <Card
      style={{
        borderRadius: "20px",
        border: "1px solid #BCBAB8",
        backgroundColor: "transparent",
      }}
    >
      <Card.Body>
        <div className="d-flex justify-content-center">
          <img
            src={data.img}
            alt={data.name}
            style={{ width: "4rem", borderRadius: "120px" }}
          />
        </div>

        <div
          className="d-flex justify-content-center mt-2 mb-5"
          style={{ color: "#F5F5F5" }}
        >
          {data.name}
        </div>

        <Card.Text style={{ color: "#F5F5F5", paddingTop: "20px" }}>
          {data.description}
        </Card.Text>

        <Card.Subtitle className="mt-2 text-muted">
          {data.rating} 🌟
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

function TestiPhn() {
  return (
    <>
      <Container className="pb-5" style={{ maxWidth: "95%" }}>
        <Row
          className="d-flex justify-content-center mb-3"
          style={{ color: "#BCBAB8" }}
        >
          <h5>Thoughts Shared by </h5>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <Swiper
              effect={"coverflow"}
              slidesPerView={"1"}
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
              modules={[Pagination, Navigation, EffectCoverflow]}
              className="mySwiper"
            >
              {testiData.map((item, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCardPhn data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </>
  );
}

function TestiMonial1() {
  return (
    <div className="d-flex logos pb-5">
      <div className="d-flex logos-slide" style={{ position: "relative" }}>
        {testiData.map((item, index) => (
          <TestimonialCard key={index} data={item} />
        ))}
      </div>
      <div className="d-flex logos-slide" style={{ position: "relative" }}>
        {testiData.map((item, index) => (
          <TestimonialCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

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

function TestiSlide() {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  return (
    <div className="pb-5" style={{ overflow: "hidden" }}>
      <Container style={{ maxWidth: "95%" }}>
        <h2
          className="headerdec pt-5 pb-5"
          style={{
            color: "#DD6410",
            position: "relative",
            display: "inline-block",
            overflow: "hidden",
          }}
        >
          <StaggeredText text={"Testimonials"}></StaggeredText>
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
              zIndex: 20,
            }}
          />
        </h2>
      </Container>
      <MediaQuery minWidth={1280}>
        <TestiMonial1 />
      </MediaQuery>
      <MediaQuery maxWidth={1279}>
        <TestiPhn />
      </MediaQuery>
    </div>
  );
}

export default TestiSlide;
