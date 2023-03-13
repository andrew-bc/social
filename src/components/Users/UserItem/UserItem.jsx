import React from "react";
import { Link } from "react-router-dom";
import s from "./UserItem.module.css";
import noAvatarImage from "../../../img/user_wall.png";
import { followAPI } from "../../../api/api";

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
        {props.userInfo.status ? <div className={s.info__status}>{props.userInfo.status}</div> : ""}
      </div>
      <div className={s.but}>
        {props.userInfo.followed ? (
          <button
            className={s.info__unfollow}
            onClick={() => {
              followAPI.unfollow(props.userInfo.id).then((data) => {
                if (data.resultCode === 0) {
                  props.unfollow(props.userInfo.id);
                }
              });
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            className={s.info__follow}
            onClick={() => {
              followAPI.follow(props.userInfo.id).then((data) => {
                if (data.resultCode === 0) {
                  props.follow(props.userInfo.id);
                }
              });
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
