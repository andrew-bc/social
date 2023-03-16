import s from "./Login.module.css";
import LoginForm from "./LoginForm/LoginForm";

const Login = (props) => {
  debugger;
  return <LoginForm loginUserOnSite={props.loginUserOnSite} />;
};

export default Login;
