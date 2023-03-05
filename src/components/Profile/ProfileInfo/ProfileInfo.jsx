import s from "./ProfileInfo.module.css";
import avatar from "./../../../img/avatar.jpg";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.content__header}></div>
      <div className={s.content__user}>
        <div className={s.user__avatar}>
          <img src={avatar} alt="" />
        </div>
        <div className={s.user__info}>
          <div className={s.info__fullName}>Andrzej Bierynczyk</div>
          <div className={s.info__bio}>
            <div className={s.bio__birthday}>
              Date of Birth: 26 february 1992
            </div>
            <div className={s.bio__city}>City: Warsaw</div>
            <div className={s.bio__education}>Education: BSUIR</div>
            <div className={s.bio__sitename}>
              Web Site:{" "}
              <a href="http://github.com/andrew-bc" target="_blank">
                http://github.com/andrew-bc
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
