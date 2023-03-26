import React from "react";
import s from "./MyPosts.module.css";
import PostItem from "./PostItem/PostItem";

class MyPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePostText: "",
    };
  }
  postsElements = this.props.posts.map((p) => (
    <PostItem id={p.id} key={p.id} message={p.message} src={p.src} likesCount={p.likesCount} />
  ));

  addPost = () => {
    if (this.state.activePostText.trim().length !== 0) {
      this.props.addPost(this.state.activePostText);
      this.setState({ activePostText: "" });
    }
  };

  updatePost = (event) => {
    this.setState({ activePostText: event.target.value });
  };

  componentDidMount() {}

  componentDidUpdate() {
    this.postsElements = this.props.posts.map((p) => (
      <PostItem id={p.id} key={p.id} message={p.message} src={p.src} likesCount={p.likesCount} />
    ));
  }

  render() {
    return (
      <div>
        <div className={s.content__posts}>
          <div className={s.posts__title}>My posts</div>
          <div className={s.posts__form}>
            <textarea
              rows="2"
              placeholder="your news..."
              value={this.state.activePostText}
              onChange={this.updatePost}
            ></textarea>
            <button onClick={this.addPost}>Send</button>
          </div>
        </div>
        <div className={s.content__wall}>
          {this.props.posts.map((p) => (
            <PostItem id={p.id} key={p.id} message={p.message} src={p.src} likesCount={p.likesCount} />
          ))}
        </div>
      </div>
    );
  }
}

export default MyPosts;
