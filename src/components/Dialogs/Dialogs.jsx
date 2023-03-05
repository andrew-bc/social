import s from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.messages.map((m) => (
    <MessageItem id={m.id} name={m.name} message={m.message} />
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
