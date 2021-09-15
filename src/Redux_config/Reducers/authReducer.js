import { SET_USER_LOGIN_STATUS } from "../Actions/Types";
const initialState = {};
// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER_LOGIN_STATUS:
      return {
        ...state,
        LoginStatus: action.payload,
      };
    default:
      return state;
  }
}
