import { useRef } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useInView } from "framer-motion";
import { StaggeredText } from "./Animations";
import MediaQuery from "react-responsive";

import gr from "../images/people/gr.png";
import fs from "../images/people/fs.png";
import grace from "../images/people/grace.png";
import gs from "../images/people/gs.png";
import srv from "../images/people/srv.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../components/testimonial.css";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";

const testiData = [
  {
    name: "Graham Anderson",
    img: gr,
    designation: "CEO, Galaxy Renovations & Home Solutions",
    description:
      "Working together was effortless from day one. Our old website really didn't do our craftsmanship justice, but the new gallery and instant quote request flow completely turned that around. We actually started getting booking requests within the first week of going live.",
    rating: "5",
  },
  {
    name: "Farhan Sadiq Labib",
    img: fs,
    designation: "Founder, Veloura",
    description:
      "He built a clean, remarkably fast store that our customers genuinely find easy to navigate. The live product filters and checkout flow work seamlessly without lagging, and inventory syncs reliably in the backend. Great communication and solid follow-through.",
    rating: "5",
  },
  {
    name: "Sahadat Hossain Saurav",
    img: srv,
    designation: "Founder & CEO, DIGIX",
    description:
      "As an agency, we’re extremely picky about visual details, but he nailed the exact modern feel we wanted. The interactive proposal viewer has made pitching high-value clients much easier, and the case study layouts look sharp. Highly responsive to feedback throughout the project.",
    rating: "5",
  },
  {
    name: "Gracie Robinson",
    img: grace,
    designation: "Founder, Retaurante Confusion",
    description:
      "Our customers constantly mention how easy it is to browse our menu and dish photos on their phones now. The online reservation flow took a huge load off our staff during busy dinner rushes. Straightforward collaboration and a great final result.",
    rating: "5",
  },
  {
    name: "Gregory Smith",
    img: gs,
    designation: "",
    description:
      "One of the most dependable developers I've worked with. He didn't just build the feature checklist—he actively pointed out edge cases in our user flow that we had missed. The app is snappy, well-structured, and was delivered right on time.",
    rating: "5",
  },
];

function TestimonialCard({ data }) {
  return (
    <Card
      className="acrd"
      style={{
        border: "3px solid #DD6410",
        backgroundColor: "transparent",
        position: "relative",
        overflow: "hidden",
        width: "350px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          paddingBottom: "50px",
        }}
      >
        <div className="d-flex justify-content-center">
          <img
            src={data.img}
            alt={data.name}
            style={{ width: "4rem", borderRadius: "120px" }}
          />
        </div>

        <div
          className="text-center mt-2 mb-3"
          style={{ color: "#F5F5F5", minHeight: "65px" }}
        >
          {data.name}
          <p className="mt-2 text-muted">{data.designation}</p>
        </div>
        <Card.Text style={{ color: "#F5F5F5", flexGrow: 1 }}>
          {data.description}
        </Card.Text>

        <Card.Subtitle
          className="text-muted"
          style={{
            position: "absolute",
            bottom: "16px",
            right: "20px",
            margin: 0,
            fontSize: "0.95rem",
          }}
        >
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
        border: "3px solid #DD6410",
        backgroundColor: "transparent",
        height: "500px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "1.25rem",
          paddingBottom: "50px",
        }}
      >
        <div className="d-flex justify-content-center">
          <img
            src={data.img}
            alt={data.name}
            style={{ width: "4rem", borderRadius: "120px" }}
          />
        </div>

        <div
          className="text-center mt-2 mb-2"
          style={{ color: "#F5F5F5", minHeight: "65px" }}
        >
          <div style={{ fontWeight: "600", fontSize: "1.05rem" }}>
            {data.name}
          </div>
          <p
            className="mt-1 text-muted"
            style={{ fontSize: "0.88rem", margin: 0 }}
          >
            {data.designation}
          </p>
        </div>

        {/* Dedicated spacing between designation and description for the swiper arrows */}
        <div style={{ height: "48px" }} aria-hidden="true" />

        <Card.Text
          style={{
            color: "#F5F5F5",
            fontSize: "0.92rem",
            lineHeight: "1.6",
            flexGrow: 1,
            margin: 0,
          }}
        >
          {data.description}
        </Card.Text>

        <Card.Subtitle
          className="text-muted"
          style={{
            position: "absolute",
            bottom: "16px",
            left: "20px",
            margin: 0,
            fontSize: "0.95rem",
          }}
        >
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
          style={{ color: "#DD6410" }}
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
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
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
              modules={[Pagination, EffectCoverflow, Autoplay]}
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
          className="headerdec pt-5 pb-3"
          style={{
            color: "#DD6410",
            position: "relative",
            display: "inline-block",
            overflow: "hidden",
            lineHeight: "1.2",
            marginBottom: "30px",
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
              bottom: 0,
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
