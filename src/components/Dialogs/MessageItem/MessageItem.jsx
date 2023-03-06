import s from "./MessageItem.module.css";
import React from "react";

const MessageItem = (props) => {
  return (
    <div className={s.messages__item}>
      <div className={s.messages__info}>
        <div className={s.messages__avatar}>
          <img src={props.src} alt="" />
        </div>
        <div className={s.messages__usesrname}>{props.name}</div>
      </div>
      <div className={s.messages__text}>{props.message}</div>
    </div>
  );
};

export default MessageItem;
