import s from "./MessageItem.module.css";

import user_wall from "./../../../img/user_wall.png";

const MessageItem = (props) => {
  return (
    <div className={s.messages__item}>
      <div className={s.messages__info}>
        <div className={s.messages__avatar}>
          <img src={user_wall} alt="" />
        </div>
        <div className={s.messages__usesrname}>{props.name}</div>
      </div>
      <div className={s.messages__text}>{props.message}</div>
    </div>
  );
};

export default MessageItem;
