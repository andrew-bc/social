import React, { useState } from "react";
import s from "./UserStatus.module.css";

const UserStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const handleFocus = (event) => {
    setStatus(props.status);
    event.target.select();
  };

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = (event) => {
    setEditMode(false);
    props.setStatus(status);
  };

  if (!editMode) {
    if (props.myId === props.userId) {
      if (props.status) {
        return (
          <span className={s.status__span_my} onClick={activateEditMode}>
            {props.status}
          </span>
        );
      } else {
        return (
          <span className={s.status__span_nostatus} onClick={activateEditMode}>
            Click to change your status...
          </span>
        );
      }
    } else {
      return <span className={s.status__span}>{props.status}</span>;
    }
  } else {
    return (
      <>
        <input
          className={s.status__input}
          onBlur={deactivateEditMode}
          onFocus={handleFocus}
          autoFocus
          value={status ?? ""}
          onChange={(e) => setStatus(e.target.value)}
        />
      </>
    );
  }
};

export default UserStatus;
