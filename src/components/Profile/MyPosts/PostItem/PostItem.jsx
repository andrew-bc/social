import s from "./PostItem.module.css";
import likeImage from "./../../../../img/like.png";

const PostItem = (props) => {
  return (
    <div>
      <div className={s.wall__item}>
        <div className={s.wall__avatar}>
          <img src={props.src} alt="" />
        </div>
        <div className={s.wall__message}>{props.message}</div>
      </div>
      <div className={s.wall__likes}>
        <div className={s.likes__img}>
          <img src={likeImage} alt="likes" />
        </div>
        <div className={s.likes__count}>{props.likesCount}</div>
      </div>
    </div>
  );
};

export default PostItem;
