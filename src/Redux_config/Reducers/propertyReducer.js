import { SET_PROPRTY_SEARCH_DATA } from "../Actions/Types";
const initialState = {};
// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PROPRTY_SEARCH_DATA:
      return {
        ...state,
        searchData: action.payload,
      };
    default:
      return state;
  }
}
