import s from "./Header.module.css";

import logo from "./../../img/logo.png";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__wrapper}>
        <div className={s.header__logo}>
          <img src={logo} alt="" />
        </div>
        <div className={s.header__title}>My social network...</div>
      </div>
    </header>
  );
};

export default Header;
