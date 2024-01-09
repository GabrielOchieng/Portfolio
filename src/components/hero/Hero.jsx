import "./hero.scss";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>GABRIEL OCHIENG</motion.h2>
          <motion.h1 variants={textVariants}>Frontend Developer</motion.h1>

          <motion.div className="buttons" variants={textVariants}>
            <AnchorLink href="#Portfolio">
              <motion.button variants={textVariants}>
                See the latest work
              </motion.button>
            </AnchorLink>
            <AnchorLink href="#Contact">
              <motion.button variants={textVariants} className="btn">
                Contact me
              </motion.button>
            </AnchorLink>
          </motion.div>
          <motion.img
            src="./images/scroll.png"
            alt=""
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Frontend Developer MERN-Stack Specialist
      </motion.div>
      <div className="imageContainer">
        <img src="./images/Gab.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
