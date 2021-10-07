import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function MatrimonySection() {
  const classes = useStyles();
  return (
    <div className={classes.section} style={{ padding: "10px" }}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h4 className={classes.description}>
            Registration for Matrimony section in Shri Sudha Tmail magazine
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <h6 className={classes.description}>Personal Details</h6>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  type=""
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  type=""
                  labelText="Mobile Number"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  type=""
                  labelText="Father`s Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  type=""
                  labelText="Mother`s Name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={6} sm={6} md={3}>
                <CustomInput
                  type="date"
                  labelText=""
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={6} sm={6} md={3}>
                <CustomInput
                  type=""
                  labelText="Nakshatra (Birth star)"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={6} sm={6} md={3}>
                <CustomInput
                  type=""
                  labelText="Gotra"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={6} sm={6} md={3}>
                <CustomInput
                  type=""
                  labelText="Other details"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>

              <GridItem xs={12} sm={12} md={12}>
                <h6 className={classes.description}>Address</h6>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  type=""
                  labelText="Address Line 1"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  type=""
                  labelText="Address Line 2"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  type=""
                  labelText="City"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={6} sm={6} md={3}>
                <CustomInput
                  type=""
                  labelText="State"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={6} sm={6} md={3}>
                <CustomInput
                  type=""
                  labelText="Pin Code"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <h6 className={classes.description}>Job details</h6>
              </GridItem>
              <GridItem xs={6} sm={6} md={4}>
                <CustomInput
                  type=""
                  labelText="Job Role"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={6} sm={6} md={5}>
                <CustomInput
                  type=""
                  labelText="Company details, Place"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={6} sm={6} md={3}>
                <CustomInput
                  type=""
                  labelText="Salary"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <Button type="submit" color="primary">
                  Register
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
