import React from "react";
import { addPostActionCreator, updatePostActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = (text) => {
    props.store.dispatch(addPostActionCreator(text));
  };

  let updatePost = (text) => {
    props.store.dispatch(updatePostActionCreator(text));
  };

  return (
    <MyPosts
      updatePost={updatePost}
      addPost={addPost}
      posts={state.profilePage.posts}
      newText={state.profilePage.newText}
    />
  );
};

export default MyPostsContainer;
