import React from "react";
import HeroSec from './HeroSec';
import AboutMe from "./AboutMe";
import RenderItem from './Case Studies';
import Topics from './Learn';
import Skills from './Skills';
import Cert from "./Certification";
import TestiSlide from './Testimonial';
import { motion } from "framer-motion";

function Home() {
    return (
        <motion.div
        transition={{delay: 0.2, duration: 1, type: "tween", ease: "easeIn"}}
        exit= {{x: -1000, opacity: 0}}>
          <HeroSec/>
          <div style={{backgroundColor: "#181818"}}>
            <AboutMe/>
            <RenderItem/>
            <Topics/>
            <Cert/>
            <Skills/>
            <TestiSlide/>
          </div>
        </motion.div>
    )
}

export default Home;
