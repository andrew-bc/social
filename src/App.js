import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Routes, Route, useLocation, useNavigate, useParams } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import { connect } from "react-redux";
import { initApp } from "./redux/appReducer";
import { useEffect } from "react";
import Preload from "./components/Preload/Preload";
import { compose } from "redux";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

const App = (props) => {
  useEffect(() => {
    props.initApp();
  });

  if (!props.initialized) return <Preload />;

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <div className="wrapper">
        <div className="main">
          <Sidebar />
          <Routes>
            <Route path="/" element={<ProfileContainer isMain={true} />} />
            <Route path="/profile" element={<ProfileContainer isMain={true} />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<LoginContainer />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

export default compose(withRouter, connect(mapStateToProps, { initApp }))(App);
