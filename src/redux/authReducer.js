import { authAPI } from "./../api/api";

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
      return { id: action.id, email: action.email, login: action.login, isAuth: action.isAuth };
    }
    default:
      return state;
  }
};

export default authReducer;

export const setAuthData = (id, email, login, isAuth) => ({ type: SET_AUTH_DATA, id, email, login, isAuth });

export const getAutharization = () => {
  return (dispatch) => {
    authAPI.getAutharization().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthData(id, email, login, true));
      }
    });
  };
};

export const loginUserOnSite = ({ email, password, rememberMe }) => {
  return (dispatch) => {
    authAPI.login({ email, password, rememberMe }).then((data) => {
      if (data.resultCode === 0) {
        console.log("LOGIN: OK");
        dispatch(getAutharization());
      } else if (data.resultCode === 1) {
        console.log("LOGIN: request is invalid");
      } else if (data.resultCode === 10) {
        console.log("LOGIN: please captcha");
      }
    });
  };
};

export const logoutUserFromSite = () => {
  return (dispatch) => {
    authAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false));
      }
    });
  };
};
