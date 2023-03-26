import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import s from "./Profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getProfile,
  setStatus,
  uploadAvatar,
  follow,
  unfollow,
  setIsFollowingInProgress,
} from "./../../redux/profileReducer";
import { compose } from "redux";

const ProfileContainer = (props) => {
  let { userId } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      if (props.auth.isAuth) {
        props.getProfile(props.auth.id);
      } else {
        navigate("/login");
      }
    } else {
      props.getProfile(userId);
    }
  }, [userId, props.auth.id]);

  return (
    <div className={s.content}>
      <Profile {...props} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage,
    auth: state.auth,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    getProfile,
    setStatus,
    uploadAvatar,
    follow,
    unfollow,
    setIsFollowingInProgress,
  })
)(ProfileContainer);
