import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Container } from "reactstrap";
import { motion, AnimatePresence } from "framer-motion";
import MediaQuery from "react-responsive";
import { Link } from "react-scroll";
import fm from "../images/FM.png";
import axios from "axios";

export const Burger = ({ handleOrdPage, DownCv }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarWidth = windowWidth < 640 ? "60vw" : "500px";

  return (
    <motion.div
      onClick={handleOrdPage}
      className="modal-back"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()} // Prevent click event propagation
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          backgroundColor: "#181818",
          color: "#DD6410",
          width: sidebarWidth, // Use the calculated width
          height: "100vh", // Full height of the viewport
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Box shadow for some depth
          position: "fixed", // Fix to the right side
          top: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flex: 1, // Allow this container to grow and take up available space
            maxHeight: "calc(100vh - 80px)", // Adjust max height to account for footer space
            overflowY: "hidden",
            padding: "0 1rem", // Add padding for aesthetics
          }}
        >
          <ul
            className="p-3"
            style={{ padding: 0, listStyleType: "none", marginTop: "10%" }}
          >
            <li
              style={{
                marginTop: "5px",
                marginBottom: "5px",
                fontSize: "18px",
              }}
            >
              <Link
                style={{
                  color: "#DD6410",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
                to="casestu"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Case Studies
              </Link>
            </li>
            <li
              style={{
                marginTop: "5px",
                marginBottom: "5px",
                fontSize: "18px",
              }}
            >
              <Link
                style={{
                  color: "#DD6410",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
                to="learn"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Learn
              </Link>
            </li>
            <li
              style={{
                marginTop: "5px",
                marginBottom: "5px",
                fontSize: "18px",
              }}
              onClick={DownCv}
            >
              CV
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  const burgerToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDownload = () => {
    const url =
      "https://raw.githubusercontent.com/Deathstar606/PortFolio/master/CV.pdf";

    axios({
      url,
      method: "GET",
      responseType: "blob", // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Fardin Mridul CV.pdf"); // Set the desired file name
      document.body.appendChild(link);
      link.click();
    });
  };

  return (
    <Container className="nav-container">
      <MediaQuery maxWidth={639}>
        <div
          onClick={burgerToggle}
          style={{
            cursor: "pointer",
            position: "fixed",
            top: "35px",
            right: "22px",
            zIndex: "100",
          }}
        >
          <div
            className="bar"
            style={{
              width: "30px",
              height: "2px",
              backgroundColor: "#DD6410",
              margin: "5px",
            }}
          ></div>
          <div
            className="bar"
            style={{
              width: "15px",
              height: "2px",
              backgroundColor: "#DD6410",
              margin: "5px",
            }}
          ></div>
          <div
            className="bar"
            style={{
              width: "30px",
              height: "2px",
              backgroundColor: "#DD6410",
              margin: "5px",
            }}
          ></div>
        </div>
        <AnimatePresence mode="wait">
          {isOpen && (
            <Burger handleOrdPage={burgerToggle} DownCv={handleDownload} />
          )}
        </AnimatePresence>
      </MediaQuery>
      <div className="nav-c">
        <Navbar light expand="md">
          <NavbarBrand
            href="https://deathstar606.github.io/PortFolio/"
            className="text-white mt-2"
          >
            <img
              src={fm}
              alt="Logo"
              style={{ height: "40px", width: "40px", marginTop: "12px" }}
            />
          </NavbarBrand>
          <MediaQuery minWidth={640}>
            <Nav className="ml-auto" navbar>
              <NavItem
                style={{
                  marginTop: "12px",
                  marginRight: "17px",
                  textDecoration: "none",
                }}
              >
                <Link
                  onClick={handleDownload}
                  style={{ textDecoration: "none", fontWeight: "550" }}
                  className="nav-items"
                >
                  CV
                  <div className="nav-items-inner" />
                </Link>
              </NavItem>
              <NavItem
                style={{
                  marginTop: "12px",
                  marginRight: "17px",
                  textDecoration: "none",
                }}
              >
                <Link
                  style={{ textDecoration: "none", fontWeight: "550" }}
                  className="nav-items"
                  to="casestu"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Case Studies
                  <div className="nav-items-inner" />
                </Link>
              </NavItem>
              <NavItem
                style={{
                  marginTop: "12px",
                  marginRight: "17px",
                  textDecoration: "none",
                }}
              >
                <Link
                  style={{ textDecoration: "none", fontWeight: "550" }}
                  className="nav-items"
                  to="learn"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Learn
                  <div className="nav-items-inner" />
                </Link>
              </NavItem>
            </Nav>
          </MediaQuery>
        </Navbar>
      </div>
    </Container>
  );
}

export default Example;
