import s from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import React from "react";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} src={d.src} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <MessageItem id={m.id} name={m.name} message={m.message} src={m.src} />
  ));
  return (
    <div className={s.content}>
      <div className={s.dialogs__title}>DIALOGS</div>
      <div className={s.dialogs__wrapper}>
        <div className={s.dialogs}>{dialogsElements}</div>
        <div className={s.messages}>{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
