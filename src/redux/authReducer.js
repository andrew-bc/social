const SET_AUTH_DATA = "SET_AUTH_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA: {
      return { ...state, ...action.data, isAuth: true };
    }
    default:
      return state;
  }
};

export default authReducer;

export const setAuthData = (data) => ({ type: SET_AUTH_DATA, data });
