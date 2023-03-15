import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import s from "./Profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile, getStatus, setStatus } from "./../../redux/profileReducer";
import { compose } from "redux";

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
    this.props.getProfile(userId);
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

export default compose(connect(mapStateToProps, { getProfile, getStatus, setStatus }), withRouter)(ProfileContainer);
