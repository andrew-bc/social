import LoginForm from "./LoginForm/LoginForm";

const Login = (props) => {
  debugger;
  return <LoginForm loginUserOnSite={props.loginUserOnSite} captchaURL={props.captchaURL} />;
};

export default Login;
