import React from 'react';
import {
  Collapse,
  Navbar,
  NavLink,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from 'reactstrap';
import Burger from './Burger';
import MediaQuery from 'react-responsive';
import { Link } from 'react-scroll';
import axios from 'axios';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  handleDownload = () => {
    const url = 'https://raw.githubusercontent.com/Deathstar606/PortFolio/master/CV.pdf';

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

  render() {
    return (
      <Container className='nav-container'>
        <div className='nav-c'>
        <MediaQuery maxWidth={639}>
          <Burger/>
        </MediaQuery>
          <Navbar light expand="md">
            <NavbarBrand href="/" className='text-white'>FM</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem style={{marginRight: "10px"}}>
                  <NavLink style={{color: "dark", fontSize: "18px", fontWeight: "500"}} onClick={this.handleDownload} className='text-dark mt-1'>CV</NavLink>
                </NavItem>
                <NavItem style={{marginTop: "12px", marginRight: "17px"}}>
                  <Link style={{color: "dark", fontSize: "18px", fontWeight: "500"}} to="casestu" spy={true} smooth={true} offset={0} duration={500}>Case Studies</Link>
                </NavItem>
                <NavItem style={{marginTop: "12px", marginRight: "10px"}}>
                  <Link style={{color: "dark", fontSize: "18px", fontWeight: "500"}} to="learn" spy={true} smooth={true} offset={0} duration={500}>Learn</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </Container>
    );
  }
}