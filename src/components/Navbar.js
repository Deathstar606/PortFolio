import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import fm from "../images/FM_BL.png";
import axios from "axios";

const CV_DOWNLOAD_URL =
  "https://raw.githubusercontent.com/Deathstar606/PortFolio/master/CV.pdf";

export const Burger = ({ handleOrdPage, DownCv, onNavigateSection }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleOrdPage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleOrdPage]);

  return (
    <motion.div
      onClick={handleOrdPage}
      className="modal-back"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.aside
        className="nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        onClick={(e) => e.stopPropagation()}
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 320, damping: 32 }}
      >
        <div className="nav-drawer-header">
          <span className="nav-drawer-label">Navigation</span>
          <button
            type="button"
            className="nav-drawer-close"
            onClick={handleOrdPage}
            aria-label="Close navigation menu"
          >
            <i className="fa fa-times" aria-hidden="true" />
          </button>
        </div>

        <ul className="nav-drawer-list">
          <li>
            <a
              href="#casestu"
              className="nav-drawer-link"
              onClick={(e) => {
                e.preventDefault();
                handleOrdPage();
                if (onNavigateSection) {
                  onNavigateSection("casestu");
                } else {
                  scroller.scrollTo("casestu", {
                    smooth: true,
                    offset: -20,
                    duration: 500,
                  });
                }
              }}
            >
              <i className="fa fa-briefcase nav-drawer-icon" aria-hidden="true" />
              <span>Case Studies</span>
            </a>
          </li>

          <li>
            <a
              href="#learn"
              className="nav-drawer-link"
              onClick={(e) => {
                e.preventDefault();
                handleOrdPage();
                if (onNavigateSection) {
                  onNavigateSection("learn");
                } else {
                  scroller.scrollTo("learn", {
                    smooth: true,
                    offset: -20,
                    duration: 500,
                  });
                }
              }}
            >
              <i className="fa fa-book nav-drawer-icon" aria-hidden="true" />
              <span>Learn</span>
            </a>
          </li>

          <li>
            <button
              type="button"
              className="nav-drawer-link"
              onClick={() => {
                handleOrdPage();
                DownCv();
              }}
            >
              <i className="fa fa-download nav-drawer-icon" aria-hidden="true" />
              <span>CV</span>
            </button>
          </li>
        </ul>
      </motion.aside>
    </motion.div>
  );
};

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isLightNav = location.pathname !== "/";

  const burgerToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDownload = () => {
    axios({
      url: CV_DOWNLOAD_URL,
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      const objectUrl = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = objectUrl;
      link.setAttribute("download", "Fardin Mridul CV.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(objectUrl);
    });
  };

  const handleNavigateSection = (sectionId) => {
    if (location.pathname === "/") {
      scroller.scrollTo(sectionId, {
        smooth: true,
        offset: -10,
        duration: 500,
      });
      return;
    }

    navigate("/");
    setTimeout(() => {
      scroller.scrollTo(sectionId, {
        smooth: true,
        offset: -10,
        duration: 500,
      });
    }, 150);
  };

  return (
    <>
      <header
        className={`site-navbar${isLightNav ? " site-navbar--light" : ""}`}
      >
        <nav className="site-navbar-inner" aria-label="Main navigation">
          <RouterLink
            to="/"
            className="site-nav-brand"
            aria-label="Fardin Mridul Home"
          >
            <img src={fm} alt="FM Logo" className="site-nav-logo" />
          </RouterLink>

          <ul className="site-nav-links">
            <li>
              <button
                type="button"
                onClick={handleDownload}
                className="nav-items"
              >
                CV
                <span className="nav-items-inner" aria-hidden="true" />
              </button>
            </li>
            <li>
              <a
                href="#casestu"
                className="nav-items"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigateSection("casestu");
                }}
              >
                Case Studies
                <span className="nav-items-inner" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="#learn"
                className="nav-items"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigateSection("learn");
                }}
              >
                Learn
                <span className="nav-items-inner" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <button
        type="button"
        onClick={burgerToggle}
        className={`nav-burger-btn${isScrolled ? " scrolled" : ""}${
          isLightNav ? " site-navbar--light" : ""
        }`}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
      >
        <span className="nav-burger-bar nav-burger-bar--top" />
        <span className="nav-burger-bar nav-burger-bar--mid" />
        <span className="nav-burger-bar nav-burger-bar--bottom" />
      </button>

      <AnimatePresence mode="wait">
        {isOpen && (
          <Burger
            handleOrdPage={burgerToggle}
            DownCv={handleDownload}
            onNavigateSection={handleNavigateSection}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Example;
