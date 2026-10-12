import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Hello from "../images/hello.png";
import emailjs from "emailjs-com";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_4nobmru";
    const templateId = "template_h7vdxs6";
    const userId = "f3mZt0nLokb3JZnLL";

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        alert("Email sending failed. Please try again later.");
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail" className="mb-3">
          <Form.Label
            style={{
              color: "#181818",
              fontWeight: "600",
              fontSize: "0.95rem",
              letterSpacing: "0.3px",
            }}
          >
            Mail Address:
          </Form.Label>
          <Form.Control
            style={{
              borderWidth: "2px",
              height: "50px",
              borderColor: "#cfcac0",
              backgroundColor: "#ffffff",
              color: "#181818",
              borderRadius: "6px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
            placeholder="Your Mail Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicMessage" className="mb-3">
          <Form.Label
            style={{
              color: "#181818",
              fontWeight: "600",
              fontSize: "0.95rem",
              letterSpacing: "0.3px",
            }}
          >
            Message:
          </Form.Label>
          <Form.Control
            style={{
              borderWidth: "2px",
              height: "180px",
              borderColor: "#cfcac0",
              backgroundColor: "#ffffff",
              color: "#181818",
              borderRadius: "6px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
            placeholder="Type Message"
            as="textarea"
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button
          type="submit"
          style={{
            backgroundColor: "#DD6410",
            borderColor: "#DD6410",
            color: "#ffffff",
            fontWeight: "600",
            padding: "10px 24px",
            borderRadius: "6px",
            boxShadow: "0 4px 12px rgba(221, 100, 16, 0.25)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#c45408";
            e.currentTarget.style.borderColor = "#c45408";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#DD6410";
            e.currentTarget.style.borderColor = "#DD6410";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Send Email
        </Button>
      </Form>
    </div>
  );
};

function Contact() {
  return (
    <Container>
      <Row className="pt-5">
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center pb-4"
        >
          <img style={{ width: "60%" }} src={Hello} />
        </Col>
        <Col md={5}>
          {/* <div className='d-flex justify-content-center'>Yellow</div> */}
          <EmailForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
