import { profileAPI } from "../api/api";
import { setIsError, setErrorText } from "./../redux/errorReducer";

const ADD_POST = "ADD_POST";
const SET_PROFILE = "SET_PROFILE";
const SET_STATUS_ONLY_IN_STATE = "SET_STATUS_ONLY_IN_STATE";
const SET_AVATAR = "SET_AVATAR";

let initialState = {
  profile: null,
  posts: [
    {
      id: 1,
      message: "How are you?",
      src: "img/avatar.jpg",
      likesCount: 5,
    },
    { id: 2, message: "Hello", src: "img/avatar.jpg", likesCount: 2 },
  ],
};

let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [{ id: 3, message: action.message, src: "img/avatar.jpg", likesCount: 0 }, ...state.posts],
      };
    }
    case SET_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS_ONLY_IN_STATE: {
      return { ...state, profile: { ...state.profile, status: action.statusText } };
    }
    case SET_AVATAR: {
      return { ...state, profile: { ...state.profile, ...action.photos } };
    }
    default:
      return state;
  }
};

export default profileReducer;

export const addPost = (text) => ({ type: ADD_POST, message: text });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile: profile });
export const setAvatar = (photos) => ({ type: SET_AVATAR, photos });
export const setStatusOnlyInState = (statusText) => ({ type: SET_STATUS_ONLY_IN_STATE, statusText });

export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI
      .getProfileByUserId(userId)
      .then((data) => dispatch(setProfile(data)))
      .then(() => dispatch(getStatus(userId)))
      .catch((e) => {
        dispatch(setIsError(true));
        dispatch(setErrorText(e.message));
      });
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI
      .getStatus(userId)
      .then((data) => dispatch(setStatusOnlyInState(data)))
      .catch((e) => {
        dispatch(setIsError(true));
        dispatch(setErrorText(e.message));
      });
  };
};

export const setStatus = (statusText) => {
  return (dispatch) => {
    profileAPI
      .setStatus(statusText)
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(setStatusOnlyInState(statusText));
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

export const uploadAvatar = (photo) => {
  return (dispatch) => {
    profileAPI
      .setAvatar(photo)
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(setAvatar(data.data));
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
