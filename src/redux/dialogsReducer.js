import user_wall from "./../img/user_wall.png";

const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Władek", src: user_wall },
    { id: 2, name: "Jacek", src: user_wall },
    { id: 3, name: "Kuba", src: user_wall },
  ],
  messages: [
    { id: 1, name: "Władek", message: "Great!", src: user_wall },
    { id: 2, name: "Me", message: "Fine! And you?", src: "./../img/avatar.jpg" },
    {
      id: 3,
      name: "Władek",
      message: "Hello! How are you?",
      src: user_wall,
    },
  ],
  newMessage: "",
};

let dialogsReducer = (state = initialState, action) => {
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

export const sendMessage = (text) => ({ type: SEND_MESSAGE, message: text });
export const updateNewMessage = (text) => ({ type: UPDATE_NEW_MESSAGE, newMessage: text });
