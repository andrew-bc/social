import s from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import React from "react";
import SendMessageWindowContainer from "./SendMessageWindow/SendMessageWindowContainer";
import StoreContext from "../../StoreContext";

const Dialogs = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let dialogsElements = state.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id} src={d.src} />);
        let messagesElements = state.dialogsPage.messages.map((m) => (
          <MessageItem id={m.id} name={m.name} message={m.message} src={m.src} />
        ));
        return (
          <div className={s.content}>
            <div className={s.dialogs__title}>DIALOGS</div>
            <div className={s.dialogs__wrapper}>
              <div className={s.dialogs}>{dialogsElements}</div>
              <div className={s.dialogs__chat}>
                <div className={s.messages}>{messagesElements}</div>
                <SendMessageWindowContainer />
              </div>
            </div>
          </div>
        );
      }}
    </StoreContext.Consumer>
  );
};

export default Dialogs;
