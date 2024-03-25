import React from "react";
import HeroSec from './HeroSec';
import AboutMe from "./AboutMe";
import RenderItem from './Case Studies';
import Topics from './Learn';
import Skills from './Skills';
import Cert from "./Certification";
import TestiSlide from './Testimonial';

function Home() {
    return (
        <>
          <HeroSec/>
          <div style={{backgroundColor: "#181818"}}>
            <AboutMe/>
            <RenderItem/>
            <Topics/>
            <Cert/>
            <Skills/>
            <TestiSlide/>
          </div>
        </>
    )
}

export default Home;
