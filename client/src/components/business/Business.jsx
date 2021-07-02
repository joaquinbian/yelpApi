import React from "react";
import { motion } from "framer-motion";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./business.scss";

const Business = ({ name, img, rating, reviews }) => {
  return (
    <motion.div
      className="businessContainer"
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 0px 8px rgb(255, 255,255)",

        transition: { duration: 0.3 },
      }}
    >
      <div className="imgContainer">
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { ease: "easeInOut", delay: 1, duration: 0.5 },
          }}
          src={img}
          alt="businessImg"
        />
      </div>
      <h2>{name}</h2>
      <Rating
        start={0}
        stop={5}
        readonly={true}
        initialRating={rating}
        emptySymbol={<AiOutlineStar color="gray" />}
        // step={0.5}

        fullSymbol={<AiFillStar color="yellow" />}
      />
      <div className="dataContainer">
        <h4>Rating</h4>

        <h4>{rating}</h4>
      </div>
      <div className="dataContainer">
        <h4>Reviews Count</h4>
        <h4>{reviews}</h4>
      </div>
      <div className="dataContainer">
        <h4>Score</h4>
        <h4>{(reviews * rating) / reviews + 1}</h4>
      </div>
    </motion.div>
  );
};

export default Business;
