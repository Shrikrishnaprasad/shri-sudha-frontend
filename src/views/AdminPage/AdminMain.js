import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import DescriptionIcon from "@mui/icons-material/DescriptionOutlined";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgentOutlined";
import MenuIcon from "@mui/icons-material/MenuOutlined";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import "./AdminMain.scss";
import Support from "./SupportPage/Support";
import Report from "./ReportPage/Report";
import { Route } from "react-router-dom";
import Admin from "./Admin/Admin";

const drawerWidth = 240;

function AdminMain(props) {
  const history = useHistory();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { url, path } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar onClick={() => history.push("/")} style={{ cursor: "pointer" }}>
        <h4 style={{ color: "gray" }}>
          <b>Shri Sudha</b>
        </h4>
      </Toolbar>
      <Divider />
      <List>
        <Link to={`${url}`}>
          <ListItemButton
            selected={`/new${url}` === location.pathname}
            onClick={handleDrawerToggle}
          >
            <ListItemIcon>
              <AdminPanelSettingsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Admin" />
          </ListItemButton>
        </Link>
        <Link to={`${url}/support`}>
          <ListItemButton
            selected={`/new${url}/support` === location.pathname}
            onClick={handleDrawerToggle}
          >
            <ListItemIcon>
              <SupportAgentIcon />
            </ListItemIcon>
            <ListItemText primary="Support" />
          </ListItemButton>
        </Link>
        <Link to={`${url}/report`}>
          <ListItemButton
            selected={`/new${url}/report` === location.pathname}
            onClick={handleDrawerToggle}
          >
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Report" />
          </ListItemButton>
        </Link>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        color="secondary"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
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
            SHRI SUDHA
          </Typography>
        </Toolbar>
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
      <Box className="admin-right-pane" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Route exact path={`${path}/`} component={Admin} />
        <Route exact path={`${path}/support`} component={Support} />
        <Route exact path={`${path}/report`} component={Report} />
      </Box>
    </Box>
  );
}

AdminMain.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AdminMain;
