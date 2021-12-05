/*eslint-disable*/
import React, { useEffect, useState } from "react";
// react components for routing our app without refresh
import { NavLink, useHistory } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { useGlobalContext } from "components/ContextApi/context";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const history = useHistory();
  const { user, setUser, initialStateUser } = useGlobalContext();
  const handleLoginLogout = () => {
    if (user?.isAdmin || user?.userId) {
      setUser(initialStateUser);
      history.push("/");
    } else if (!user?.isAdmin && !user?.userId) {
      setUser(initialStateUser);
      history.push("/login");
    }
  };
  return (
    <List className={classes.list}>
      {user?.userId ? (
        <ListItem className={classes.listItem}>
          <Button
            color="transparent"
            className={classes.navLink}
            onClick={() => {
              user?.isAdmin || user?.userId
                ? history.push("/dashboard")
                : alert("Please Login to use");
            }}
          >
            Dashboard
          </Button>
        </ListItem>
      ) : (
        ""
      )}
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          activeClassName={classes.navLinkActive}
          component={NavLink}
          to={"/founder"}
        >
          Founder
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          activeClassName={classes.navLinkActive}
          component={NavLink}
          to={"/gallery"}
        >
          Gallery
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          activeClassName={classes.navLinkActive}
          component={NavLink}
          to={"/subscribe"}
        >
          Subscribe
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          activeClassName={classes.navLinkActive}
          component={NavLink}
          to={"/contact"}
        >
          Contact us
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          activeClassName={classes.navLinkActive}
          component={NavLink}
          to={"/matrimony"}
        >
          Matrimony
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          activeClassName={classes.navLinkActive}
          component={NavLink}
          to={"/feedback"}
        >
          Feedback
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          activeClassName={classes.navLinkActive}
          component={NavLink}
          to={"/register"}
        >
          Register
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          activeClassName={classes.navLinkActive}
          onClick={handleLoginLogout}
        >
          {user?.userId ? "Logout" : "Login"}
        </Button>
      </ListItem>
    </List>
  );
}
