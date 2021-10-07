import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import { useHistory } from "react-router";

const useStyles = makeStyles(styles);

export default function SubSection() {
  const history = useHistory();

  const [newSubscriber, setNewSubscriber] = useState({});
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      userName,
      mobile,
      email,
      address1,
      address2,
      city,
      state,
      pincode,
    } = newSubscriber;
    if (
      userName &&
      mobile &&
      email &&
      address1 &&
      address2 &&
      city &&
      state &&
      pincode
    ) {
      alert("Thank you for your Registration !");
      setNewSubscriber({});
      history.push("/login");
    }
  };
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h4 className={classes.description}>
            New registration only for Shri Sudha Tmail magazine
          </h4>
          <form onSubmit={handleSubmit}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  type=""
                  labelText="Your Name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    required: true,
                    value: newSubscriber?.userName || "",
                    onChange: (e) =>
                      setNewSubscriber({
                        ...newSubscriber,
                        userName: e.target.value,
                      }),
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  type="number"
                  labelText="Mobile Number"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    required: true,
                    value: newSubscriber.mobile || "",
                    onChange: (e) =>
                      setNewSubscriber({
                        ...newSubscriber,
                        mobile: e.target.value,
                      }),
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  type="email"
                  labelText="Email address"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    required: true,
                    value: newSubscriber?.email || "",
                    onChange: (e) =>
                      setNewSubscriber({
                        ...newSubscriber,
                        email: e.target.value,
                      }),
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  type=""
                  labelText="Address Line 1"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    required: true,
                    value: newSubscriber?.address1 || "",
                    onChange: (e) =>
                      setNewSubscriber({
                        ...newSubscriber,
                        address1: e.target.value,
                      }),
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
                  inputProps={{
                    required: true,
                    value: newSubscriber?.address2 || "",
                    onChange: (e) =>
                      setNewSubscriber({
                        ...newSubscriber,
                        address2: e.target.value,
                      }),
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
                  inputProps={{
                    required: true,
                    value: newSubscriber?.city || "",
                    onChange: (e) =>
                      setNewSubscriber({
                        ...newSubscriber,
                        city: e.target.value,
                      }),
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
                  inputProps={{
                    required: true,
                    value: newSubscriber?.state || "",
                    onChange: (e) =>
                      setNewSubscriber({
                        ...newSubscriber,
                        state: e.target.value,
                      }),
                  }}
                />
              </GridItem>
              <GridItem xs={6} sm={6} md={3}>
                <CustomInput
                  type="number"
                  labelText="Pin Code"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    required: true,
                    value: newSubscriber?.pincode || "",
                    onChange: (e) =>
                      setNewSubscriber({
                        ...newSubscriber,
                        pincode: e.target.value,
                      }),
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
