import { GET_ALL, SORT_HIGHEST, SORT_LOWEST } from "./actions/actionsTypes";
import { baseyianSort } from "./assets/assets";
const initialState = {
  businesses: [],
  businessesReplacement: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL: {
      return {
        businesses: [...action.payload],
        businessesReplacement: [...action.payload],
      };
    }
    case SORT_LOWEST: {
      console.log("ente aca lowest");
      return {
        ...state,
        businesses: state.businesses.sort(baseyianSort).reverse(),
      };
    }
    case SORT_HIGHEST: {
      console.log("ente aca highes");
      return {
        ...state,
        businesses: state.businesses.sort(baseyianSort),
      };
    }

    default:
      console.log("aca estoy");
      return {
        ...state,
        businesses: [...state.businessesReplacement],
      };
  }
};

export default rootReducer;
