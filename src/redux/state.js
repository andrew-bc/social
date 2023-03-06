const ADD_POST = "ADD_POST";
const UPDATE_NEW_TEXT_POST = "UPDATE_NEW_TEXT_POST";
const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";

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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 1,
        message: action.message,
        src: "img/avatar.jpg",
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newText = "";
      this._rerenderAllTree(this._state);
    } else if (action.type === UPDATE_NEW_TEXT_POST) {
      this._state.profilePage.newText = action.newText;
      this._rerenderAllTree(this._state);
    }
    if (action.type === SEND_MESSAGE) {
      let newMessage = {
        id: 1,
        name: "Me",
        message: action.message,
        src: "img/avatar.jpg",
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessage = "";
      this._rerenderAllTree(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE) {
      this._state.dialogsPage.newMessage = action.newMessage;
      this._rerenderAllTree(this._state);
    }
  },
};

export const addPostActionCreator = (text) => ({ type: ADD_POST, message: text });
export const updatePostActionCreator = (text) => ({ type: UPDATE_NEW_TEXT_POST, newText: text });
export const sendMessageActionCreator = (text) => ({ type: SEND_MESSAGE, message: text });
export const updateNewMessageActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE, newMessage: text });

export default store;

window.store = store;
