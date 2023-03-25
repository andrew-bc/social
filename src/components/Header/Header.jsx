import React, { useState } from "react";
import logo from "./../../img/logo.png";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { Avatar, Container, Divider, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link as MaterialLink } from "@mui/material";
import { Logout } from "@mui/icons-material";
import noAvatar from "./../../img/user_wall.png";

const Header = (props) => {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Box sx={{}}>
              <MaterialLink
                component={RouterLink}
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
                to="/"
              >
                <img src={logo} alt="Logo" />
              </MaterialLink>
            </Box>

            <MaterialLink
              component={RouterLink}
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
              to="/"
            >
              My social network
            </MaterialLink>
          </Box>
          <Box>
            {props.auth.isAuth === true ? (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ flex: "1 0 auto" }}>Hello, {props.auth.login}</Box>
                <Tooltip title="Open settings">
                  <IconButton sx={{ pl: "20px", width: "50px" }} onClick={handleMenu}>
                    <Avatar alt="User avatar" src={props.avatar ? props.avatar : noAvatar} />
                  </IconButton>
                </Tooltip>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem
                    onClick={() => {
                      navigate("/profile");
                      handleClose();
                    }}
                  >
                    <ListItemIcon>
                      <Avatar fontSize="small" />
                    </ListItemIcon>
                    My Profile
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/edit");
                      handleClose();
                    }}
                  >
                    <ListItemIcon>
                      <EditIcon fontSize="small" />
                    </ListItemIcon>
                    Edit profile
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    onClick={() => {
                      props.logoutUserFromSite();
                      handleClose();
                    }}
                  >
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Box sx={{ flex: "1 0 auto" }}>
                <MaterialLink
                  component={RouterLink}
                  noWrap
                  sx={{
                    mr: 2,
                    color: "inherit",
                    textDecoration: "none",
                  }}
                  to="/login"
                >
                  Please login...
                </MaterialLink>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
