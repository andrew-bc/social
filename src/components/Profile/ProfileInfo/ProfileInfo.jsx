import s from "./ProfileInfo.module.css";
import noAvatar from "./../../../img/noAvatar.svg";
import Preload from "../../UI/Preload/Preload";
import UserStatus from "./UserStatus/UserStatus";
import FileUploader from "../../UI/FileUploader/FileUploader";
import { useSelector } from "react-redux";
import { Error } from "../../Error/Error";
import { useEffect } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import SocialLinksElements from "../../UI/SocialLinksElements/SocialLinksElements";
import FollowButton from "./../../UI/FollowButton/FollowButton";

const ProfileInfo = (props) => {
  const isError = useSelector((state) => state.error.isError);
  const errorText = useSelector((state) => state.error.errorText);

  useEffect(() => {
    if (isError) {
      <Error errorText={errorText} />;
    }
  }, [isError, errorText]);

  if (!props.profile) {
    return (
      <>
        <Preload /> {isError ? <Error errorText={errorText} /> : ""}
      </>
    );
  }
  return (
    <div className={s.content}>
      <div className={s.content__user}>
        {isError ? <Error errorText={errorText} /> : ""}
        <div className={s.user__avatar}>
          <div className={s.user__avatar__photo}>
            <img src={props.profile.photos.large ? props.profile.photos.large : noAvatar} alt="Profile" width="300" />
          </div>
          {props.myId === props.profile.userId && <FileUploader uploadAvatar={props.uploadAvatar} />}
          {props.myId !== props.profile.userId && (
            <div className={s.user__avatar__follow}>
              <FollowButton
                isFollowButton={!props.profile.isFollow}
                id={props.profile.userId}
                unfollow={props.unfollow}
                follow={props.follow}
                disabled={props.profile.isFollowingInProgress}
              />
            </div>
          )}
        </div>

        <div className={s.user__info}>
          <div className={s.info__fullName}>{props.profile.fullName}</div>
          <div className={s.info__bio}>
            <div className={s.bio__status}>
              <UserStatus
                status={props.profile.status}
                setStatus={props.setStatus}
                userId={props.profile.userId}
                myId={props.myId}
              />
            </div>
            <div className={s.bio__socialLinks}>
              <SocialLinksElements data={props.profile.contacts} />
            </div>
            {props.profile.aboutMe ? (
              <div className={s.bio__aboutMe}>
                <span className={s.bio__span}>About me: </span> {props.profile.aboutMe}
              </div>
            ) : (
              ""
            )}
            <div className={s.bio__lookingForAJob}>
              <span className={s.bio__span}>Looking for a job:</span> {props.profile.lookingForAJob ? "Yes" : "No"}
            </div>
            {props.profile.lookingForAJobDescription ? (
              <div className={s.bio__lookingForAJobDescription}>
                <span className={s.bio__span}>My skills:</span> {props.profile.lookingForAJobDescription}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={s.user__edit}>
          {" "}
          {props.myId === props.profile.userId ? (
            <Link to="/edit">
              <Button variant="contained">Edit profile</Button>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
