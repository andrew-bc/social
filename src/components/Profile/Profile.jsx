import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile.profile}
        setStatus={props.setStatus}
        uploadAvatar={props.uploadAvatar}
        myId={props.auth.id}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
