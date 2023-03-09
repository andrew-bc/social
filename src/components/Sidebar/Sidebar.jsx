import React from "react";
import FriendsContainer from "./Friends/FriendsContainer";
import Menu from "./Menu/Menu";

import s from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <Menu />
      <FriendsContainer />
    </div>
  );
};

export default Sidebar;
