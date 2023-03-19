import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getAutharization, logoutUserFromSite } from "./../../redux/authReducer";

const HeaderContainer = (props) => {
  return <Header {...props} />;
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { logoutUserFromSite })(HeaderContainer);
