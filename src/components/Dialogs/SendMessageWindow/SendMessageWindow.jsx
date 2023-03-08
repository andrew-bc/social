import s from "./SendMessageWindow.module.css";

import { sendMessageActionCreator, updateNewMessageActionCreator } from "./../../../redux/dialogsReducer";
import React from "react";

const SendMessageWindow = (props) => {
  let inputWithMessage = React.createRef();

  let updateNewMessage = () => {
    let message = inputWithMessage.current.value;
    props.dispatch(updateNewMessageActionCreator(message));
  };

  let sendMessage = (event) => {
    let message = inputWithMessage.current.value;
    event.persist();
    if (event.key === "Enter" && message) {
      props.dispatch(sendMessageActionCreator(message));
    }
  };

  return (
    <div className={s.messageWindow}>
      <input
        type="text"
        ref={inputWithMessage}
        value={props.newMessage}
        placeholder="Write your message..."
        className={s.messageInput}
        onChange={updateNewMessage}
        onKeyUp={sendMessage}
      />
    </div>
  );
};

export default SendMessageWindow;
