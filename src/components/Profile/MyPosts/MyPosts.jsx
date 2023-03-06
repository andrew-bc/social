import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post id={p.id} message={p.message} src={p.src} likesCount={p.likesCount} />
  ));

  let messageText = React.createRef();

  let sendPostToState = () => {
    let text = messageText.current.value;
    //props.addPost(text);
    props.dispatch({ type: "ADD-POST", message: text });
  };

  let updatePost = () => {
    //props.updateNewTextPost(messageText.current.value);
    props.dispatch({
      type: "UPDATE-NEW-TEXT-POST",
      newText: messageText.current.value,
    });
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
          <button onClick={sendPostToState}>Send</button>
        </div>
      </div>
      <div className={s.content__wall}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
