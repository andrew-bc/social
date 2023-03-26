import { usersAPI } from "./../api/api";
import { setIsError, setErrorText } from "./../redux/errorReducer";

const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_TERM = "SET_TERM";
const SET_PAGE_SIZE = "SET_PAGE_SIZE";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_IS_FOLLOWING_IN_PROGRESS = "SET_IS_FOLLOWING_IN_PROGRESS";

let initialState = {
  users: [],
  totalCount: 100,
  currentPage: 1,
  pageSize: 10,
  numberOfPage: 1,
  isFetching: false,
  followingInprogress: [],
  term: "",
};

let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: [...action.users] };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_PAGE_SIZE: {
      return { ...state, pageSize: action.pageSize };
    }
    case SET_TOTAL_COUNT: {
      return { ...state, totalCount: action.totalCount };
    }
    case SET_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case SET_TERM: {
      return { ...state, term: action.term };
    }
    case SET_IS_FOLLOWING_IN_PROGRESS: {
      return {
        ...state,
        followingInprogress: action.isFetching
          ? [...state.followingInprogress, action.userId]
          : [...state.followingInprogress.filter((id) => id !== action.userId)],
      };
    }
    default:
      return state;
  }
};

export default usersReducer;

export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTerm = (term) => ({ type: SET_TERM, term });
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setPageSize = (pageSize) => ({ type: SET_PAGE_SIZE, pageSize });
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });
export const setIsFollowingInProgress = (userId, isFetching) => ({
  type: SET_IS_FOLLOWING_IN_PROGRESS,
  userId,
  isFetching,
});

export const getTotalCount = () => {
  return (dispatch) => {
    usersAPI
      .getTotalCount()
      .then((totalCount) => {
        dispatch(setTotalCount(totalCount));
      })
      .catch((e) => {
        dispatch(setIsError(true));
        dispatch(setErrorText(e.message));
      });
  };
};
export const getUsers = (pageSize, currentPage, term, friend) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));
    usersAPI
      .getUsers(pageSize, currentPage, term, friend)
      .then((data) => {
        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
      })
      .catch((e) => {
        dispatch(setIsError(true));
        dispatch(setErrorText(e.message));
      });
  };
};
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(setIsFollowingInProgress(userId, true));
    usersAPI
      .follow(userId)
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(followSuccess(userId));
        } else {
          dispatch(setIsError(true));
          dispatch(setErrorText(data.messages[0]));
        }
        dispatch(setIsFollowingInProgress(userId, false));
      })
      .catch((e) => {
        dispatch(setIsError(true));
        dispatch(setErrorText(e.message));
      });
  };
};
export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(setIsFollowingInProgress(userId, true));
    usersAPI
      .unfollow(userId)
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(unfollowSuccess(userId));
        } else {
          dispatch(setIsError(true));
          dispatch(setErrorText(data.messages[0]));
        }
        dispatch(setIsFollowingInProgress(userId, false));
      })
      .catch((e) => {
        dispatch(setIsError(true));
        dispatch(setErrorText(e.message));
      });
  };
};
