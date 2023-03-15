import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_TEXT_POST = "UPDATE_NEW_TEXT_POST";
const SET_PROFILE = "SET_PROFILE";
const SET_STATUS = "SET_STATUS";

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
  newText: "",
};

let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, { id: 3, message: action.message, src: "img/avatar.jpg", likesCount: 0 }],
        newText: "",
      };
    }
    case UPDATE_NEW_TEXT_POST: {
      return { ...state, newText: action.newText };
    }
    case SET_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      if (!action.isOnlyState) profileAPI.setStatus(action.statusText);
      return { ...state, profile: { ...state.profile, status: action.statusText } };
    }
    default:
      return state;
  }
};

export default profileReducer;

export const addPost = (text) => ({ type: ADD_POST, message: text });
export const updatePost = (text) => ({ type: UPDATE_NEW_TEXT_POST, newText: text });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile: profile });
export const setStatus = (statusText, isOnlyState) => ({ type: SET_STATUS, statusText, isOnlyState });

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
    profileAPI.getStatus(userId).then((data) => dispatch(setStatus(data, true)));
  };
};
