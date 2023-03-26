import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import News from "./components/News/News";
import EditProfile from "./components/EditProfile/EditProfile";
import Settings from "./components/Settings/Settings";
import { Routes, Route, useLocation, useNavigate, useParams } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import { connect } from "react-redux";
import { initApp } from "./redux/appReducer";
import { useEffect } from "react";
import Preload from "./components/UI/Preload/Preload";
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
    <>
      <HeaderContainer />
      <div className="app-wrapper">
        <div className="wrapper">
          <div className="main">
            <Sidebar />
            <Routes>
              <Route path="/" element={<ProfileContainer />} />
              <Route path="/profile" element={<ProfileContainer />} />
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/edit" element={<EditProfile />} />
              <Route path="/users" element={<UsersContainer totalCount={props.totalCount} />} />
              <Route path="/users/:page" element={<UsersContainer />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<LoginContainer />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
    totalCount: state.users.totalCount,
  };
};

export default compose(withRouter, connect(mapStateToProps, { initApp }))(App);
