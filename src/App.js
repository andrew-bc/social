import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="wrapper">
        <div className="main">
          <Nav />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default App;
