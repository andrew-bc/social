import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  debugger;
  let postsElements = props.posts.map((p) => (
    <Post id={p.id} key={p.id} message={p.message} src={p.src} likesCount={p.likesCount} />
  ));

  let messageText = React.createRef();

  let addPost = () => {
    let text = messageText.current.value;
    props.addPost(text);
  };

  let updatePost = () => {
    let text = messageText.current.value;
    props.updatePost(text);
  };

  return (
    <div>
      <div className={s.content__posts}>
        <div className={s.posts__title}>My posts</div>
        <div className={s.posts__form}>
          <textarea
            rows="2"
            placeholder="your news..."
            ref={messageText}
            value={props.newText}
            onChange={updatePost}
          ></textarea>
          <button onClick={addPost}>Send</button>
        </div>
      </div>
      <div className={s.content__wall}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
