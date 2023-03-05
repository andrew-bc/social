import s from "./FriendItem.module.css";
import { NavLink } from "react-router-dom";

let FriendItem = (props) => {
  return (
    <NavLink to="#" className={s.friendsItems}>
      <div className={s.friendsItems__avatar}>
        <img src={props.src} alt="" />
      </div>
      <div className={s.friendsItems__username}>{props.name}</div>
    </NavLink>
  );
};

export default FriendItem;
