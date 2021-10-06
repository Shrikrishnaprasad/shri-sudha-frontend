import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import NavPills from "components/NavPills/NavPills.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import SubSection from "./SubSection";
import MatrimonySection from "./MatrimonySection";
import { Assignment, PersonAdd } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function RegisterTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h3 className={classes.title}>Register</h3>
      <GridContainer justify="center">
        <NavPills
          alignCenter
          color="primary"
          tabs={[
            {
              tabIcon: PersonAdd,
              tabButton: "New Subscriber",
              tabContent: <SubSection />,
            },
            {
              tabIcon: Assignment,
              tabButton: "Matrimony Details",
              tabContent: <MatrimonySection />,
            },
          ]}
        />
      </GridContainer>
    </div>
  );
}
