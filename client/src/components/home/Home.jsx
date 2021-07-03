import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import img from "../../assets/svg/llaves2.svg";
import car2 from "../../assets/svg/auto2.svg";
import "./home.scss";
const Home = () => {
  const arrowVariants = {
    hidden: {
      y: -10,
    },
    show: {
      y: 10,
      transition: {
        duration: 1,
        ease: "easeIn",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        delay: i * 0.15,
      },
    }),
  };

  const title = "Search the best Place to park your car!";
  return (
    <AnimatePresence>
      <motion.div
        className="homeContainer"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { ease: "easeInOut", duration: 0.5 },
        }}
        exit={{
          y: 50,
          transition: { ease: "easeInOut" },
        }}
      >
        <nav className="nav">
          <h4>Parking challenge</h4>
          <img src={img} alt="keyImg" />
        </nav>
        <div className="homeContent">
          <motion.div>
            {title.split(" ").map((p, i) => (
              <motion.h1
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                animkey={i}
                custom={i}
                className="title"
              >
                {p}{" "}
              </motion.h1>
            ))}
          </motion.div>
          <div>
            <motion.img
              initial={{ x: 50, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { ease: "easeInOut", duration: 0.5, delay: 1 },
              }}
              src={car2}
            />
          </div>
        </div>
        <div className="arrowContainer">
          <motion.h1 variants={arrowVariants} initial="hidden" animate="show">
            <Link to="/main" className="link">
              &#8659;
            </Link>
          </motion.h1>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
