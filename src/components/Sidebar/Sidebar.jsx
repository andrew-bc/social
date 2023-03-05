import React from "react";
import Friends from "./Friends/Friends";
import Menu from "./Menu/Menu";

import s from "./Sidebar.module.css";

const Sidebar = (props) => {
  return (
    <div className={s.sidebar}>
      <Menu />
      <Friends state={props.state} />
    </div>
  );
};

export default Sidebar;
