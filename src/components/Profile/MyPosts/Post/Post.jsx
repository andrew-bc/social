import s from "./Post.module.css";

import user_wall from "./../../../../img/user_wall.png";

const Post = (props) => {
  return (
    <div>
      <div className={s.wall__item}>
        <div className={s.wall__avatar}>
          <img src={user_wall} alt="" />
        </div>
        <div className={s.wall__message}>{props.message}</div>
      </div>
    </div>
  );
};

export default Post;
