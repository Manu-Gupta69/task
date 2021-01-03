import { SET_DETAILS } from "../action/data";

const initialstate = {
  detailsdata: [],
};

const detailsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SET_DETAILS:
      const filtereddata = action.payload.data.filter(
        (item) => item.current_status_code === action.payload.key
      );

    
      return { ...state, detailsdata: filtereddata };
    default:
      return initialstate;
  }
};

export default detailsReducer;
