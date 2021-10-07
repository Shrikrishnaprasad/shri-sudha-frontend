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

const useStyles = makeStyles(styles);

export default function MatrimonySection() {
  const classes = useStyles();
  const [matrimonyDetails, setMatrimonyDetails] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      userName,
      mobile,
      father,
      /* mother, */
      dob,
      nakshatra,
      gotra,
      /* others,*/
      address1,
      address2,
      city,
      state,
      pincode,
      jobRole,
      company,
      salary,
    } = matrimonyDetails;
    if (
      userName &&
      mobile &&
      father &&
      dob &&
      nakshatra &&
      gotra &&
      address1 &&
      address2 &&
      city &&
      state &&
      pincode &&
      jobRole &&
      company &&
      salary
    ) {
      alert("Thank you for your Registration !");
      setMatrimonyDetails({});
      history.push("/login");
    }
  };
  return (
    <div className={classes.section} style={{ padding: "10px" }}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h4 className={classes.description}>
            Registration for Matrimony section in Shri Sudha Tmail magazine
          </h4>
          <form onSubmit={handleSubmit}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <h6 className={classes.description}>Personal Details</h6>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  type=""
                  labelText="Your Name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    required: true,
                    value: matrimonyDetails?.name || "",
                    onChange: (e) =>
                      setMatrimonyDetails({
                        ...matrimonyDetails,
                        name: e.target.value,
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
                    value: matrimonyDetails?.mobile || "",
                    onChange: (e) =>
                      setMatrimonyDetails({
                        ...matrimonyDetails,
                        mobile: e.target.value,
                      }),
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  type=""
                  labelText="Father`s Name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    required: true,
                    value: matrimonyDetails?.father || "",
                    onChange: (e) =>
                      setMatrimonyDetails({
                        ...matrimonyDetails,
                        father: e.target.value,
                      }),
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
                  inputProps={{
                    value: matrimonyDetails?.mother || "",
                    onChange: (e) =>
                      setMatrimonyDetails({
                        ...matrimonyDetails,
                        mother: e.target.value,
                      }),
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
                  inputProps={{
                    required: true,
                    value: matrimonyDetails?.dob || "",
                    onChange: (e) =>
                      setMatrimonyDetails({
                        ...matrimonyDetails,
                        dob: e.target.value,
                      }),
                  }}
                />
              </GridItem>
              <GridItem xs={6} sm={6} md={3}>
                <CustomInput
                  type=""
                  labelText="Nakshatra (Birth star)"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    required: true,
                    value: matrimonyDetails?.nakshatra || "",
                    onChange: (e) =>
                      setMatrimonyDetails({
                        ...matrimonyDetails,
                        nakshatra: e.target.value,
                      }),
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
                  inputProps={{
                    required: true,
                    value: matrimonyDetails?.gotra || "",
                    onChange: (e) =>
                      setMatrimonyDetails({
                        ...matrimonyDetails,
                        gotra: e.target.value,
                      }),
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
                  inputProps={{
                    value: matrimonyDetails?.others || "",
                    onChange: (e) =>
                      setMatrimonyDetails({
                        ...matrimonyDetails,
                        others: e.target.value,
                      }),
                  }}
                />
              </GridItem>

              <GridItem xs={12} sm={12} md={12}>
                <br />
                <h6 className={classes.description}>Address</h6>
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
                    value: matrimonyDetails?.address1 || "",
                    onChange: (e) =>
                      setMatrimonyDetails({
                        ...matrimonyDetails,
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
                    value: matrimonyDetails?.address2 || "",
                    onChange: (e) =>
                      setMatrimonyDetails({
                        ...matrimonyDetails,
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
                    value: matrimonyDetails?.city || "",
                    onChange: (e) =>
                      setMatrimonyDetails({
                        ...matrimonyDetails,
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
                    value: matrimonyDetails?.state || "",
                    onChange: (e) =>
                      setMatrimonyDetails({
                        ...matrimonyDetails,
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
                    value: matrimonyDetails?.pincode || "",
                    onChange: (e) =>
                      setMatrimonyDetails({
                        ...matrimonyDetails,
                        pincode: e.target.value,
                      }),
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <br />
                <h6 className={classes.description}>Job details</h6>
              </GridItem>
              <GridItem xs={6} sm={6} md={4}>
                <CustomInput
                  type=""
                  labelText="Job Role"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    required: true,
                    value: matrimonyDetails?.jobRole || "",
                    onChange: (e) =>
                      setMatrimonyDetails({
                        ...matrimonyDetails,
                        jobRole: e.target.value,
                      }),
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
                  inputProps={{
                    required: true,
                    value: matrimonyDetails?.company || "",
                    onChange: (e) =>
                      setMatrimonyDetails({
                        ...matrimonyDetails,
                        company: e.target.value,
                      }),
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
                  inputProps={{
                    required: true,
                    value: matrimonyDetails?.salary || "",
                    onChange: (e) =>
                      setMatrimonyDetails({
                        ...matrimonyDetails,
                        salary: e.target.value,
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
