import logo from "./../img/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>
        <div className="header__title">My social network...</div>
      </div>
    </header>
  );
};

export default Header;
