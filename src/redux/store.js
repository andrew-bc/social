import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
  _state: {
    profilePage: {
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
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Władek", src: "img/user_wall.png" },
        { id: 2, name: "Jacek", src: "img/user_wall.png" },
        { id: 3, name: "Kuba", src: "img/user_wall.png" },
      ],
      messages: [
        { id: 1, name: "Władek", message: "Great!", src: "img/user_wall.png" },
        { id: 2, name: "Me", message: "Fine! And you?", src: "img/avatar.jpg" },
        {
          id: 2,
          name: "Władek",
          message: "Hello! How are you?",
          src: "img/user_wall.png",
        },
      ],
      newMessage: "",
    },
    sidebar: {
      friends: [
        { id: 1, name: "Władek", src: "img/user_wall.png" },
        { id: 2, name: "Jacek", src: "img/user_wall.png" },
        { id: 3, name: "Kuba", src: "img/user_wall.png" },
      ],
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._rerenderAllTree = observer;
  },
  _rerenderAllTree(state) {},
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._rerenderAllTree(this._state);
  },
};

export default store;

window.store = store;
