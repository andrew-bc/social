import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preload from "../Users/Preload/Preload";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo profile={props.profile.profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
