import "./navbar.scss";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar  */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          THEGABRIELSHOW
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/gabrielochieng" target="blank">
            <BsLinkedin className="iconso" />
          </a>
          <a href="https://github.com/GabrielOchieng" target="blank">
            <BsGithub className="iconso" />
          </a>
          <a
            href="https://x.com/TechieGabriel?t=D8iyVIeZnEVOlPdImbJ2HQ&s=09"
            target="blank"
          >
            <BsTwitterX className="iconso" />
          </a>
          <a href="https://www.linkedin.com/in/gabrielochieng" target="blank">
            <BsFacebook className="iconso" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
