import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAll } from "../../actions/actionsCreators";
import { motion } from "framer-motion";
import "./mainPageNav.scss";

function MainPageNav({ setLoading, setSelect }) {
  const [city, setCity] = useState("");
  const business = useSelector((state) => state.businesses);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    setCity(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    getAll(city, dispatch);
    setCity("");
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <input type="text" value={city} onChange={handleChange} />
        {business.length > 1 && (
          <select onChange={(e) => setSelect(e.target.value)}>
            <option value="-">-</option>
            <option value="lowest">lowest</option>
            <option value="highest">highest</option>
          </select>
        )}
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255, 255,255)",
            boxShadow: "0px 0px 8px rgb(255, 255,255)",
            transition: { duration: 0.5 },
          }}
          type="submit"
        >
          Search
        </motion.button>
      </form>
    </div>
  );
}

export default MainPageNav;
