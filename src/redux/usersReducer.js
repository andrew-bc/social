import { usersAPI } from "./../api/api";

const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
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
    case SET_TOTAL_COUNT: {
      return { ...state, totalCount: action.totalCount };
    }
    case SET_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
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
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });
export const setIsFollowinfInProgress = (userId, isFetching) => ({
  type: SET_IS_FOLLOWING_IN_PROGRESS,
  userId,
  isFetching,
});

export const getUsers = (pageSize, currentPage) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));
    usersAPI.getUsers(pageSize, currentPage).then((data) => {
      dispatch(setIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalCount(data.totalCount));
    });
  };
};
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(setIsFollowinfInProgress(userId, true));
    usersAPI.follow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(setIsFollowinfInProgress(userId, false));
    });
  };
};
export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(setIsFollowinfInProgress(userId, true));
    usersAPI.unfollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(setIsFollowinfInProgress(userId, false));
    });
  };
};
