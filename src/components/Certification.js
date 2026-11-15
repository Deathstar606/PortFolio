import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "react-bootstrap";

const CYCLE_DURATION_MS = 6000;

const CAPABILITY_SLIDES = [
  {
    id: "first",
    step: "01",
    badge: "Front-End Engineering",
    shortLabel: "Front-End",
    iconClass: "fa fa-laptop",
    title: "Design a front-end worthy of your brand",
    highlightWords: ["front-end", "brand"],
    description:
      "Responsive interfaces built with clean component architecture, accessibility, and sharp typography.",
  },
  {
    id: "second",
    step: "02",
    badge: "Interactive Motion & UX",
    shortLabel: "Motion & UX",
    iconClass: "fa fa-magic",
    title: "Interactive animations for a better user experience",
    highlightWords: ["Interactive", "animations", "user", "experience"],
    description:
      "Purposeful micro-interactions and GPU-accelerated motion choreography that guide user flow effortlessly.",
  },
  {
    id: "third",
    step: "03",
    badge: "Scalable Back-End Systems",
    shortLabel: "Back-End",
    iconClass: "fa fa-server",
    title: "Complex back-end systems to support your business",
    highlightWords: ["back-end", "systems", "business"],
    description:
      "Fault-tolerant APIs, low-latency data pipelines, and resilient cloud storage engineered to scale.",
  },
];

const drawVariant = (delay = 0, duration = 0.95) => ({
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay, duration, ease: [0.22, 1, 0.36, 1] },
      opacity: { delay, duration: 0.25 },
    },
  },
  exit: {
    pathLength: 0,
    opacity: 0,
    transition: { duration: 0.22, ease: "easeIn" },
  },
});

