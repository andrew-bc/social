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
  switch (action.type) {
    case ADD_POST: {
      let copyState = { ...state };
      copyState.posts = [...state.posts];
      let newPost = { id: 1, message: action.message, src: "img/avatar.jpg", likesCount: 0 };
      copyState.posts.push(newPost);
      copyState.newText = "";
      return copyState;
    }
    case UPDATE_NEW_TEXT_POST: {
      let copyState = { ...state };
      copyState.newText = action.newText;

      return copyState;
    }
    default:
      return state;
  }
};

export default profileReducer;

export const addPostActionCreator = (text) => ({ type: ADD_POST, message: text });
export const updatePostActionCreator = (text) => ({ type: UPDATE_NEW_TEXT_POST, newText: text });
