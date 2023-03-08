import { sendMessageActionCreator, updateNewMessageActionCreator } from "../../../redux/dialogsReducer";
import React from "react";
import SendMessageWindow from "./SendMessageWindow";

const SendMessageWindowContainer = (props) => {
  let state = props.store.getState();

  let updateNewMessage = (message) => {
    props.store.dispatch(updateNewMessageActionCreator(message));
  };

  let sendMessage = (message) => {
    props.store.dispatch(sendMessageActionCreator(message));
  };

  return (
    <SendMessageWindow
      sendMessage={sendMessage}
      updateNewMessage={updateNewMessage}
      newMessage={state.dialogsPage.newMessage}
    />
  );
};

export default SendMessageWindowContainer;
