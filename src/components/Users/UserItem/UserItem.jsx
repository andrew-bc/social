import React from "react";
import { Link } from "react-router-dom";
import s from "./UserItem.module.css";
import noAvatarImage from "./../../../img/user_wall.png";
import { Button } from "@mui/material";
import FollowButton from "../../UI/FollowButton/FollowButton";

const UserItem = (props) => {
  return (
    <div className={s.userItem}>
      <div className={s.avatar}>
        <Link to={"/profile/" + props.userInfo.id}>
          <img src={props.userInfo.photos.small ? props.userInfo.photos.small : noAvatarImage} alt="avatar" />
        </Link>
      </div>
      <div className={s.info}>
        <div className={s.info__name}>
          <Link to={"/profile/" + props.userInfo.id}>{props.userInfo.name}</Link>
        </div>
        {props.userInfo.status ? <div className={s.info__status}>{props.userInfo.status}</div> : ""}
      </div>
      {props.isAuth && (
        <div className={s.but}>
          <FollowButton
            isFollowButton={!props.userInfo.followed}
            id={props.userInfo.id}
            unfollow={props.unfollow}
            follow={props.follow}
            disabled={props.followingInprogress.includes(props.userInfo.id)}
          />
        </div>
      )}
    </div>
  );
};

export default UserItem;
