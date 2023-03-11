const ADD_POST = "ADD_POST";
const UPDATE_NEW_TEXT_POST = "UPDATE_NEW_TEXT_POST";

let initialState = {
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
  let copyState;
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, { id: 3, message: action.message, src: "img/avatar.jpg", likesCount: 0 }],
        newText: "",
      };
    }
    case UPDATE_NEW_TEXT_POST: {
      return {
        ...state,
        newText: action.newText,
      };
    }
    default:
      return state;
  }
};

export default profileReducer;

export const addPostActionCreator = (text) => ({ type: ADD_POST, message: text });
export const updatePostActionCreator = (text) => ({ type: UPDATE_NEW_TEXT_POST, newText: text });
