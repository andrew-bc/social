import { authAPI } from "./../api/api";
import { setIsError, setErrorText } from "./../redux/errorReducer";

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
    return authAPI
      .getAutharization()
      .then((data) => {
        if (data.resultCode === 0) {
          let { id, email, login } = data.data;
          dispatch(setAuthData(id, email, login, true));
        } else {
          if (!data.messages[0].includes("not authorized")) {
            dispatch(setIsError(true));
            dispatch(setErrorText(data.messages[0]));
          }
        }
      })
      .catch((e) => {
        if (!e.messages.includes("not authorized")) {
          dispatch(setIsError(true));
          dispatch(setErrorText(e.message));
        }
      });
  };
};

export const loginUserOnSite = (email, password, rememberMe, setStatus, setSubmitting) => {
  return (dispatch) => {
    authAPI
      .login(email, password, rememberMe)
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(getAutharization());
        } else {
          setStatus(data.messages);
        }
        setSubmitting(false);
      })
      .catch((e) => {
        dispatch(setIsError(true));
        dispatch(setErrorText(e.message));
      });
  };
};

export const logoutUserFromSite = () => {
  return (dispatch) => {
    authAPI
      .logout()
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(setAuthData(null, null, null, false));
        } else {
          dispatch(setIsError(true));
          dispatch(setErrorText(data.messages[0]));
        }
      })
      .catch((e) => {
        dispatch(setIsError(true));
        dispatch(setErrorText(e.message));
      });
  };
};
