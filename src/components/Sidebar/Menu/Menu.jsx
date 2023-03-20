import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import MuiListItemButton from "@mui/material/ListItemButton";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MessageIcon from "@mui/icons-material/Message";
import FeedIcon from "@mui/icons-material/Feed";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";

let Menu = () => {
  const menuWidth = 240;

  const ListItemButton = styled(MuiListItemButton)({
    "&.active .MuiTypography-root": {
      fontWeight: "bold",
    },
  });

  return (
    <List
      component="nav"
      variant="permanent"
      sx={{
        width: menuWidth,
        flexShrink: 0,
      }}
    >
      <ListItem disablePadding>
        <ListItemButton component={NavLink} exact={`${true}`} to="/profile">
          <ListItemIcon>
            <AccountCircleIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={NavLink} exact={`${true}`} to="/dialogs">
          <ListItemIcon>
            <MessageIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={NavLink} exact={`${true}`} to="/news">
          <ListItemIcon>
            <FeedIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="News" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={NavLink} exact={`${true}`} to="/music">
          <ListItemIcon>
            <LibraryMusicIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Music" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={NavLink} exact={`${true}`} to="/users">
          <ListItemIcon>
            <PeopleIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Find users" />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton component={NavLink} exact={`${true}`} to="/settings">
          <ListItemIcon>
            <SettingsIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default Menu;
