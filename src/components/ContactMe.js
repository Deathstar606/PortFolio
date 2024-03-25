import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Hello from "../images/hello.png"
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const serviceId = 'service_4nobmru';
    const templateId = 'template_h7vdxs6';
    const userId = 'f3mZt0nLokb3JZnLL';

    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        alert('Email sending failed. Please try again later.');
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail" className='mb-3'>
          <Form.Label>Mail Address:</Form.Label>
          <Form.Control
            style={{borderRadius: "15px", borderWidth: "4px", height: "50px", borderColor: "#353935"}}
            placeholder='Your Mail Address'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicMessage" className='mb-3'>
          <Form.Label>Message:</Form.Label>
          <Form.Control
            style={{borderRadius: "15px", borderWidth: "4px", height: "200px", borderColor: "#353935"}}
            placeholder='Type Message'
            as="textarea"
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="dark" type="submit" style={{borderRadius: "15px"}}>
          Send Email
        </Button>
      </Form>
    </div>
  );
};

function Contact () {
    return (
        <Container>
            <Row className='pt-5'>
                <Col md={6} className='d-flex justify-content-center align-items-center pb-4'><img style={{width: "60%"}} src={Hello}/></Col>
                <Col md={5}>
                    {/* <div className='d-flex justify-content-center'>Yellow</div> */}
                    <EmailForm/>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;