const popVariant = (delay = 0.2) => ({
  initial: { opacity: 0, scale: 0.72 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { delay, duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: { duration: 0.2 },
  },
});

const FrontendVisual = () => (
  <motion.svg
    className="cert-visual-svg"
    viewBox="0 0 360 280"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial="initial"
    animate="animate"
    exit="exit"
    role="img"
    aria-label="Modern front-end UI layout and code editor illustration"
  >
    <defs>
      <linearGradient id="certOrangeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF9647" />
        <stop offset="100%" stopColor="#DD6410" />
      </linearGradient>
      <linearGradient id="certSurfaceGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#2B2B2B" />
        <stop offset="100%" stopColor="#1A1A1A" />
      </linearGradient>
    </defs>

    {/* Subtle architectural frame corners */}
    <motion.path
      d="M16 42 V20 H38 M322 20 H344 V42 M16 238 V260 H38 M322 260 H344 V238"
      stroke="rgba(221, 100, 16, 0.38)"
      strokeWidth="2"
      strokeLinecap="round"
      variants={drawVariant(0, 0.8)}
    />

    {/* Monitor Stand & Base */}
    <motion.path
      d="M150 226 L138 250 H222 L210 226"
      stroke="#8F8C89"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={drawVariant(0.35, 0.7)}
    />
    <motion.rect
      x="114"
      y="250"
      width="132"
      height="8"
      rx="4"
      fill="#2C2C2C"
      stroke="#BCBAB8"
      strokeWidth="2"
      variants={popVariant(0.45)}
    />

    {/* Outer Viewport Card */}
    <motion.rect
      x="28"
      y="28"
      width="304"
      height="198"
      rx="16"
      fill="url(#certSurfaceGrad1)"
      stroke="#D8D5D2"
      strokeWidth="2.4"
      variants={drawVariant(0.05, 0.9)}
    />

    {/* Top Chrome Bar */}
    <motion.line
      x1="28"
      y1="60"
      x2="332"
      y2="60"
      stroke="rgba(255, 255, 255, 0.12)"
      strokeWidth="1.5"
      variants={drawVariant(0.25, 0.6)}
    />
    <motion.circle
      cx="48"
      cy="44"
      r="4"
      fill="#DD6410"
      variants={popVariant(0.3)}
    />
    <motion.circle
      cx="62"
      cy="44"
      r="4"
      fill="#7A7774"
      variants={popVariant(0.35)}
    />
    <motion.circle
      cx="76"
      cy="44"
      r="4"
      fill="#545250"
      variants={popVariant(0.4)}
    />
    <motion.rect
      x="104"
      y="37"
      width="142"
      height="14"
      rx="7"
      fill="#161616"
      stroke="rgba(255, 255, 255, 0.12)"
      strokeWidth="1.2"
      variants={popVariant(0.35)}
    />

    {/* Split Pane Divider */}
    <motion.line
      x1="184"
      y1="72"
      x2="184"
      y2="212"
      stroke="rgba(255, 255, 255, 0.1)"
      strokeWidth="1.5"
      strokeDasharray="4 4"
      variants={drawVariant(0.35, 0.6)}
    />

    {/* Left Column: UI Bento Layout */}
    <motion.rect
      x="44"
      y="76"
      width="124"
      height="58"
      rx="10"
      fill="rgba(221, 100, 16, 0.12)"
      stroke="url(#certOrangeGrad1)"
      strokeWidth="2.2"
      variants={drawVariant(0.3, 0.8)}
    />
    <motion.rect
      x="56"
      y="90"
      width="64"
      height="7"
      rx="3.5"
      fill="#FF8C38"
      variants={popVariant(0.55)}
    />
    <motion.rect
      x="56"
      y="104"
      width="44"
      height="5"
      rx="2.5"
      fill="#BCBAB8"
      variants={popVariant(0.62)}
    />
    <motion.circle
      cx="148"
      cy="104"
      r="10"
      stroke="#FF8C38"
      strokeWidth="2"
      fill="rgba(255, 140, 56, 0.16)"
      variants={popVariant(0.68)}
    />

    {/* Left Bottom Cards */}
    <motion.rect
      x="44"
      y="146"
      width="57"
      height="60"
      rx="9"
      fill="#1B1B1B"
      stroke="#8D8A87"
      strokeWidth="1.8"
      variants={drawVariant(0.42, 0.7)}
    />
    <motion.circle
      cx="58"
      cy="161"
      r="4"
      fill="#DD6410"
      variants={popVariant(0.7)}
    />
    <motion.path
      d="M54 176 H88 M54 188 H78"
      stroke="#BCBAB8"
      strokeWidth="2.4"
      strokeLinecap="round"
      variants={drawVariant(0.65, 0.5)}
    />

    <motion.rect
      x="111"
      y="146"
      width="57"
      height="60"
      rx="9"
      fill="#1B1B1B"
      stroke="#8D8A87"
      strokeWidth="1.8"
      variants={drawVariant(0.48, 0.7)}
    />
    <motion.circle
      cx="125"
      cy="161"
      r="4"
      fill="#BCBAB8"
      variants={popVariant(0.75)}
    />
    <motion.path
      d="M121 176 H154 M121 188 H144"
      stroke="#FF8C38"
      strokeWidth="2.4"
      strokeLinecap="round"
      variants={drawVariant(0.7, 0.5)}
    />

    {/* Right Column: Syntax Emblem </> + Code Lines */}
    <motion.path
      d="M234 90 L218 104 L234 118"
      stroke="url(#certOrangeGrad1)"
      strokeWidth="3.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={drawVariant(0.4, 0.65)}
    />
    <motion.path
      d="M262 86 L250 122"
      stroke="#F4F3F2"
      strokeWidth="3.2"
      strokeLinecap="round"
      variants={drawVariant(0.5, 0.55)}
    />
    <motion.path
      d="M280 90 L296 104 L280 118"
      stroke="url(#certOrangeGrad1)"
      strokeWidth="3.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={drawVariant(0.45, 0.65)}
    />

    <motion.path
      d="M204 142 H292"
      stroke="#BCBAB8"
      strokeWidth="4.5"
      strokeLinecap="round"
      variants={drawVariant(0.58, 0.55)}
    />
    <motion.path
      d="M204 160 H266"
      stroke="url(#certOrangeGrad1)"
      strokeWidth="4.5"
      strokeLinecap="round"
      variants={drawVariant(0.66, 0.55)}
    />
    <motion.path
      d="M204 178 H308"
      stroke="#7E7C7A"
      strokeWidth="4.5"
      strokeLinecap="round"
      variants={drawVariant(0.74, 0.55)}
    />
    <motion.path
      d="M204 196 H252"
      stroke="#D8D5D2"
      strokeWidth="4.5"
      strokeLinecap="round"
      variants={drawVariant(0.82, 0.55)}
    />

    {/* Floating Live Status Accent Pill */}
    <motion.g variants={popVariant(0.75)}>
      <rect
        x="266"
        y="16"
        width="54"
        height="22"
        rx="11"
        fill="#1E1E1E"
        stroke="#DD6410"
        strokeWidth="1.6"
      />
      <circle
        cx="281"
        cy="27"
        r="3.5"
        fill="#FF8C38"
        className="cert-live-pulse"
      />
      <line
        x1="291"
        y1="27"
        x2="309"
        y2="27"
        stroke="#F4F3F2"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </motion.g>
  </motion.svg>
);

const AnimationVisual = () => (
  <motion.svg
    className="cert-visual-svg"
    viewBox="0 0 360 280"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial="initial"
    animate="animate"
    exit="exit"
    role="img"
    aria-label="Bezier easing curve and interactive animation timeline illustration"
  >
    <defs>
      <linearGradient id="certOrangeGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#DD6410" />
        <stop offset="100%" stopColor="#FFA259" />
      </linearGradient>
      <linearGradient id="certSurfaceGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#2A2A2A" />
        <stop offset="100%" stopColor="#1B1B1B" />
      </linearGradient>
    </defs>

    {/* Subtle Coordinate Grid Guides */}
    <motion.path
      d="M44 74 H316 M44 126 H316 M44 178 H316 M108 36 V210 M180 36 V210 M252 36 V210"
      stroke="rgba(188, 186, 184, 0.1)"
      strokeWidth="1.2"
      strokeDasharray="3 5"
      variants={drawVariant(0, 0.7)}
    />

    {/* Primary Motion Stage Card */}
    <motion.rect
      x="34"
      y="30"
      width="292"
      height="188"
      rx="16"
      fill="url(#certSurfaceGrad2)"
      stroke="#D8D5D2"
      strokeWidth="2.2"
      variants={drawVariant(0.05, 0.85)}
    />

    {/* Trailing Kinetic Ghost Layers */}
    <motion.rect
      x="194"
      y="62"
      width="86"
      height="54"
      rx="10"
      stroke="rgba(221, 100, 16, 0.25)"
      strokeWidth="1.6"
      strokeDasharray="4 4"
      variants={popVariant(0.4)}
    />
    <motion.g variants={popVariant(0.55)}>
      <g className="cert-float-card">
        <rect
          x="208"
          y="54"
          width="86"
          height="54"
          rx="10"
          fill="rgba(221, 100, 16, 0.14)"
          stroke="#FF8C38"
          strokeWidth="2"
        />
        <circle cx="225" cy="72" r="5" fill="#FF9647" />
        <line
          x1="237"
          y1="72"
          x2="278"
          y2="72"
          stroke="#F4F3F2"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="220"
          y1="89"
          x2="272"
          y2="89"
          stroke="#BCBAB8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>
    </motion.g>

    {/* Soft Glow Under Bezier Curve */}
    <motion.path
      d="M68 188 C124 188, 134 74, 212 74"
      stroke="rgba(221, 100, 16, 0.25)"
      strokeWidth="10"
      strokeLinecap="round"
      variants={drawVariant(0.2, 0.95)}
    />

    {/* Cubic Bezier Easing Curve */}
    <motion.path
      d="M68 188 C124 188, 134 74, 212 74"
      stroke="url(#certOrangeGrad2)"
      strokeWidth="4"
      strokeLinecap="round"
      variants={drawVariant(0.2, 0.95)}
    />

    {/* Control Tangent Lines */}
    <motion.path
      d="M68 188 L138 188 M212 74 L142 74"
      stroke="#9D9B99"
      strokeWidth="1.8"
      strokeDasharray="4 4"
      variants={drawVariant(0.35, 0.6)}
    />

    {/* Bezier Control Handles & Anchors */}
    <motion.circle
      cx="138"
      cy="188"
      r="5.5"
      fill="#1E1E1E"
      stroke="#FF8C38"
      strokeWidth="2.5"
      variants={popVariant(0.55)}
    />
    <motion.circle
      cx="142"
      cy="74"
      r="5.5"
      fill="#1E1E1E"
      stroke="#FF8C38"
      strokeWidth="2.5"
      variants={popVariant(0.6)}
    />
    <motion.circle
      cx="68"
      cy="188"
      r="6.5"
      fill="#F4F3F2"
      stroke="#DD6410"
      strokeWidth="2.5"
      variants={popVariant(0.3)}
    />
    <motion.circle
      cx="212"
      cy="74"
      r="6"
      fill="#FF8C38"
      stroke="#F4F3F2"
      strokeWidth="2"
      variants={popVariant(0.8)}
    />

    {/* Interactive Play Pointer */}
    <motion.path
      d="M276 146 L276 184 L286 174 L298 184 L303 179 L291 169 L302 165 Z"
      fill="#F4F3F2"
      stroke="#DD6410"
      strokeWidth="2"
      strokeLinejoin="round"
      variants={popVariant(0.85)}
    />

    {/* Keyframe Timeline Scrubber Bar */}
    <motion.rect
      x="52"
      y="234"
      width="256"
      height="26"
      rx="13"
      fill="#202020"
      stroke="rgba(255, 255, 255, 0.14)"
      strokeWidth="1.6"
      variants={popVariant(0.35)}
    />
    <motion.line
      x1="76"
      y1="247"
      x2="284"
      y2="247"
      stroke="#5A5856"
      strokeWidth="2.4"
      strokeLinecap="round"
      variants={drawVariant(0.45, 0.6)}
    />
    <motion.line
      x1="76"
      y1="247"
      x2="196"
      y2="247"
      stroke="#DD6410"
      strokeWidth="3"
      strokeLinecap="round"
      variants={drawVariant(0.65, 0.6)}
    />

    {/* Keyframe Diamonds */}
    <motion.path
      d="M112 240 L119 247 L112 254 L105 247 Z"
      fill="#D8D5D2"
      variants={popVariant(0.6)}
    />
    <motion.path
      d="M196 238 L205 247 L196 256 L187 247 Z"
      fill="#FF8C38"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      variants={popVariant(0.75)}
    />
    <motion.path
      d="M254 240 L261 247 L254 254 L247 247 Z"
      fill="#7A7774"
      variants={popVariant(0.85)}
    />
  </motion.svg>
);

const BackendVisual = () => (
  <motion.svg
    className="cert-visual-svg"
    viewBox="0 0 360 280"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial="initial"
    animate="animate"
    exit="exit"
    role="img"
    aria-label="Distributed back-end server core and API mesh architecture illustration"
  >
    <defs>
      <linearGradient id="certOrangeGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF9647" />
        <stop offset="100%" stopColor="#DD6410" />
      </linearGradient>
      <linearGradient id="certSurfaceGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#2B2B2B" />
        <stop offset="100%" stopColor="#1B1B1B" />
      </linearGradient>
    </defs>

    {/* Orbital Architecture Ring */}
    <motion.circle
      cx="180"
      cy="140"
      r="102"
      stroke="rgba(221, 100, 16, 0.28)"
      strokeWidth="1.6"
      strokeDasharray="6 6"
      variants={drawVariant(0, 0.9)}
    />

    {/* Circuit Data Traces from Core to Satellite Nodes */}
    <motion.path
      d="M132 108 H102 L78 78"
      stroke="#FF8C38"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={drawVariant(0.25, 0.7)}
    />
    <motion.path
      d="M228 108 H258 L282 78"
      stroke="#BCBAB8"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={drawVariant(0.32, 0.7)}
    />
    <motion.path
      d="M132 172 H102 L78 202"
      stroke="#BCBAB8"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={drawVariant(0.38, 0.7)}
    />
    <motion.path
      d="M228 172 H258 L282 202"
      stroke="#FF8C38"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={drawVariant(0.44, 0.7)}
    />

    {/* Central Server Stack */}
    <motion.rect
      x="130"
      y="86"
      width="100"
      height="32"
      rx="8"
      fill="url(#certSurfaceGrad3)"
      stroke="#E6E3E0"
      strokeWidth="2.2"
      variants={drawVariant(0.1, 0.7)}
    />
    <motion.rect
      x="130"
      y="124"
      width="100"
      height="32"
      rx="8"
      fill="url(#certSurfaceGrad3)"
      stroke="url(#certOrangeGrad3)"
      strokeWidth="2.4"
      variants={drawVariant(0.18, 0.7)}
    />
    <motion.rect
      x="130"
      y="162"
      width="100"
      height="32"
      rx="8"
      fill="url(#certSurfaceGrad3)"
      stroke="#E6E3E0"
      strokeWidth="2.2"
      variants={drawVariant(0.26, 0.7)}
    />

    {/* Server Blade LEDs & Vents */}
    <motion.circle
      cx="146"
      cy="102"
      r="4"
      fill="#FF8C38"
      variants={popVariant(0.45)}
    />
    <motion.line
      x1="160"
      y1="102"
      x2="214"
      y2="102"
      stroke="#9E9B98"
      strokeWidth="3"
      strokeLinecap="round"
      variants={drawVariant(0.48, 0.4)}
    />

    <motion.circle
      cx="146"
      cy="140"
      r="4"
      fill="#FF8C38"
      className="cert-live-pulse"
      variants={popVariant(0.5)}
    />
    <motion.line
      x1="160"
      y1="140"
      x2="214"
      y2="140"
      stroke="#FF8C38"
      strokeWidth="3"
      strokeLinecap="round"
      variants={drawVariant(0.54, 0.4)}
    />

    <motion.circle
      cx="146"
      cy="178"
      r="4"
      fill="#BCBAB8"
      variants={popVariant(0.55)}
    />
    <motion.line
      x1="160"
      y1="178"
      x2="214"
      y2="178"
      stroke="#9E9B98"
      strokeWidth="3"
      strokeLinecap="round"
      variants={drawVariant(0.6, 0.4)}
    />

    {/* Top-Left Node: Database Cylinder */}
    <motion.g variants={popVariant(0.5)}>
      <rect
        x="32"
        y="36"
        width="54"
        height="54"
        rx="14"
        fill="#222222"
        stroke="#DD6410"
        strokeWidth="2"
      />
      <ellipse
        cx="59"
        cy="54"
        rx="13"
        ry="5"
        stroke="#F4F3F2"
        strokeWidth="2"
      />
      <path
        d="M46 54 V70 C46 73 51.8 75.5 59 75.5 C66.2 75.5 72 73 72 70 V54"
        stroke="#F4F3F2"
        strokeWidth="2"
      />
      <path
        d="M46 62 C46 65 51.8 67.5 59 67.5 C66.2 67.5 72 65 72 62"
        stroke="#FF8C38"
        strokeWidth="2"
      />
    </motion.g>

    {/* Top-Right Node: Security Shield */}
    <motion.g variants={popVariant(0.6)}>
      <rect
        x="274"
        y="36"
        width="54"
        height="54"
        rx="14"
        fill="#222222"
        stroke="#BCBAB8"
        strokeWidth="2"
      />
      <path
        d="M301 48 L314 53.5 V62.5 C314 70.5 308.5 76.5 301 79 C293.5 76.5 288 70.5 288 62.5 V53.5 Z"
        stroke="#FF8C38"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M296.5 63.5 L299.8 66.8 L306 60"
        stroke="#F4F3F2"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.g>

    {/* Bottom-Left Node: Fast API Bolt */}
    <motion.g variants={popVariant(0.68)}>
      <rect
        x="32"
        y="190"
        width="54"
        height="54"
        rx="14"
        fill="#222222"
        stroke="#BCBAB8"
        strokeWidth="2"
      />
      <path
        d="M61 203 L49 219 H58 L55 231 L69 214 H60 Z"
        stroke="#FF8C38"
        strokeWidth="2.2"
        strokeLinejoin="round"
        fill="rgba(221, 100, 16, 0.16)"
      />
    </motion.g>

    {/* Bottom-Right Node: Compute Cluster Hexagon */}
    <motion.g variants={popVariant(0.76)}>
      <rect
        x="274"
        y="190"
        width="54"
        height="54"
        rx="14"
        fill="#222222"
        stroke="#DD6410"
        strokeWidth="2"
      />
      <path
        d="M301 202 L314 209.5 V224.5 L301 232 L288 224.5 V209.5 Z"
        stroke="#F4F3F2"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="301" cy="217" r="4.5" fill="#FF8C38" />
    </motion.g>
  </motion.svg>
);

const SLIDE_VISUALS = {
  first: FrontendVisual,
  second: AnimationVisual,
  third: BackendVisual,
};

export const StaggeredText = ({
  texts = [],
  activeIndex: controlledIndex,
  highlightWords = [],
}) => {
  const [internalIndex, setInternalIndex] = useState(0);
  const currentIndex =
    typeof controlledIndex === "number" ? controlledIndex : internalIndex;

  useEffect(() => {
    if (typeof controlledIndex === "number" || texts.length <= 1) {
      return undefined;
    }
    const interval = setInterval(() => {
      setInternalIndex((prev) => (prev + 1) % texts.length);
    }, CYCLE_DURATION_MS);
    return () => clearInterval(interval);
  }, [controlledIndex, texts.length]);

  const activeText = texts[currentIndex] || "";
  const accentSet = new Set(highlightWords.map((w) => w.toLowerCase()));

  const textVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.022,
        delayChildren: 0.06,
      },
    },
    exit: {
      opacity: 0,
      y: -12,
      transition: {
        duration: 0.22,
        ease: "easeIn",
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.h3
      className="cert-headline-text"
      aria-label={activeText}
      variants={textVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      key={activeText}
    >
      <span aria-hidden="true">
        {activeText.split(" ").map((word, wordIndex, wordsArray) => {
          const cleanWord = word.replace(/[^a-zA-Z0-9-]/g, "").toLowerCase();
          const isAccent = accentSet.has(cleanWord);

          return (
            <React.Fragment key={`${wordIndex}-${word}`}>
              <span
                className={isAccent ? "cert-word-accent" : undefined}
                style={{
                  display: "inline-block",
                  whiteSpace: "nowrap",
                }}
              >
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    variants={letterVariants}
                    style={{
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
              {wordIndex < wordsArray.length - 1 ? " " : ""}
            </React.Fragment>
          );
        })}
      </span>
    </motion.h3>
  );
};

export const Cert = ({ initialView = "first" }) => {
  const initialIdx = Math.max(
    0,
    CAPABILITY_SLIDES.findIndex((slide) => slide.id === initialView)
  );
  const [activeIndex, setActiveIndex] = useState(initialIdx);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % CAPABILITY_SLIDES.length);
    }, CYCLE_DURATION_MS);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  const currentSlide = CAPABILITY_SLIDES[activeIndex] || CAPABILITY_SLIDES[0];
  const ActiveVisual = SLIDE_VISUALS[currentSlide.id] || FrontendVisual;
  const textArray = CAPABILITY_SLIDES.map((slide) => slide.title);

  return (
    <section className="cert-section-wrapper" aria-label="Core capabilities">
      <Container style={{ maxWidth: "95%" }}>
        <div className="cert-showcase-card">
          <div className="cert-showcase-grid">
            <div className="cert-visual-stage">
              <AnimatePresence mode="wait">
                <ActiveVisual key={currentSlide.id} />
              </AnimatePresence>
            </div>

            <div className="cert-copy-col">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`badge-${currentSlide.id}`}
                    className="cert-step-badge"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="cert-step-num">{currentSlide.step}</span>
                    <i className={currentSlide.iconClass} aria-hidden="true" />
                    <span>{currentSlide.badge}</span>
                  </motion.span>
                </AnimatePresence>

                <div className="cert-headline-box">
                  <AnimatePresence mode="wait">
                    <StaggeredText
                      key={`headline-${currentSlide.id}`}
                      texts={textArray}
                      activeIndex={activeIndex}
                      highlightWords={currentSlide.highlightWords}
                    />
                  </AnimatePresence>
                </div>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={`desc-${currentSlide.id}`}
                    className="cert-description"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28, delay: 0.08 }}
                  >
                    {currentSlide.description}
                  </motion.p>
                </AnimatePresence>

                <div
                  className="cert-controls-row"
                  role="tablist"
                  aria-label="Capability showcase slides"
                >
                  {CAPABILITY_SLIDES.map((slide, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={slide.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        className={`cert-pill-btn${isActive ? " active" : ""}`}
                        onClick={() => setActiveIndex(idx)}
                      >
                        <i className={slide.iconClass} aria-hidden="true" />
                        <span>{slide.shortLabel}</span>
                        {isActive && (
                          <motion.span
                            key={`progress-${activeIndex}`}
                            className="cert-pill-progress"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{
                              duration: CYCLE_DURATION_MS / 1000,
                              ease: "linear",
                            }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cert;
