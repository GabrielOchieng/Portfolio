import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "ELCK CDC WEBSITE",
    img: "https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id cumque voluptates distinctio ab ullam? Laboriosam!",
  },
  {
    id: 2,
    title: "SKILLSCONNECT",
    img: "https://images.pexels.com/photos/5592760/pexels-photo-5592760.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id cumque voluptates distinctio ab ullam? Laboriosam!",
  },
  {
    id: 3,
    title: "BOOKS STORE",
    img: "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id cumque voluptates distinctio ab ullam? Laboriosam!",
  },
  {
    id: 4,
    title: "MERN BLOG",
    img: "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id cumque voluptates distinctio ab ullam? Laboriosam!",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            {" "}
            <img src={item.img} alt="" />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}{" "}
    </div>
  );
};

export default Portfolio;
