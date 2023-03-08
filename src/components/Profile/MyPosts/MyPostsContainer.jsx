import React from "react";
import { addPostActionCreator, updatePostActionCreator } from "../../../redux/profileReducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addPost = (text) => {
          store.dispatch(addPostActionCreator(text));
        };

        let updatePost = (text) => {
          store.dispatch(updatePostActionCreator(text));
        };

        return (
          <MyPosts
            updatePost={updatePost}
            addPost={addPost}
            posts={state.profilePage.posts}
            newText={state.profilePage.newText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
