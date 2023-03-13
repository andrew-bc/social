import s from "./ProfileInfo.module.css";
import noAvatar from "./../../../img/noAvatar.svg";
import Preload from "./../../Users/Preload/Preload";
import normalizeUrl from "normalize-url";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preload />;
  }
  return (
    <div>
      <div className={s.content__header}></div>
      <div className={s.content__user}>
        <div className={s.user__avatar}>
          <img src={props.profile.photos.large ? props.profile.photos.large : noAvatar} alt="Profile" />
        </div>
        <div className={s.user__info}>
          <div className={s.info__fullName}>{props.profile.fullName}</div>
          <div className={s.info__bio}>
            {/* <div className={s.bio__birthday}>Date of Birth: 26 february 1992</div>
            <div className={s.bio__city}>City: Warsaw</div>
            <div className={s.bio__education}>Education: BSUIR</div> */}

            <div className={s.bio__lookingForAJob}>{props.profile.lookingForAJob ? "Yes" : "No"}</div>

            {props.profile.lookingForAJobDescription ? (
              <div className={s.bio__lookingForAJobDescription}>
                lookingForAJobDescription: {props.profile.lookingForAJobDescription}
              </div>
            ) : (
              ""
            )}

            {props.profile.contacts.mainLink ? (
              <div className={s.bio__contacts__mainLink}>
                Main link:{" "}
                <a href={normalizeUrl(props.profile.contacts.mainLink)} target="_blank" rel="noreferrer">
                  {props.profile.contacts.mainLink}
                </a>
              </div>
            ) : (
              ""
            )}

            {props.profile.contacts.facebook ? (
              <div className={s.bio__contacts__facebook}>
                Facebook:{" "}
                <a href={normalizeUrl(props.profile.contacts.facebook)} target="_blank" rel="noreferrer">
                  {props.profile.contacts.facebook}
                </a>
              </div>
            ) : (
              ""
            )}

            {props.profile.contacts.website ? (
              <div className={s.bio__contacts__website}>
                website:{" "}
                <a href={normalizeUrl(props.profile.contacts.website)} target="_blank" rel="noreferrer">
                  {props.profile.contacts.website}
                </a>
              </div>
            ) : (
              ""
            )}

            {props.profile.contacts.vk ? (
              <div className={s.bio__contacts__vk}>
                vk:{" "}
                <a href={normalizeUrl(props.profile.contacts.vk)} target="_blank" rel="noreferrer">
                  {props.profile.contacts.vk}
                </a>
              </div>
            ) : (
              ""
            )}

            {props.profile.contacts.twitter ? (
              <div className={s.bio__contacts__twitter}>
                twitter:{" "}
                <a href={normalizeUrl(props.profile.contacts.twitter)} target="_blank" rel="noreferrer">
                  {props.profile.contacts.twitter}
                </a>
              </div>
            ) : (
              ""
            )}

            {props.profile.contacts.instagram ? (
              <div className={s.bio__contacts__instagram}>
                instagram:{" "}
                <a href={normalizeUrl(props.profile.contacts.instagram)} target="_blank" rel="noreferrer">
                  {props.profile.contacts.instagram}
                </a>
              </div>
            ) : (
              ""
            )}

            {props.profile.contacts.youtube ? (
              <div className={s.bio__contacts__youtube}>
                youtube:{" "}
                <a href={normalizeUrl(props.profile.contacts.youtube)} target="_blank" rel="noreferrer">
                  {props.profile.contacts.youtube}
                </a>
              </div>
            ) : (
              ""
            )}

            {props.profile.contacts.github ? (
              <div className={s.bio__contacts__github}>
                github:{" "}
                <a href={normalizeUrl(props.profile.contacts.github)} target="_blank" rel="noreferrer">
                  {props.profile.contacts.github}
                </a>
              </div>
            ) : (
              ""
            )}

            {props.profile.contacts.mainLink ? (
              <div className={s.bio__contacts__mainLink}>
                mainLink:{" "}
                <a href={normalizeUrl(props.profile.contacts.mainLink)} target="_blank" rel="noreferrer">
                  {props.profile.contacts.mainLink}
                </a>
              </div>
            ) : (
              ""
            )}

            {props.profile.aboutMe ? <div className={s.bio__aboutMe}>About me: {props.profile.aboutMe}</div> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
