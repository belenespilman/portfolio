import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";


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
                    <span style={{ color: darkMode ? "white" : "" }}>Hi! I'm</span>
                    <span>Belén Espilman</span>
                    <span>
                        a passionate front-end developer with a keen eye for design and a commitment to creating engaging and responsive user experiences.
                    </span>
                </div>
                <Link to="contact" smooth={true} spy={true}>
                    {/* <button className="button i-button">Hire me</button> */}
                </Link>
                {/* social icons */}
                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            {/* right image side */}
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                {/* <img src={boy} alt="" /> */}
                {/* animation */}
                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                // src={glassesimoji}
                // alt=""
                />

                <motion.div
                    initial={{ top: "8%", left: "60%" }}
                    whileInView={{ left: "68%" }}
                    transition={transition}
                    className="floating-div"
                >
                    <FloatinDiv img={crown} text1="Web" text2="Developer" />
                </motion.div>

                {/* animation */}
                <motion.div
                    initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={transition}
                    className="floating-div"
                >
                    {/* floatinDiv mein change hy dark mode ka */}
                    <FloatinDiv img={thumbup} text1="Front-end" text2="Developer" />
                </motion.div>

                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div
                    className="blur"
                    style={{
                        background: "#C1F5FF",
                        top: "17rem",
                        width: "21rem",
                        height: "11rem",
                        left: "-9rem",
                    }}
                ></div>
            </div>
        </div >
    );
};

export default Intro;