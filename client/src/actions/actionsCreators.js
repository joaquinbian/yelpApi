import { GET_ALL, SORT_HIGHEST, SORT_LOWEST } from "./actionsTypes";
import axios from "axios";

export const getAll = (city, dispatch) => {
  axios
    .get(`http://localhost:3001/business`, { params: { location: city } })
    .then(({ data }) => {
      dispatch({ type: GET_ALL, payload: data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const sortBy = (sort, dispatch) => {
  const type =
    sort === "-" ? "default" : sort === "lowest" ? SORT_LOWEST : SORT_HIGHEST;
  console.log(type);
  dispatch({
    type,
  });
};
