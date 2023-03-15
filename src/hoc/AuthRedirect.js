import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let withAuthRedirect = (Component) => {
  let MapStateToProps = (state) => {
    return {
      isAuth: state.auth.isAuth,
    };
  };
  let RedirectComponent = (props) => {
    if (!props.isAuth) return <Navigate to="/login" />;
    return <Component />;
  };

  return connect(MapStateToProps)(RedirectComponent);
};

export default withAuthRedirect;
