import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updatePostActionCreator } from "./../../../redux/state";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post id={p.id} key={p} message={p.message} src={p.src} likesCount={p.likesCount} />
  ));

  let messageText = React.createRef();

  let addPost = () => {
    let text = messageText.current.value;
    props.dispatch(addPostActionCreator(text));
  };

  let updatePost = () => {
    let text = messageText.current.value;
    props.dispatch(updatePostActionCreator(text));
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
