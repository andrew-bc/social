import React from "react";
import Friends from "./Friends/Friends";
import Menu from "./Menu/Menu";

import s from "./Sidebar.module.css";

const Sidebar = (props) => {
  let state = props.store.getState();
  return (
    <div className={s.sidebar}>
      <Menu />
      <Friends state={state} />
    </div>
  );
};

export default Sidebar;
