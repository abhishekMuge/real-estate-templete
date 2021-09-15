import axios from "axios";
import {
  SET_PROPRTY_SEARCH_DATA,
  POST_PROPERTY_DETAILS,
} from "../Actions/Types";

const URL = "https://mc20h62r1c.execute-api.ap-south-1.amazonaws.com/Stage";
const URLDATA = "https://ybxt58cet4.execute-api.ap-south-1.amazonaws.com/Stage";

export const loginUser = () => async (dispatch) => {
  await axios.get(`${URL}/login`);
};

export const getSearchData = () => async (dispatch) => {
  const res = await axios.get(`${URLDATA}/search-data`);
  if (res.status === 200) {
    dispatch({
      type: SET_PROPRTY_SEARCH_DATA,
      payload: res.data,
    });
  }
};

export const postPropetyDetails = (dataObject) => async (dispatch) => {
  let propID = localStorage.getItem("propertyID");
  if (propID != null) {
    confirmPropertyID(propID);
    const res = await axios.post(`${URL}/property/${propID}`, dataObject);
    if (res.status === 200 || res.status === 201) {
      dispatch({
        type: POST_PROPERTY_DETAILS,
        payload: res.data,
      });
    }
  }
};

export const getPropertyID = () => async (dispatch) => {
  const res = await axios.get(`${URL}/property`);
  console.log(res);
  localStorage.setItem("propertyID", res.data);
};
export const confirmPropertyID = (id) => async (dispatch) => {
  const res = await axios.get(`${URL}/property/${id}`);
  if (res.status === 200) {
    return true;
  }
};
