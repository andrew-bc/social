import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;
  return (
    <NavLink to={path}>
      <div className={s.dialogs__item}>
        <div className={s.dialogs__avatar}>
          <img src={props.src} alt="" />
        </div>
        <div className={s.dialogs__username}>{props.name}</div>
      </div>
    </NavLink>
  );
};

export default DialogItem;
