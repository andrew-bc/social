import { connect } from "react-redux";
import Login from "./LoginForm/LoginForm";
import { loginUserOnSite } from "./../../redux/authReducer";
import { Navigate } from "react-router-dom";

const LoginContainer = (props) => {
  if (props.isAuth) return <Navigate to="/profile" />;
  return <Login loginUserOnSite={props.loginUserOnSite} captchaURL={props.captchaURL} />;
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaURL,
  };
};

export default connect(mapStateToProps, { loginUserOnSite })(LoginContainer);
