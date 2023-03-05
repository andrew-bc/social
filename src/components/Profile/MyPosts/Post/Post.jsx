import s from "./Post.module.css";
import likeImage from "./../../img/like.png";

import user_wall from "./../../../../img/user_wall.png";

const Post = (props) => {
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
          <img src={likeImage} />
        </div>
        <div className={s.likes__count}>{props.likesCount}</div>
      </div>
    </div>
  );
};

export default Post;
