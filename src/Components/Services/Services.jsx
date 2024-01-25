import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import HeartEmoji from "/Users/matias/Desktop/belu-portfolio/src/img/heartemoji.png"
// import Glasses from "../img/glasses.png"


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
                <span style={{ color: darkMode ? "white" : "" }}> </span>
                <span>Services</span>
                <spane>
                    Lorem ispum is simpley dummy text of printing of printing Lorem
                    <br />
                    ispum is simpley dummy text of printing
                </spane>
                {/* <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a> */}

            </div>
            {/* right */}
            <div className="cards">
                {/* first card */}
                <motion.div
                    initial={{ left: "25rem" }}
                    whileInView={{ left: "14rem" }}
                    transition={transition}
                >
                    {<Card
                        emoji={HeartEmoji}
                        heading={"Web Development"}
                        detail={"React.js, Next, Vite, Node.js"}
                    />}
                </motion.div>
                {/* second card

                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        detail={"Html, Css, JavaScript, React, Nodejs, Express"}
                    /> */}

                {/* </motion.div> */}
                {/* 3rd */}
                {/* <motion.div
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                >
                    <Card

                        heading={"UI/UX"}
                        detail={
                            "Lorem ispum dummy text are usually use in section where we need some random text"
                        }
                        color="rgba(252, 166, 31, 0.45)"
                    />
                </motion.div> */}

            </div>
        </div >
    );
};

export default Services;