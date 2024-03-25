import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { stack as Menu } from 'react-burger-menu'
import { Link } from 'react-scroll';
import axios from 'axios';
import "./Burger.css"

class Burger extends React.Component {
  
  handleDownload = () => {
    const url = 'https://raw.githubusercontent.com/Deathstar606/PortFolio/master/src/New%20CV-pages-1.pdf';

    axios({
      url,
      method: 'GET',
      responseType: 'blob', // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Fardin Mridul CV.pdf'); // Set the desired file name
      document.body.appendChild(link);
      link.click();
    });
  };

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu right>
        <Container>
          <Row>
            <Col>
              <a id="home" href="/">Home</a>
            </Col>
            <Col>
              <Link to="casestu" spy={true} smooth={true} offset={-40} duration={500}>Case Studies</Link>
            </Col>
            <Col>
              <Link to="learn" spy={true} smooth={true} offset={-40} duration={500}>Learn</Link>
            </Col>
            <Col>
              <Link onClick={this.handleDownload}>Down CV</Link>
            </Col>
          </Row>
        </Container>
      </Menu>
    );
  }
}

export default Burger