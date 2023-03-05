import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="wrapper">
          <div className="main">
            <Sidebar state={props.state.sidebar} />
            <Routes>
              <Route
                path="/profile"
                element={
                  <Profile
                    state={props.state.profilePage}
                    addPost={props.addPost}
                    updateNewTextPost={props.updateNewTextPost}
                  />
                }
              />
              <Route
                path="/dialogs*"
                element={<Dialogs state={props.state.dialogsPage} />}
              />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
