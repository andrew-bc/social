import { connect } from "react-redux";
import Login from "./LoginForm/LoginForm";
import { loginUserOnSite } from "./../../redux/authReducer";
import { Navigate } from "react-router-dom";

const LoginContainer = (props) => {
  if (props.isAuth) return <Navigate to="/profile" />;
  return <Login loginUserOnSite={props.loginUserOnSite} />;
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { loginUserOnSite })(LoginContainer);
