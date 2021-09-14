import { GET_ERRORS, SET_INITIAL_STATE } from "../Actions/Types";

const initialState = {
  siteStaus: "live",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_INITIAL_STATE:
      return {
        ...state,
        initialFetchData: action.payload,
      };
    case GET_ERRORS:
      return action.payload ? action.payload : null;
    default:
      return state;
  }
}
