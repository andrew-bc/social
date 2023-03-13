import { addPost, updatePost } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newText: state.profilePage.newText,
  };
};

const MyPostsContainer = connect(mapStateToProps, { addPost, updatePost })(MyPosts);
export default MyPostsContainer;
