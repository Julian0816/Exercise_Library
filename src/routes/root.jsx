import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

import Level from "../components/Level";
import Muscle from "../components/Muscle";
import Type from "../components/Type";
import Recipes from "../components/Recipes";

import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

import { styled } from "@mui/system";


import { Outlet } from "react-router-dom";


const drawerWidth = 240;

function Root(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <Level />
      </List>
      <List>
        <Muscle />
      </List>
      <List>
        <Type />
      </List>
      <List>
        <Recipes />
      </List>
      <Divider />
    </div>
  );

  const StyledToolBar = styled(Toolbar)`
    background-color: #637081;
  `;


  const StyledTitle = styled(Typography)`
    color: #ffff;
    font-weight: bold;
    font-size: 15px;
    padding-left: 3px;
  `;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <StyledToolBar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <StyledTitle>Exercise Library</StyledTitle>
          </Typography>
          <div style={{ marginLeft: "auto", paddingRight: "10px" }}>
            {" "}
            {/* Aligns the following links to the right */}
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "inherit",
                marginRight: "10px",
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About
            </Link>
          </div>
          <FitnessCenterIcon size="large" aria-label="fitnessCenterIcon" />
        </StyledToolBar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
        <Typography paragraph></Typography>
      </Box>
    </Box>
  );
}

Root.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Root;
