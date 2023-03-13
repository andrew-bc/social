import React from "react";
import s from "./Profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import axios from "axios";
import { setProfile } from "./../../redux/profileReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/profile/10").then((response) => {
      this.props.setProfile(response.data);
    });
  }
  render() {
    return (
      <div className={s.content}>
        <Profile {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { profile: state.profilePage };
};

export default connect(mapStateToProps, { setProfile })(ProfileContainer);
