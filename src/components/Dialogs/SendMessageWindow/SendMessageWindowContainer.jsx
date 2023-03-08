import { sendMessageActionCreator, updateNewMessageActionCreator } from "../../../redux/dialogsReducer";
import React from "react";
import SendMessageWindow from "./SendMessageWindow";
import StoreContext from "../../../StoreContext";

const SendMessageWindowContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let updateNewMessage = (message) => {
          store.dispatch(updateNewMessageActionCreator(message));
        };

        let sendMessage = (message) => {
          store.dispatch(sendMessageActionCreator(message));
        };

        return (
          <SendMessageWindow
            sendMessage={sendMessage}
            updateNewMessage={updateNewMessage}
            newMessage={state.dialogsPage.newMessage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default SendMessageWindowContainer;
