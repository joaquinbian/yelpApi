import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import Business from "../business/Business";
import MainPageNav from "../mainPageNav/MainPageNav";
import { sortBy } from "../../actions/actionsCreators";

import "./mainPage.scss";

const MainPage = () => {
  const [loading, setLoading] = useState(false);
  const [select, setSelect] = useState("");

  const business = useSelector((state) => state.businesses);
  const dispatch = useDispatch();

  const pageVariant = {
    hidden: {
      opacity: 0,
      y: "50vh",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
      },
    },
  };

  const listVariants = {
    hidden: {
      opacity: 0,
    },
    visible: (i) => ({
      //i va a ser el custom, osea cada indice(0,1,2,3) y asi
      //por lo q si el delay es de i*0.3, van a tardar cada uno
      //en renderizar 3 ms mas que el anterior
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  useEffect(() => {
    sortBy(select, dispatch);
  }, [select, dispatch]);

  console.log(business);
  return (
    <motion.div
      variants={pageVariant}
      initial="hidden"
      animate="show"
      className="mainPageContainer"
    >
      <h1>Search a city (f.e: San francisco)</h1>
      <MainPageNav setLoading={setLoading} setSelect={setSelect} />
      <div className="infoContainer">
        <AnimatePresence>
          {loading ? (
            <h1>Loading</h1>
          ) : (
            <>
              {business.length > 0 && (
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { ease: "easeInOut" },
                  }}
                  className="state"
                >
                  State: {business[0]?.location.state}
                </motion.h1>
              )}

              <div className="businessesContainer">
                {business &&
                  business.map(
                    ({ name, rating, review_count, image_url }, i) => (
                      <motion.li
                        key={i}
                        variants={listVariants}
                        custom={i} //el custom le da un estilo dinamicamente a cada item, sirve para esto
                        initial="hidden"
                        animate="visible"
                      >
                        <Business
                          name={name}
                          rating={rating}
                          reviews={review_count}
                          img={image_url}
                        />
                      </motion.li>
                    )
                  )}
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default MainPage;
