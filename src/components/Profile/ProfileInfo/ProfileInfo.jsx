import s from "./ProfileInfo.module.css";
import noAvatar from "./../../../img/noAvatar.svg";
import Preload from "./../../Users/Preload/Preload";
import normalizeUrl from "normalize-url";

const ProfileInfo = (props) => {
  const socialLinksElements = (data) => {
    let result = [];
    for (let key in data) {
      if (data[key]) {
        result.push(
          <div className={s.bio__socialLink}>
            <a href={normalizeUrl(data[key])} target="_blank" rel="noreferrer">
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
    <div>
      <div className={s.content__header}></div>
      <div className={s.content__user}>
        <div className={s.user__avatar}>
          <img src={props.profile.photos.large ? props.profile.photos.large : noAvatar} alt="Profile" width="300" />
        </div>
        <div className={s.user__info}>
          <div className={s.info__fullName}>{props.profile.fullName}</div>
          <div className={s.info__bio}>
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
