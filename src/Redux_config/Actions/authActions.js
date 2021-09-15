import axios from "axios";
import { SET_USER_LOGIN_STATUS } from "./Types";

const URL = "https://mc20h62r1c.execute-api.ap-south-1.amazonaws.com/Stage";

export const loginUser = () => async (dispatch) => {
  const res = await axios.get(`${URL}/login`);
  const resposne = {
    status: res.status,
    data: res.data,
  };
  dispatch({
    type: SET_USER_LOGIN_STATUS,
    payload: resposne,
  });
};
