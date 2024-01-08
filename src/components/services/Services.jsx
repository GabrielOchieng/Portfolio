import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
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
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //   animate="animate"
      //   whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on bringing your imaginations <br /> into intuitive user
          friendly interfaces
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="./images/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> skills
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your </motion.b>{" "}
            Business.
          </h1>
          <button>Skills I use?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "orange", color: "black" }}
        >
          <h2>JavaScript</h2>
          <img src=" ./images/javascript.png " alt="JavaScript" />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "orange", color: "black" }}
        >
          <h2>ReactJS</h2>
          <img src="./images/reactjs.png  " alt="ReactJs" />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "orange", color: "black" }}
        >
          <h2>NodeJS</h2>
          <img src="./images/nodeJS.png  " alt="NodeJs" />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "orange", color: "black" }}
        >
          <h2>ExpressJS</h2>
          <img src="./images/expressJS.png  " alt="ExpressJS" />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "orange", color: "black" }}
        >
          <h2>MongoDB</h2>
          <img src="./images/mongoDB.png  " alt="MongoDB" />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "orange", color: "black" }}
        >
          <h2>GitHub</h2>
          <img src="./images/github.png  " alt="GitHub" />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{
            background: "orange",
            color: "black",
          }}
        >
          <h2>TailwindCSS</h2>
          <img src="./images/tailwind.png  " alt="TaiwindCSS" />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "orange", color: "black" }}
        >
          <h2>Bootstrap</h2>
          <img src="./images/Bootstrap.jpg  " alt="Bootstrap" />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "orange", color: "black" }}
        >
          <h2>SASS</h2>
          <img src="./images/sass.png  " alt="SASS" />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "orange", color: "black" }}
        >
          <h2>CSS</h2>
          <img src="./images/css.png  " alt="CSS" />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "orange", color: "black" }}
        >
          <h2>HTML</h2>
          <img src=" ./images/html.png " alt="HTML" />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "orange", color: "black" }}
        >
          <h2>VueJS</h2>
          <img src=" ./images/vue.png " alt="HTML" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
