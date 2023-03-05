import s from "./Profile.module.css";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts
        posts={props.state.posts}
        newText={props.state.newText}
        addPost={props.addPost}
        updateNewTextPost={props.updateNewTextPost}
      />
    </div>
  );
};

export default Profile;
