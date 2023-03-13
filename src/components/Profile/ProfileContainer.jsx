import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import s from "./Profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import axios from "axios";
import { setProfile } from "./../../redux/profileReducer";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  renderProfile(userId) {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
      this.props.setProfile(response.data);
    });
  }

  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 28257;
    }
    this.renderProfile(userId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.isMain !== prevProps.isMain) {
      if (this.props.isMain) {
        this.renderProfile(28257);
      }
    }
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
  return {
    profile: state.profilePage,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { setProfile })(withRouter(ProfileContainer));
