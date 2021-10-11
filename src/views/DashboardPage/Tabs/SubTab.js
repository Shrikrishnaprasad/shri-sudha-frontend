import React from "react";
// react plugin for creating charts

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// @material-ui/icons
import AccessTime from "@material-ui/icons/AccessTime";

// core components
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { useHistory } from "react-router";

const useStyles = makeStyles(styles);

export default function SubTab() {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="success">
            <span className={classes.cardTitle} style={{ fontSize: "16px" }}>
              {" "}
              Subscription
            </span>
          </CardHeader>
          <CardBody>
            <p className={classes.cardCategory}>Valid Upto</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              itaque repellat et aliquam, earum sint labore unde voluptas!
              Itaque
            </p>
          </CardBody>
          <CardFooter>
            <div className={classes.stats} style={{ marginRight: "auto" }}>
              <AccessTime /> 01/01/2021
            </div>
            <Button
              type="button"
              color="success"
              onClick={() => history.push("/subscribe")}
            >
              Renewal
            </Button>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="warning">
            <span className={classes.cardTitle} style={{ fontSize: "16px" }}>
              {" "}
              Matrimony
            </span>
          </CardHeader>
          <CardBody>
            <p className={classes.cardCategory}>Valid Upto</p>
            <p>Name : xyz </p>
          </CardBody>
          <CardFooter>
            <div className={classes.stats} style={{ marginRight: "auto" }}>
              <AccessTime /> 01/01/2021
            </div>
            <Button type="button" color="warning">
              Renewal
            </Button>
          </CardFooter>
        </Card>
      </GridItem>
    </Grid>
  );
}
