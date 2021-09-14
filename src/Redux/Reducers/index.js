import { combineReducers } from "redux";
import initialDataFetch from "./initialFetch";
export default combineReducers({
  initalData: initialDataFetch,
});
