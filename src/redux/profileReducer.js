import { profileAPI } from "../api/api";
import { setIsError, setErrorText } from "./../redux/errorReducer";
import { getAutharization } from "./authReducer";
import { usersAPI } from "./../api/api";

const ADD_POST = "ADD_POST";
const SET_PROFILE = "SET_PROFILE";
const SET_STATUS_ONLY_IN_STATE = "SET_STATUS_ONLY_IN_STATE";
const SET_AVATAR = "SET_AVATAR";
const IS_FOLLOW = "IS_FOLLOW";
const SET_IS_FOLLOWING_IN_PROGRESS = "SET_IS_FOLLOWING_IN_PROGRESS";

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
    case IS_FOLLOW: {
      return { ...state, profile: { ...state.profile, isFollow: action.isFollow } };
    }
    case SET_AVATAR: {
      return { ...state, profile: { ...state.profile, ...action.photos } };
    }
    case SET_IS_FOLLOWING_IN_PROGRESS: {
      return { ...state, profile: { ...state.profile, isFollowingInProgress: action.isFollowingInProgress } };
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
export const setIsFollowingInProgress = (isFollowingInProgress) => ({
  type: SET_IS_FOLLOWING_IN_PROGRESS,
  isFollowingInProgress,
});
export const isFollow = (isFollow) => ({ type: IS_FOLLOW, isFollow });

export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI
      .getProfileByUserId(userId)
      .then((data) => {
        dispatch(setProfile(data));
      })
      .then(() => dispatch(getStatus(userId)))
      .then(() => dispatch(getIsFollow(userId)))
      .then(() => dispatch(setIsFollowingInProgress(false)))
      .catch((e) => {
        dispatch(setIsError(true));
        dispatch(setErrorText(e.message));
      });
  };
};

export const getIsFollow = (id) => {
  return (dispatch) => {
    usersAPI
      .isFollow(id)
      .then((data) => {
        dispatch(isFollow(data));
      })
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
          dispatch(getAutharization());
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

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(setIsFollowingInProgress(true));
    usersAPI
      .follow(userId)
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(isFollow(true));
        } else {
          dispatch(setIsError(true));
          dispatch(setErrorText(data.messages[0]));
        }
        dispatch(setIsFollowingInProgress(false));
      })
      .catch((e) => {
        dispatch(setIsError(true));
        dispatch(setErrorText(e.message));
      });
  };
};
export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(setIsFollowingInProgress(true));
    usersAPI
      .unfollow(userId)
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(isFollow(false));
        } else {
          dispatch(setIsError(true));
          dispatch(setErrorText(data.messages[0]));
        }
        dispatch(setIsFollowingInProgress(false));
      })
      .catch((e) => {
        dispatch(setIsError(true));
        dispatch(setErrorText(e.message));
      });
  };
};
