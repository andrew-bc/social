import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Login from "./components/Login/Login";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <div className="wrapper">
          <div className="main">
            <Sidebar />
            <Routes>
              <Route path="/" element={<ProfileContainer isMain={true} />} />
              <Route path="/profile" element={<ProfileContainer isMain={true} />} />
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/dialogs*" element={<DialogsContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
