import {useRef} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useInView as Fview } from "framer-motion";
import { StaggeredText } from "./Animations";

const SliderRev = {
    hidden : {
      left: 0
    },
    visible : {
      left: "100%",
      transition: {
        delay: 0,
        duration: 0.6,
        ease: "easeIn"
      }
    }
  }

function Topics() {

    const refhead = useRef(null)
    const isInview = Fview(refhead, { once: true })

    const reWeb = useRef(null)
    const isInviewWeb = Fview(reWeb, { once: true })

    const refPy = useRef(null)
    const isInviewPy = Fview(refPy, { once: true })

    const refRec = useRef(null)
    const isInviewRec = Fview(refRec, { once: true })
  
    const variants = {
      initial: {
        pathLength: 0,
        pathOffset: 1,
      },
      animate: {
        pathLength: 1,
        pathOffset: 0,
        transition: {
          duration: 2,
  
          ease: "easeInOut",
        },
      },
    };
  
    return(
            <>
            <Container style={{maxWidth: "95%"}}>
                <h2 className="headerdec pt-5 pb-5" id="learn" style={{color: "#DD6410", position: "relative", display:"inline-block", overflow: "hidden"}}>
                  <StaggeredText text={"Learn"}></StaggeredText>
                    <motion.div
                        ref={refhead}
                        variants={SliderRev}
                        initial="hidden"
                        animate={isInview ? "visible" : "hidden"}
                        style={{
                            position: "absolute",
                            width: "100%",
                            top: 0,
                            bottom: -7,
                            background: "#A9A9A9",
                            zIndex: 20
                        }}
                        />
                </h2>
                <h1 className="text-center" style={{color: "#BCBAB8"}}>"</h1>
                <h3 className="text-center" style={{color: "#DD6410", fontWeight: "500", fontSize: "clamp(25px, 2vw, 65px)"}}><StaggeredText text={"The best way to learn is to teach - Richard Feynman"}/></h3>
                <h1 className="text-center pt-4" style={{color: "#BCBAB8"}}>"</h1>
                <Container className="mt-5">
                    <Row>
                        <Col md={4} className="pb-5">
                        <motion.div
                        className='p-2 border border-1' 
                        style={{position: "relative", borderRadius: "15px"}}
                        whileHover={{scale: 1.1}}
                        transition={{duration: 0.75}}>
                            <motion.svg
                            ref={reWeb}
                            viewBox="-95 0 680 480" 
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            initial={{scale: 1}}
                            whileHover={{scale: 1.1, rotate: 5}}>
                                <motion.path d="M259.333 101.6C259.067 102.533 241.333 164.8 219.867 240C198.533 315.2 180.667 377.467 180.267 378.4C179.867 379.733 184 380 200 379.733L220.267 379.333L260.133 240C282 163.333 300 100.533 300 100.267C300 100.133 290.933 100 280 100C265.067 100 259.733 100.4 259.333 101.6Z" 
                                fill="none"
                                stroke="#DD6410"
                                strokeWidth="7"
                                variants={variants} // Pass the variants prop to the motion.path component
                                animate={isInviewWeb ? "animate" : "initial"}/>
                                <path d="M101.067 163.6C90.6667 176.667 72.5333 199.2 61.0667 213.6L40 240L79.4667 289.467C101.333 316.667 119.733 339.2 120.533 339.467C121.467 339.867 130.533 339.867 140.933 339.733L159.733 339.333L119.867 289.733L80 240.133L118.133 192.4C139.2 166.133 157.2 143.6 158.4 142.267C160.267 140.133 159.333 140 140.267 140H120.133L101.067 163.6Z"
                                fill="#DD6410"
                                stroke="#DD6410"
                                strokeWidth="1"/>
                                <path d="M322.267 143.067C323.6 144.667 341.6 167.2 362.267 193.067L400 240L360.267 289.6L320.533 339.333L339.2 339.733C349.467 339.867 358.533 339.733 359.467 339.467C360.4 339.067 378.8 316.667 400.533 289.467L440.133 240L400.267 190.4L360.533 140.667L340.133 140.267L319.733 139.867L322.267 143.067Z"
                                fill="#DD6410"
                                stroke="#DD6410"
                                strokeWidth="1"/> 
                            </motion.svg>
                            <div className="p-1">
                            <h5 className='ml-3' style={{color: "#BCBAB8"}}>Html/Css/Js</h5>
                            <ul style={{color: "#BCBAB8", fontWeight: "550"}}>
                                <li>Basics of the web development concept</li>
                                <li>Live examples with easy code implimentation</li>
                                <li>Source Code</li>
                            </ul>
                            </div>
                        </motion.div>
                        </Col>
                        <Col md={4} className="pb-5">
                        <motion.div
                        className='p-2 border border-1' 
                        style={{position: "relative", borderRadius: "15px"}}
                        whileHover={{scale: 1.1}}
                        transition={{duration: 0.75}}>
                            <motion.svg
                            ref={refPy}
                            viewBox="-120 -10 910 641"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            initial={{scale: 0.8}}
                            whileHover={{scale: 0.9, rotate: 5}}>
                                <motion.path d="M279.636 77.5088C271.245 79.5449 258.928 86.7393 252.972 93.2549C249.994 96.5127 245.528 103.3 243.227 108.322L238.896 117.417L238.489 161.805L238.083 206.192L177.581 206.6L117.079 207.007L108.011 211.351C95.4229 217.323 87.5725 224.925 81.4816 237.277L76.4736 247.594V336.641V425.688L81.4816 436.004C87.5725 448.356 95.4229 455.958 108.011 461.931L117.079 466.274L155.925 466.682L194.771 467.089L195.177 522.472L195.583 577.719L200.591 588.035C206.682 600.388 214.532 607.989 227.12 613.962L236.188 618.306H324.844H413.499L422.568 613.962C435.155 607.989 443.006 600.388 449.097 588.035L454.105 577.719L454.511 533.331L454.917 488.808L515.419 488.4L575.921 487.993L584.989 483.649C597.577 477.677 605.428 470.075 611.518 457.723L616.526 447.406V358.359V269.312L611.518 258.996C605.428 246.644 597.577 239.042 584.989 233.069L575.921 228.726L537.075 228.318L498.229 227.911L497.823 172.528L497.417 117.281L492.409 106.965C486.318 94.6123 478.468 87.0107 465.88 81.0381L456.812 76.6943L370.863 76.4229C321.731 76.2871 282.614 76.8301 279.636 77.5088ZM453.969 99.3633C461.413 101.535 472.648 112.802 474.813 120.268C477.114 128.141 477.114 306.099 474.813 313.836C472.783 320.487 464.527 330.125 457.894 333.383C453.022 335.826 446.931 335.962 344.334 336.641L236.053 337.319L225.766 342.342C213.449 348.45 205.87 356.323 199.914 368.947L195.583 378.042L195.177 411.57L194.636 445.234H160.121C136.84 445.234 123.711 444.691 119.921 443.605C112.477 441.434 101.243 430.167 99.0773 422.701C96.7764 414.692 96.7764 258.589 99.0773 250.58C101.243 243.114 112.477 231.848 119.921 229.676C124.117 228.454 155.925 228.047 248.912 228.047H372.352L375.601 224.653C377.766 222.617 378.984 219.767 378.984 217.188C378.984 214.608 377.766 211.758 375.601 209.722L372.352 206.328H316.046H259.875V166.148C259.875 138.457 260.416 124.068 261.499 120.268C263.53 113.345 274.899 101.671 281.531 99.499C288.57 97.3271 446.525 97.1914 453.969 99.3633ZM573.079 251.395C580.523 253.566 591.757 264.833 593.923 272.299C596.224 280.308 596.224 436.411 593.923 444.42C591.757 451.886 580.523 463.152 573.079 465.324C568.883 466.546 537.075 466.953 444.088 466.953H320.648L317.399 470.347C312.933 474.69 312.933 480.935 317.399 485.278L320.648 488.672H376.954H433.125V528.852C433.125 556.543 432.584 570.932 431.501 574.732C429.335 582.198 418.101 593.465 410.657 595.637C402.671 597.944 247.017 597.944 239.031 595.637C231.587 593.465 220.352 582.198 218.187 574.732C215.886 566.859 215.886 388.901 218.187 381.164C220.217 374.513 228.473 364.875 235.106 361.617C239.978 359.174 246.069 359.038 348.53 358.359L456.812 357.681L465.88 353.337C478.468 347.364 486.318 339.763 492.409 327.41L497.417 317.094L497.823 283.43L498.364 249.766H532.879C556.16 249.766 569.289 250.309 573.079 251.395Z"
                                fill="none"
                                stroke="#DD6410"
                                strokeWidth="10"
                                variants={variants} // Pass the variants prop to the motion.path component
                                animate={isInviewPy ? "animate" : "initial"}/>
                                <motion.path d="M305.218 132.213C291.547 138.186 288.299 156.375 298.992 167.099C314.151 182.438 339.056 168.728 335.13 147.28C332.694 134.521 317.399 126.783 305.218 132.213Z"
                                fill="none"
                                stroke="#DD6410"
                                strokeWidth="10"
                                variants={variants} // Pass the variants prop to the motion.path component
                                animate={isInviewPy ? "animate" : "initial"}/>
                                <motion.path d="M370.187 523.15C356.516 529.123 353.268 547.312 363.96 558.036C372.758 566.859 385.211 566.859 394.008 558.036C410.792 541.204 391.978 513.648 370.187 523.15Z"
                                fill="none"
                                stroke="#DD6410"
                                strokeWidth="10"
                                variants={variants} // Pass the variants prop to the motion.path component
                                animate={isInviewPy ? "animate" : "initial"}/>
                            </motion.svg>
                            <div className="p-1">
                            <h5 className='ml-3' style={{color: "#BCBAB8"}}>Python</h5>
                            <ul style={{color: "#BCBAB8", fontWeight: "550"}}>
                                <li>Dive deep into the fundamental building blocks of programming</li>
                                <li>Unlock the power to bring your ideas to life effortlessly</li>
                                <li>Real world projects</li>
                            </ul>
                            </div>
                        </motion.div>
                        </Col>
                        <Col md={4} className="pb-5">
                        <motion.div
                        className='p-2 border border-1' 
                        style={{position: "relative", borderRadius: "15px", height: "100%"}}
                        whileHover={{scale: 1.1}}
                        transition={{duration: 0.75}}>
                            <motion.svg
                                ref={refRec} 
                                viewBox="-100 0 951 670" 
                                fill="none" 
                                initial={{scale: 0.7}}
                                whileHover={{scale: 0.8, rotate: 5}}
                                xmlns="http://www.w3.org/2000/svg">
                                <motion.path d="M616.656 217.375C608.667 214.646 600.62 212.104 592.516 209.75C593.859 204.281 595.099 198.781 596.234 193.25C614.516 104.344 602.562 32.7187 561.766 9.14059C522.703 -13.4844 458.641 10.0937 394.016 66.4687C387.661 72.0312 381.438 77.7604 375.344 83.6562C371.281 79.7395 367.115 75.9062 362.844 72.1562C295.109 11.875 227.219 -13.5157 186.469 10.1406C147.406 32.8125 135.797 100.141 152.25 184.406C153.896 192.74 155.745 201.036 157.797 209.297C148.187 212.031 138.906 214.953 130.031 218.047C50.7188 245.781 0 289.266 0 334.359C0 380.953 54.4375 427.672 137.141 456C143.849 458.281 150.62 460.401 157.453 462.359C155.234 471.203 153.271 480.146 151.562 489.187C135.938 572 148.125 637.734 187.109 660.266C227.375 683.531 294.922 659.625 360.766 601.969C365.974 597.406 371.182 592.588 376.391 587.516C382.974 593.88 389.745 600.057 396.703 606.047C460.453 661.016 523.406 683.219 562.328 660.625C602.563 637.281 615.641 566.656 598.656 480.734C597.354 474.172 595.854 467.474 594.156 460.641C598.906 459.234 603.557 457.781 608.109 456.281C694.047 427.734 750.031 381.578 750.031 334.406C750 289.094 697.656 245.328 616.656 217.375ZM415.094 90.6875C470.453 42.3906 522.203 23.3281 545.797 36.9531C570.906 51.4687 580.672 110 564.891 186.766C563.849 191.766 562.724 196.75 561.516 201.719C528.479 194.204 494.977 188.901 461.234 185.844C441.915 158.014 420.736 131.521 397.844 106.547C403.448 101.109 409.188 95.8229 415.063 90.6875H415.094ZM221.453 372.891C228.234 386.016 235.323 398.979 242.719 411.781C250.25 424.844 258.099 437.714 266.266 450.391C243.048 447.866 219.976 444.148 197.141 439.25C203.766 417.812 211.922 395.547 221.453 372.891ZM221.453 297.375C212.078 275.203 204.141 253.391 197.625 232.328C219.031 227.531 241.844 223.609 265.625 220.641C257.656 233.078 249.99 245.698 242.625 258.5C235.26 271.302 228.187 284.26 221.406 297.375H221.453ZM238.484 335.141C248.359 314.547 258.995 294.349 270.391 274.547C281.776 254.755 293.896 235.417 306.75 216.531C329.063 214.844 351.937 213.953 375.047 213.953C398.156 213.953 421.172 214.844 443.469 216.547C456.188 235.391 468.234 254.661 479.609 274.359C490.984 294.057 501.76 314.161 511.938 334.672C501.896 355.338 491.146 375.62 479.688 395.516C468.323 415.307 456.344 434.703 443.75 453.703C421.484 455.266 398.438 456.125 375 456.125C351.562 456.125 328.953 455.391 307.094 453.969C294.146 435.021 281.927 415.599 270.438 395.703C258.948 375.807 248.281 355.62 238.438 335.141H238.484ZM507.422 411.562C514.974 398.458 522.224 385.182 529.172 371.734C538.696 393.329 547.103 415.4 554.359 437.859C531.256 443.062 507.896 447.052 484.375 449.812C492.312 437.219 499.995 424.469 507.422 411.562ZM528.859 297.391C521.943 284.213 514.75 271.193 507.281 258.328C499.99 245.641 492.391 233.109 484.484 220.734C508.406 223.766 531.359 227.797 552.875 232.719C545.957 254.664 537.942 276.249 528.859 297.391ZM375.359 129.5C390.962 146.548 405.694 164.373 419.5 182.906C389.969 181.5 360.417 181.5 330.844 182.906C345.422 163.625 360.344 145.734 375.359 129.5ZM202.594 37.9062C227.688 23.3437 283.172 44.1562 341.656 96.1406C345.391 99.4687 349.156 102.953 352.906 106.562C329.896 131.533 308.568 158.003 289.062 185.797C255.395 188.83 221.959 194.05 188.969 201.422C187.063 193.755 185.344 186.036 183.812 178.266C169.672 106.031 179.031 51.5781 202.594 37.9062ZM166.016 431.422C159.766 429.641 153.594 427.708 147.5 425.625C110.938 413.125 80.7344 396.812 60 379.047C41.4375 363.125 32.0312 347.234 32.0312 334.359C32.0312 307 72.75 272.094 140.656 248.422C149.187 245.453 157.792 242.74 166.469 240.281C176.554 272.692 188.768 304.402 203.031 335.203C188.598 366.43 176.233 398.573 166.016 431.422ZM339.656 577.781C310.547 603.281 281.391 621.359 255.687 630.469C232.594 638.641 214.203 638.875 203.094 632.453C179.437 618.781 169.594 565.984 183.016 495.172C184.609 486.839 186.432 478.505 188.484 470.172C221.805 477.35 255.576 482.252 289.563 484.844C309.259 512.783 330.763 539.402 353.938 564.531C349.281 569.109 344.516 573.516 339.656 577.781ZM376.25 541.5C361.062 525.078 345.906 506.906 331.125 487.375C345.49 487.937 360.115 488.219 375 488.219C390.281 488.219 405.406 487.891 420.312 487.219C406.557 506.049 391.85 524.166 376.25 541.5ZM570.813 586.172C566.344 610.297 557.359 626.391 546.25 632.828C522.609 646.547 472.062 628.719 417.562 581.703C411.312 576.328 405.063 570.563 398.703 564.516C421.426 539.289 442.427 512.562 461.562 484.516C495.737 481.62 529.672 476.373 563.125 468.813C564.656 475 566.01 481.062 567.188 487C574.703 524.969 575.781 559.312 570.813 586.172ZM598 425.797C593.906 427.156 589.688 428.469 585.406 429.75C574.916 397.187 562.226 365.374 547.422 334.531C561.67 304.1 573.864 272.749 583.922 240.687C591.594 242.922 599.047 245.266 606.219 247.75C675.625 271.687 717.969 307.125 717.969 334.359C717.969 363.422 672.234 401.141 598 425.797Z"
                                fill="none"
                                stroke="#DD6410"
                                strokeWidth="7"
                                variants={variants} // Pass the variants prop to the motion.path component
                                animate={isInviewRec ? "animate" : "initial"}/>
                                <path d="M375 401.484C388.298 401.528 401.309 397.624 412.387 390.268C423.464 382.911 432.11 372.433 437.229 360.16C442.348 347.887 443.71 334.371 441.142 321.324C438.574 308.276 432.192 296.284 422.805 286.866C413.417 277.448 401.446 271.027 388.407 268.417C375.368 265.807 361.848 267.124 349.558 272.203C337.268 277.282 326.762 285.893 319.37 296.947C311.977 308.001 308.031 320.999 308.031 334.297C308.013 343.107 309.731 351.834 313.087 359.98C316.443 368.125 321.372 375.53 327.591 381.77C333.811 388.009 341.199 392.962 349.334 396.345C357.468 399.728 366.19 401.474 375 401.484Z"
                                fill="#DD6410"
                                stroke="#DD6410"
                                strokeWidth="7"/>
                            </motion.svg>
                            <div className="p-1">
                            <h5 className='ml-3' style={{color: "#BCBAB8"}}>React</h5>
                            <ul style={{color: "#BCBAB8", fontWeight: "550"}}>
                                <li>States, Functional components and Redux</li>
                                <li>Dynamic Ui designs</li>
                                <li>Front-end to Back-end intrigation</li>
                            </ul>
                            </div>
                        </motion.div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            </>
    )
}

export default Topics