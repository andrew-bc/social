import s from "./Header.module.css";
import logo from "./../../img/logo.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.header__wrapper}>
        <div className={s.header__left}>
          <div className={s.header__logo}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className={s.header__title}>
            <Link to="/">My social network...</Link>
          </div>
        </div>
        <div className={s.header__right}>
          <div className={s.header__login}>
            {props.auth.isAuth === true ? `Hello, ${props.auth.login}` : "Please login..."}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
