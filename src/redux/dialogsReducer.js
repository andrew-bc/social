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
      id: 3,
      name: "Władek",
      message: "Hello! How are you?",
      src: "img/user_wall.png",
    },
  ],
  newMessage: "",
};

let dialogsReducer = (state = initialState, action) => {
  let copyState;
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: 4,
            name: "Me",
            message: action.message,
            src: "img/avatar.jpg",
          },
        ],
        newMessage: "",
      };
    }
    case UPDATE_NEW_MESSAGE: {
      return {
        ...state,
        newMessage: action.newMessage,
      };
    }
    default:
      return state;
  }
};

export default dialogsReducer;

export const sendMessageActionCreator = (text) => ({ type: SEND_MESSAGE, message: text });
export const updateNewMessageActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE, newMessage: text });
