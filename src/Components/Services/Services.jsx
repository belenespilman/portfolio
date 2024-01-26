import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import ReactCourse from '../../img/ReactCourse.png'
import OopCourse from '../../img/OopCourse.png'
import UiUxCourse from '../../img/uiuxCourse.png'

import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Some of My</span>
        <span>Finished Courses</span>
        <span style={{ color: darkMode ? "rgba(255,255,255,.8)": ""}}>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </span>
        <a href={"https://platzi.com/p/belen.espilman/"} target="_blank">
          <button className="button s-button">See More</button>
        </a>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "18rem" }}
          transition={transition}
        >
          <Card
            logo={ReactCourse}
            heading={"ReactJS"}
            darkMode={darkMode}
            detail={"Components, Props, CSS, States, Effect, Context, Portals."}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-1rem", top: "10rem" }}
          transition={transition}
        >
          <Card
            logo={OopCourse}
            heading={"OOP"}
            darkMode={darkMode}
            detail={"Object Oriented Programming. Prototypes, classes."}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "15rem", top:"15rem" }}
          transition={transition}
        >
          <Card
            logo={UiUxCourse}
            darkMode={darkMode}
            heading={"UI/UX"}
            detail={
              "Fundamental principles of UI design for digital products."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
