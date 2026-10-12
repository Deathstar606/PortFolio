import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import fm from "../images/FM_BL.png";
import Contact from "./ContactMe";
import Fb from "../images/Socials/facebook dark.png";
import Git from "../images/Socials/github dark.png";
import Lin from "../images/Socials/linkedin dark.png";

import { Link } from "react-scroll";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#ece9e4",
        paddingTop: "5vh",
        paddingBottom: "3vh",
        borderTop: "3px solid #DD6410",
        color: "#2b2b2b",
      }}
    >
      <Contact />
      <Container
        className="lg-container"
        style={{ maxWidth: "95%", marginTop: "5rem" }}
      >
        <Row className="gy-4 align-items-start pb-4">
          {/* Brand & Bio Column */}
          <Col xs={12} md={5} className="mb-4 mb-md-0">
            <div className="d-flex align-items-center mb-3">
              <Link
                to="hero"
                smooth={true}
                duration={500}
                style={{ cursor: "pointer", display: "inline-block" }}
              >
                <img
                  src={fm}
                  alt="Logo"
                  style={{
                    height: "44px",
                    width: "44px",
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
                  }}
                />
              </Link>
              <div className="ml-3" style={{ marginLeft: "12px" }}>
                <h4
                  style={{
                    color: "#181818",
                    margin: 0,
                    fontWeight: "700",
                    letterSpacing: "0.5px",
                    fontSize: "1.25rem",
                  }}
                >
                  Fardin Rahman
                </h4>
                <span
                  style={{
                    color: "#DD6410",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Full-Stack Developer
                </span>
              </div>
            </div>
            <p
              style={{
                color: "#4a4a4a",
                fontSize: "0.95rem",
                lineHeight: "1.6",
                maxWidth: "380px",
                margin: "0 0 1rem 0",
              }}
            >
              Crafting responsive web applications, robust backends, and
              intuitive user experiences with modern web technologies.
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "5px 12px",
                borderRadius: "20px",
                backgroundColor: "rgba(221, 100, 16, 0.1)",
                border: "1px solid rgba(221, 100, 16, 0.4)",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#16a34a",
                  boxShadow: "0 0 6px #16a34a",
                }}
              />
              <span
                style={{
                  color: "#2a2a2a",
                  fontSize: "0.82rem",
                  fontWeight: "600",
                  letterSpacing: "0.3px",
                }}
              >
                Available for freelance & full-time roles
              </span>
            </div>
          </Col>

          {/* Quick Navigation Column */}
          <Col xs={6} md={3} className="mb-4 mb-md-0">
            <h5
              style={{
                color: "#181818",
                fontSize: "1rem",
                fontWeight: "700",
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                marginBottom: "1rem",
                borderBottom: "2px solid #DD6410",
                display: "inline-block",
                paddingBottom: "4px",
              }}
            >
              Navigation
            </h5>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { to: "hero", label: "Home" },
                { to: "about", label: "About Me" },
                { to: "casestu", label: "Case Studies" },
                { to: "learn", label: "Learn" },
              ].map((item) => (
                <li key={item.to} style={{ marginBottom: "8px" }}>
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    style={{
                      color: "#4a4a4a",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      fontWeight: "500",
                      cursor: "pointer",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#DD6410")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#4a4a4a")
                    }
                  >
                    → {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Socials & Location Column */}
          <Col xs={6} md={4}>
            <h5
              style={{
                color: "#181818",
                fontSize: "1rem",
                fontWeight: "700",
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                marginBottom: "1rem",
                borderBottom: "2px solid #DD6410",
                display: "inline-block",
                paddingBottom: "4px",
              }}
            >
              Connect
            </h5>
            <p
              style={{
                color: "#4a4a4a",
                fontSize: "0.9rem",
                marginBottom: "12px",
                lineHeight: "1.5",
              }}
            >
              Dhaka, Bangladesh · Open to Remote worldwide
            </p>
            <div className="d-flex align-items-center" style={{ gap: "14px" }}>
              <a
                href="https://github.com/Deathstar606?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                style={{
                  display: "inline-block",
                  padding: "5px",
                  borderRadius: "8px",
                  backgroundColor: "#dedad3",
                  border: "1px solid #cfcac0",
                  transition:
                    "transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.backgroundColor = "#d3cec3";
                  e.currentTarget.style.boxShadow =
                    "0 4px 10px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.backgroundColor = "#dedad3";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img
                  style={{ height: "28px", width: "28px" }}
                  src={Git}
                  alt="GitHub"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/fardin-rahman-2311942bb"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                style={{
                  display: "inline-block",
                  padding: "5px",
                  borderRadius: "8px",
                  backgroundColor: "#dedad3",
                  border: "1px solid #cfcac0",
                  transition:
                    "transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.backgroundColor = "#d3cec3";
                  e.currentTarget.style.boxShadow =
                    "0 4px 10px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.backgroundColor = "#dedad3";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img
                  style={{ height: "28px", width: "28px" }}
                  src={Lin}
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100007104457895"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                style={{
                  display: "inline-block",
                  padding: "5px",
                  borderRadius: "8px",
                  backgroundColor: "#dedad3",
                  border: "1px solid #cfcac0",
                  transition:
                    "transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.backgroundColor = "#d3cec3";
                  e.currentTarget.style.boxShadow =
                    "0 4px 10px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.backgroundColor = "#dedad3";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img
                  style={{ height: "28px", width: "28px" }}
                  src={Fb}
                  alt="Facebook"
                />
              </a>
            </div>
          </Col>
        </Row>

        {/* Bottom Bar Divider & Copyright */}
        <div
          style={{
            borderTop: "1px solid #dcd7ce",
            marginTop: "1.5rem",
            paddingTop: "1.2rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            color: "#666666",
            fontSize: "0.85rem",
          }}
        >
          <span>
            © {new Date().getFullYear()} Fardin Rahman. All rights reserved.
          </span>
          <span>Built with React, Bootstrap & Framer Motion</span>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
