import axios from "axios";
import { SET_INITIAL_STATE, GET_ERRORS } from "./Types";
axios.defaults.baseURL =
  "https://ybxt58cet4.execute-api.ap-south-1.amazonaws.com/Stage";
export const initialDataFetch = () => async (dispatch) => {
  const req = await axios.get("/search-data");
  try {
    if (req.status === 200) {
      dispatch({
        type: SET_INITIAL_STATE,
        payload: req.data,
      });
    }
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: req.data,
    });
  }
};
