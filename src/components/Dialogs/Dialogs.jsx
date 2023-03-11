import s from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import React from "react";
import SendMessageWindowContainer from "./SendMessageWindow/SendMessageWindowContainer";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} src={d.src} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => (
    <MessageItem id={m.id} key={m.id} name={m.name} message={m.message} src={m.src} />
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
};

export default Dialogs;
