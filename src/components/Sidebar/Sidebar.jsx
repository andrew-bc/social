import React from "react";
import Friends from "./Friends/Friends";
import Menu from "./Menu/Menu";

import s from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <Menu />
      <Friends />
    </div>
  );
};

export default Sidebar;
