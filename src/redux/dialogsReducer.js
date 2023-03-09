const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";

let initialState = {
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
};

let dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let copyState = { ...state };
      copyState.messages = [...state.messages];
      let newMessage = {
        id: 1,
        name: "Me",
        message: action.message,
        src: "img/avatar.jpg",
      };
      copyState.messages.push(newMessage);
      copyState.newMessage = "";
      return copyState;
    }
    case UPDATE_NEW_MESSAGE: {
      let copyState = { ...state };
      copyState.newMessage = action.newMessage;
      return copyState;
    }
    default:
      return state;
  }
};

export default dialogsReducer;

export const sendMessageActionCreator = (text) => ({ type: SEND_MESSAGE, message: text });
export const updateNewMessageActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE, newMessage: text });
