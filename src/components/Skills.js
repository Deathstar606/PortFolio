import React, { useState, useRef } from "react";
import { Container } from "reactstrap";
import { StaggeredText } from "./Animations";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Prog from "../images/Skill_Icons/icons8-python-50.png";
import Rect from "../images/Skill_Icons/icons8-react-96.png";
import Node from "../images/Skill_Icons/icons8-node-js-96.png";
import wp from "../images/Skill_Icons/icons8-wordpress-50.png";
import next from "../images/Skill_Icons/icons8-nextjs-48.png";
import fig from "../images/Skill_Icons/icons8-figma-100.png";
import Mongo from "../images/Skill_Icons/icons8-mongo-db-96.png";
import Redu from "../images/Skill_Icons/icons8-redux-100.png";
import Fire from "../images/Skill_Icons/firebase.png";

const SKILL_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "backend", label: "Backend & Data" },
];

const SKILLS_DATA = [
  {
    id: "python",
    name: "Python",
    role: "AI / ML & Scripting",
    category: "backend",
    icon: Prog,
  },
  {
    id: "react",
    name: "React",
    role: "UI Library",
    category: "frontend",
    icon: Rect,
  },
  {
    id: "nextjs",
    name: "Next.js",
    role: "Full-Stack Framework",
    category: "frontend",
    icon: next,
    invertDark: true,
  },
  {
    id: "nodejs",
    name: "Node.js",
    role: "Backend Runtime",
    category: "backend",
    icon: Node,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    role: "NoSQL Database",
    category: "backend",
    icon: Mongo,
  },
  {
    id: "redux",
    name: "Redux",
    role: "State Management",
    category: "frontend",
    icon: Redu,
  },
  {
    id: "firebase",
    name: "Firebase",
    role: "Cloud & Auth",
    category: "backend",
    icon: Fire,
  },
  {
    id: "figma",
    name: "Figma",
    role: "UI / UX Design",
    category: "frontend",
    icon: fig,
  },
  {
    id: "wordpress",
    name: "WordPress",
    role: "CMS Platform",
    category: "frontend",
    icon: wp,
    invertDark: true,
  },
];

const SliderRev = {
  hidden: { left: 0 },
  visible: {
    left: "100%",
    transition: { duration: 1.2, ease: "easeIn" },
  },
};

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const visibleSkills =
    activeCategory === "all"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === activeCategory);

  return (
    <section className="skills-section" id="skills">
      <Container style={{ maxWidth: "95%" }}>
        <div className="skills-header-row">
          <div>
            <h2
              className="headerdec pt-5 pb-2"
              style={{
                color: "#DD6410",
                position: "relative",
                display: "inline-block",
                overflow: "hidden",
                lineHeight: "1.2",
                marginBottom: "10px",
              }}
            >
              <StaggeredText text={"Skills"} />
              <motion.div
                ref={headerRef}
                variants={SliderRev}
                initial="hidden"
                animate={isHeaderInView ? "visible" : "hidden"}
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
            <p className="skills-subtitle">
              Core languages, frameworks, and tools I use to build production applications.
            </p>
          </div>
        </div>

        <div className="skills-shell">
          <div
            className="skills-filter-bar"
            role="tablist"
            aria-label="Skill categories"
          >
            {SKILL_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count =
                cat.id === "all"
                  ? SKILLS_DATA.length
                  : SKILLS_DATA.filter((s) => s.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`skills-filter-btn${isActive ? " active" : ""}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span>{cat.label}</span>
                  <span className="skills-filter-count">{count}</span>
                  {isActive && (
                    <motion.span
                      layoutId="skillsActiveTabBar"
                      className="skills-filter-active-bar"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="skills-grid"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              {visibleSkills.map((item, idx) => (
                <motion.article
                  key={item.id}
                  className="skill-card"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.28,
                    delay: idx * 0.04,
                    ease: "easeOut",
                  }}
                >
                  <span className="skill-card-corner" aria-hidden="true" />
                  <div className="skill-icon-well">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="skill-card-icon"
                    />
                  </div>
                  <div className="skill-card-meta">
                    <h3 className="skill-card-name">{item.name}</h3>
                    <span className="skill-card-role">{item.role}</span>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}

export default Skills;
