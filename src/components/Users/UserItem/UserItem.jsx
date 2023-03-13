import React from "react";
import { Link } from "react-router-dom";
import s from "./UserItem.module.css";
import noAvatarImage from "../../../img/user_wall.png";

const UserItem = (props) => {
  return (
    <div className={s.userItem}>
      <div className={s.avatar}>
        <Link to={"/profile/" + props.userInfo.id}>
          <img src={props.userInfo.photos.large ? props.userInfo.photos.large : noAvatarImage} alt="avatar" />
        </Link>
      </div>
      <div className={s.info}>
        <div className={s.info__name}>
          <Link to={"/profile/" + props.userInfo.id}>{props.userInfo.name}</Link>
        </div>
        {/* <div className={s.info__location}>
          <span className={s.info__city}>"props.userInfo.location.city, "</span>
          <span className={s.info__country}>"props.userInfo.location.country"</span>
        </div> */}
        {props.userInfo.status ? <div className={s.info__status}>{props.userInfo.status}</div> : ""}
      </div>
      <div className={s.but}>
        {props.userInfo.followed ? (
          <button
            className={s.info__unfollow}
            onClick={() => {
              props.unfollow(props.userInfo.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            className={s.info__follow}
            onClick={() => {
              props.follow(props.userInfo.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
};

export default UserItem;
