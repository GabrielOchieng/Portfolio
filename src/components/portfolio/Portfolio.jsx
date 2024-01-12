import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "ELCK CDC WEBSITE",
    img: "https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "A fully functional website project built using the MERN stack, having a landing page, registration, login and CRUD features.",
    gitHub: "https://github.com/GabrielOchieng/elck-frontend",
    demo: "https://elck-cdc.onrender.com",
  },
  {
    id: 2,
    title: "SKILLSCONNECT",
    img: "https://images.pexels.com/photos/5598301/pexels-photo-5598301.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Skillsconnect is a website that acts as a freelancing platform that seeks to connect open jobs/gigs to the best skills globally.",
    gitHub: "https://github.com/GabrielOchieng/Skillsconnect",
    demo: "https://skillsconnect.vercel.app",
  },
  {
    id: 3,
    title: "BOOKS STORE",
    img: "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "A book store app for storing favourite books and accessing them whenever needed, with search functionalities",
    gitHub: "https://github.com/GabrielOchieng/BookStore",
    demo: "https://github.com/GabrielOchieng/BookStore",
  },
  {
    id: 4,
    title: "BLOG APP",
    img: "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "A blog that enables one to Create, Read, Update and delete blogs",
    gitHub: "https://github.com/GabrielOchieng/Blog",
    demo: "https://github.com/GabrielOchieng/Blog",
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
            <div className="buttons">
              <a href={item.demo} target="_blank">
                Demo
              </a>{" "}
              <a href={item.gitHub} target="blank">
                Github
              </a>
            </div>
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
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}{" "}
    </div>
  );
};

export default Portfolio;
