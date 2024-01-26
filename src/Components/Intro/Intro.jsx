import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hi there! I Am</span>
          <span>Belen Espilman</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work.
          </span>
        </div>
        <a href={Resume} download>
          <button className="button i-button">Download my CV</button>
        </a>
        {/* <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Get In Touch</button>
        </Link> */}
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/belenespilman" target={"_blank"}>
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/belen-espilman/" target={"_blank"}>
            <img src={LinkedIn} alt="" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}

        <motion.div
          initial={{ left: "-40%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Frontend" text2="Developer" />
        </motion.div>

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="React" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgba(210, 114, 172,.3)" }}></div>
        <div
          className="blur"
          style={{
            background: "rgba(45, 158, 243, .3)",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
