import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logoutUserFromSite } from "./../../redux/authReducer";

const HeaderContainer = (props) => {
  return <Header {...props} />;
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    avatar: state.auth.avatarURL,
  };
};

export default connect(mapStateToProps, { logoutUserFromSite })(HeaderContainer);
