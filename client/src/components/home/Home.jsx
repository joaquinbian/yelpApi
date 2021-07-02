import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img from "../../assets/img/parkingChallenge2.jpg";
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

  const title = "Hola soy el cliente";
  return (
    <motion.div
      className="homeContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { ease: "easeInOut", duration: 0.5 } }}
    >
      <nav className="nav">acá va a ir un logo</nav>
      <div className="homeContent">
        <h1> Search the best Place to park your car! </h1>
        <img src={img} alt="parking" />
      </div>
      <div className="arrowContainer">
        <motion.h1
          variants={arrowVariants}
          initial="hidden"
          animate="show"
          // className="arrowContainer"
        >
          <Link to="/main" className="link">
            &#8659;
          </Link>
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default Home;
