const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
  users: [
    {
      id: 1,
      followed: false,
      name: "Andzrej",
      src: "img/avatar.jpg",
      status: "I am busy...",
      location: { country: "Poland", city: "Warsaw" },
    },
    {
      id: 2,
      followed: true,
      name: "Kuba",
      src: "img/user_wall.png",
      status: "I am boss...",
      location: { country: "Poland", city: "Poznań" },
    },
    {
      id: 3,
      followed: true,
      name: "Władek",
      src: "img/user_wall.png",
      status: "I am boss too...",
      location: { country: "Belarus", city: "Minsk" },
    },
  ],
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
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};

export default usersReducer;

export const setUsersActionCreator = (users) => ({ type: SET_USERS, users: users });
export const followActionCreator = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId: userId });
