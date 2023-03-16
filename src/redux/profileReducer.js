import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_PROFILE = "SET_PROFILE";
const SET_STATUS_ONLY_IN_STATE = "SET_STATUS_ONLY_IN_STATE";

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
    default:
      return state;
  }
};

export default profileReducer;

export const addPost = (text) => ({ type: ADD_POST, message: text });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile: profile });
export const setStatusOnlyInState = (statusText) => ({ type: SET_STATUS_ONLY_IN_STATE, statusText });

export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI
      .getProfileByUserId(userId)
      .then((data) => dispatch(setProfile(data)))
      .then(() => dispatch(getStatus(userId)));
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((data) => dispatch(setStatusOnlyInState(data)));
  };
};

export const setStatus = (statusText) => {
  return (dispatch) => {
    profileAPI.setStatus(statusText).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatusOnlyInState(statusText));
      }
    });
  };
};
