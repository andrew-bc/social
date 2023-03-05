import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post id={p.id} message={p.message} />
  ));
  return (
    <div>
      <div className={s.content__posts}>
        <div className={s.posts__title}>My posts</div>
        <form action="" className={s.posts__form}>
          <textarea rows="2" placeholder="your news..."></textarea>
          <button>Send</button>
        </form>
      </div>
      <div className={s.content__wall}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
