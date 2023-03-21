import { authAPI, profileAPI } from "./../api/api";
import { setIsError, setErrorText } from "./../redux/errorReducer";

const SET_AUTH_DATA = "SET_AUTH_DATA";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";
const SET_AVATAR_URL = "SET_AVATAR_URL";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaURL: null,
  avatarURL: null,
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA: {
      return { ...state, id: action.id, email: action.email, login: action.login, isAuth: action.isAuth };
    }
    case SET_CAPTCHA_URL: {
      return { ...state, captchaURL: action.captchaURL };
    }
    case SET_AVATAR_URL: {
      return { ...state, avatarURL: action.avatarURL };
    }
    default:
      return state;
  }
};

export default authReducer;

export const setAuthData = (id, email, login, isAuth) => ({ type: SET_AUTH_DATA, id, email, login, isAuth });
export const setCaptchaURL = (captchaURL) => ({ type: SET_CAPTCHA_URL, captchaURL });
export const setAvatarURL = (avatarURL) => ({ type: SET_AVATAR_URL, avatarURL });

export const getAutharization = () => {
  return (dispatch) => {
    return authAPI
      .getAutharization()
      .then((data) => {
        if (data.resultCode === 0) {
          let { id, email, login } = data.data;
          dispatch(setAuthData(id, email, login, true));
          dispatch(getAvatarURL(id));
        } else {
          if (!data.messages[0].includes("not authorized")) {
            dispatch(setIsError(true));
            dispatch(setErrorText(data.messages[0]));
          }
        }
      })
      .catch((e) => {
        if (!e.messages?.includes("not authorized")) {
          dispatch(setIsError(true));
          dispatch(setErrorText(e.message));
        }
      });
  };
};

export const loginUserOnSite = (email, password, rememberMe, captcha, setStatus, setSubmitting) => {
  return (dispatch) => {
    authAPI
      .login(email, password, rememberMe, captcha)
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(getAutharization());
          dispatch(setCaptchaURL(null));
        } else if (data.resultCode === 10) {
          dispatch(getCaptchaURL());
          setStatus(data.messages);
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

export const getCaptchaURL = () => {
  return (dispatch) => {
    authAPI
      .getCaptcha()
      .then((data) => {
        dispatch(setCaptchaURL(data.url));
      })
      .catch((e) => {
        dispatch(setIsError(true));
        dispatch(setErrorText(e.message));
      });
  };
};

export const getAvatarURL = (userId) => {
  return (dispatch) => {
    profileAPI
      .getProfileByUserId(userId)
      .then((data) => {
        dispatch(setAvatarURL(data.photos.small));
      })
      .catch((e) => {
        dispatch(setIsError(true));
        dispatch(setErrorText(e.message));
      });
  };
};
