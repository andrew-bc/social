import React from "react";
import { NavLink } from "react-router-dom";

import s from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li className={s.item}>
          <NavLink
            to="/profile"
            className={(navigationData) =>
              navigationData.isActive ? s.active : s.item
            }
          >
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            to="/dialogs"
            className={(navigationData) =>
              navigationData.isActive ? s.active : s.item
            }
          >
            Messages
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            to="/news"
            className={(navigationData) =>
              navigationData.isActive ? s.active : s.item
            }
          >
            News
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            to="/music"
            className={(navigationData) =>
              navigationData.isActive ? s.active : s.item
            }
          >
            Music
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            to="/settings"
            className={(navigationData) =>
              navigationData.isActive ? s.active : s.item
            }
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
