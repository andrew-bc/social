import s from "./ProfileInfo.module.css";
import noAvatar from "./../../../img/noAvatar.svg";
import Preload from "../../Preload/Preload";
import normalizeUrl from "normalize-url";
import UserStatus from "./UserStatus/UserStatus";
import upload_photo from "./../../../img/upload_photo.png";
import FileUploader from "./FileUploader/FileUploader";

const ProfileInfo = (props) => {
  const socialLinksElements = (data) => {
    let result = [];
    for (let key in data) {
      if (data[key]) {
        result.push(
          <div key={key} className={s.bio__socialLink}>
            <a key={key} href={normalizeUrl(data[key])} target="_blank" rel="noreferrer">
              <img key={key} title={key} alt={key} src={require(`./../../../img/social/${key}.png`)} width="25" />
            </a>
          </div>
        );
      }
    }
    return result;
  };

  if (!props.profile) {
    return <Preload />;
  }
  return (
    <div className={s.content}>
      <div className={s.content__user}>
        <div className={s.user__avatar}>
          <div className={s.user__avatar__photo}>
            <img src={props.profile.photos.large ? props.profile.photos.large : noAvatar} alt="Profile" width="300" />
          </div>
          {props.myId === props.profile.userId ? <FileUploader uploadAvatar={props.uploadAvatar} /> : null}
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
            <div className={s.bio__socialLinks}>{socialLinksElements(props.profile.contacts)}</div>
            {props.profile.aboutMe ? <div className={s.bio__aboutMe}>About me: {props.profile.aboutMe}</div> : ""}
            <div className={s.bio__lookingForAJob}>{props.profile.lookingForAJob ? "Yes" : "No"}</div>
            {props.profile.lookingForAJobDescription ? (
              <div className={s.bio__lookingForAJobDescription}>
                lookingForAJobDescription: {props.profile.lookingForAJobDescription}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
