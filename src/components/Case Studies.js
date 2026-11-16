import { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { StaggeredText } from "./Animations";
import Rect from "../images/Comprised Off/React.png";
import Json from "../images/Comprised Off/Json.png";
import fire from "../images/Comprised Off/fire.png";
import mongo from "../images/Comprised Off/Mongo.png";
import wp from "../images/Skill_Icons/icons8-wordpress-50.png";

const CASE_CATEGORIES = [
  {
    id: "research",
    label: "Research Papers",
    iconClass: "fa fa-file-text-o",
  },
  {
    id: "fullstack",
    label: "Full-Stack Applications",
    iconClass: "fa fa-code",
  },
  {
    id: "rag",
    label: "RAG Applications",
    iconClass: "fa fa-database",
  },
];

const CASE_DATA = {
  fullstack: [
    {
      id: "confusion",
      text: "ConFusion",
      text2: "Restaurant Application",
      icons: [
        { src: Rect, alt: "React", invert: true },
        { src: mongo, alt: "MongoDB", invert: false },
      ],
      tags: ["Full-Stack", "MERN Stack", "Restaurant App"],
      link: "https://deathstar606.github.io/ConFusion/#/home",
      key_feat:
        "Interactive dish catalog, reservation management, dynamic customer feedback system, and full responsive menu filtering.",
      tech_stack: "React, Redux, Node.js, Express, MongoDB, Bootstrap",
    },
    {
      id: "galaxy-reno",
      text: "Galaxy Reno",
      text2: "Renovation Corporation",
      icons: [
        { src: Rect, alt: "React", invert: true },
        { src: mongo, alt: "MongoDB", invert: false },
      ],
      tags: ["Full-Stack", "MERN Stack", "Renovation Portal"],
      link: "https://galaxyreno-git-main-deathstar606s-projects.vercel.app/#/home",
      key_feat:
        "Full-service renovation portfolio, project estimation requests, modern image gallery showcase, and client consultation bookings.",
      tech_stack: "React, Node.js, MongoDB, Framer Motion, Bootstrap",
    },
    {
      id: "veloura",
      text: "Veloura",
      text2: "Ecommerce Web Application",
      icons: [
        { src: Rect, alt: "React", invert: true },
        { src: mongo, alt: "MongoDB", invert: false },
      ],
      tags: ["Full-Stack", "E-Commerce", "RESTful APIs"],
      link: "https://www.velourabd.com/",
      key_feat:
        "Modern e-commerce storefront featuring real-time product filtering, secure multi-step cart & checkout, dynamic inventory tracking, and client account management.",
      tech_stack:
        "React, Redux Toolkit, Node.js, Express, MongoDB, RESTful APIs",
    },
    {
      id: "digix",
      text: "Digix",
      text2: "Ongoing project",
      icons: [
        { src: Rect, alt: "React", invert: true },
        { src: Json, alt: "JSON Server", invert: true },
      ],
      tags: ["Full-Stack", "Agency Platform", "Ongoing Project"],
      link: "https://deathstar606.github.io/Digi_Port/#/home",
      key_feat:
        "Digital agency platform with dynamic service showcases, client engagement workflows, and interactive service proposal views.",
      tech_stack: "React, JSON Server, Framer Motion, CSS Modules",
    },
    {
      id: "vergo",
      text: "VerGo",
      text2: "Clothing Brand App",
      icons: [
        { src: Rect, alt: "React", invert: true },
        { src: fire, alt: "Firebase", invert: false },
      ],
      tags: ["Full-Stack", "Cloud / Firebase", "Clothing Brand"],
      link: "https://deathstar606.github.io/VerGo/#/home",
      key_feat:
        "Curated apparel collections, real-time Firebase cloud data synchronization, user authentication, and responsive product discovery.",
      tech_stack: "React, Firebase Realtime Database, Firestore, Bootstrap",
    },
    {
      id: "technowave",
      text: "TechnoWave",
      text2: "Project Built on WordPress",
      icons: [{ src: wp, alt: "WordPress", invert: true }],
      tags: ["WordPress", "WooCommerce", "Tech Store"],
      to: "/techno-wave",
      key_feat:
        "Dynamic tech store application designed for custom PC builds and laptops, featuring WooCommerce product management, customizable carts, and category sorting.",
      tech_stack: "WordPress, WooCommerce, PHP, Elementor, Custom CSS",
    },
  ],
  research: [
    {
      id: "research-hybrid-retrieval",
      text: "Testing General Relativeity using Nural Posterior Estimation",
      text2:
        "Mapping first order post newtonian approximations to the Einstein field equations using neural posterior estimation and hybrid retrieval pipelines.",
      iconClasses: ["fa fa-file-text-o", "fa fa-flask"],
      tags: [
        "Gravitational Waves",
        "Retrieval-Augmented",
        "Research Paper",
        "Placeholder",
      ],
      key_feat:
        "Placeholder study examining reciprocal rank fusion across dense bi-encoder embeddings, BM25 sparse scoring, and cross-encoder reranking pipelines for technical corpora.",
      tech_stack:
        "PyTorch, Transformers, Normalizing Flows, Neural Posterior Estimation",
      isPlaceholder: true,
    },
  ],
  rag: [
    {
      id: "echo-maxitext-rag",
      text: "Echo (MaxiText AI Studio)",
      text2: "Autonomous B2B Operations & Multi-Source RAG Platform",
      iconClasses: ["fa fa-database", "fa fa-cogs"],
      tags: ["RAG", "B2B Operations", "Human-in-the-Loop", "Multi-Source AI"],
      link: "https://echo-oyzy.vercel.app/",
      key_feat:
        "Unites customer support queues (Gmail, Slack, Toleto), live operational tables (Google Sheets, CSVs, DB), and chunked policy docs (PDF, Markdown, Google Docs) in one multi-tenant workspace. Features 5-turn conversational memory, full-provenance row/chunk citations, Socratic conflict disambiguation, and a two-stage pipeline (Stage 1 diff & draft previews -> Stage 2 atomic live commits).",
      tech_stack:
        "Retrieval-Augmented Generation (RAG), Document Chunking, Google Workspace APIs (Gmail, Sheets, Docs), Multi-Tenant RBAC, Vercel",
    },
  ],
};

const SliderRev = {
  hidden: {
    left: 0,
  },
  visible: {
    left: "100%",
    transition: {
      duration: 1.2,
      ease: "easeIn",
    },
  },
};

function CaseCard({ item, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      className={`case-card${isExpanded ? " expanded" : ""}`}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, delay: index * 0.05, ease: "easeOut" }}
    >
      <div className="case-card-top">
        <div className="case-card-identity">
          <div className="case-card-icons">
            {item.icons &&
              item.icons.map((icon, iconIndex) => (
                <img
                  key={iconIndex}
                  src={icon.src}
                  alt={icon.alt}
                  className={`case-stack-icon${
                    icon.invert ? " invert-dark" : ""
                  }`}
                />
              ))}
            {item.iconClasses &&
              item.iconClasses.map((iconCls, iconIndex) => (
                <span
                  key={iconIndex}
                  className="case-fa-icon-badge"
                  aria-hidden="true"
                >
                  <i className={iconCls} />
                </span>
              ))}
          </div>
          <h3 className="case-card-title">{item.text}</h3>
        </div>

        <button
          type="button"
          className="case-details-btn"
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <span>Details</span>
          <motion.span
            aria-hidden="true"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <i className="fa fa-chevron-down" />
          </motion.span>
        </button>
      </div>

      <div className="case-divider" />

      <div className="case-tags-row">
        {item.tags.map((tag, tagIdx) => (
          <span key={tagIdx} className="case-tag-pill">
            <i className="fa fa-tag case-tag-icon" aria-hidden="true" />
            <span>{tag}</span>
          </span>
        ))}
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="details"
            className="case-details-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="case-details-inner">
              {item.text2 && (
                <div>
                  <span className="case-detail-block-label">
                    Category / Role
                  </span>
                  <p className="case-detail-copy">{item.text2}</p>
                </div>
              )}

              {item.key_feat && (
                <div>
                  <span className="case-detail-block-label">Key Features</span>
                  <p className="case-detail-copy">{item.key_feat}</p>
                </div>
              )}

              {item.tech_stack && (
                <div>
                  <span className="case-detail-block-label">Tech Stack</span>
                  <p className="case-detail-copy">{item.tech_stack}</p>
                </div>
              )}

              <div className="case-detail-footer">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-cta-btn"
                  >
                    <span>Launch</span>
                    <i className="fa fa-external-link" aria-hidden="true" />
                  </a>
                ) : item.to ? (
                  <Link to={item.to} className="case-cta-btn">
                    <span>Show Case Study</span>
                    <i className="fa fa-arrow-right" aria-hidden="true" />
                  </Link>
                ) : (
                  <span className="case-placeholder-badge">
                    <i className="fa fa-clock-o" aria-hidden="true" />
                    <span>Placeholder Entry · Preview Coming Soon</span>
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function RenderItem() {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const [activeCategory, setActiveCategory] = useState("fullstack");

  const activeItems = CASE_DATA[activeCategory] || [];

  return (
    <section className="case-studies-wrapper">
      <Container style={{ maxWidth: "95%" }}>
        <h2
          className="headerdec pt-5 pb-3"
          id="casestu"
          style={{
            color: "#DD6410",
            position: "relative",
            display: "inline-block",
            overflow: "hidden",
            lineHeight: "1.2",
            marginBottom: "28px",
          }}
        >
          <StaggeredText text={"Case Studies"} />
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

        <div className="case-tabs-shell">
          <div
            className="case-tabs-bar"
            role="tablist"
            aria-label="Case study categories"
          >
            {CASE_CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id;
              const count = (CASE_DATA[category.id] || []).length;

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  id={`case-tab-${category.id}`}
                  aria-selected={isActive}
                  aria-controls={`case-panel-${category.id}`}
                  className={`case-tab-btn${isActive ? " active" : ""}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="case-tab-label-wrap">
                    <i className={category.iconClass} aria-hidden="true" />
                    <span>{category.label}</span>
                  </span>
                  <span className="case-tab-count">{count}</span>
                  {isActive && (
                    <motion.span
                      layoutId="caseActiveTabBar"
                      className="case-tab-active-bar"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            role="tabpanel"
            id={`case-panel-${activeCategory}`}
            aria-labelledby={`case-tab-${activeCategory}`}
            className="case-tab-panel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="case-cards-list">
              {activeItems.map((item, index) => (
                <CaseCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}

export default RenderItem;
