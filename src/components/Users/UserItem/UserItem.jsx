import React from "react";
import { Link } from "react-router-dom";
import s from "./UserItem.module.css";

const UserItem = (props) => {
  return (
    <div className={s.userItem}>
      <div className={s.avatar}>
        <Link to="#">
          <img src={props.userInfo.src} alt="avatar" />
        </Link>
      </div>
      <div className={s.info}>
        <div className={s.info__name}>
          <Link to="#">{props.userInfo.name}</Link>
        </div>
        <div className={s.info__location}>
          {" "}
          <span className={s.info__city}>{props.userInfo.location.city}, </span>
          <span className={s.info__country}>{props.userInfo.location.country}</span>
        </div>
        <div className={s.info__status}>{props.userInfo.status}</div>
      </div>
      <div className={s.but}>
        {props.userInfo.followed ? (
          <button
            onClick={() => {
              props.unfollow(props.userInfo.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
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
