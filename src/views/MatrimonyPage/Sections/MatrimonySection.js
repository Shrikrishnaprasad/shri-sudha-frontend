import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import { Checkbox, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { NakshathraData } from "./NakshathraData";
import { GothraData } from "./GothraData";

const useStyles = makeStyles(styles);

export default function MatrimonySection() {
  const classes = useStyles();
  const [matrimonyDetails, setMatrimonyDetails] = useState({});
  const [isKannada, setIsKannada] = useState("Madhwa Kannada");
  const [gender, setGender] = useState("male");
  const [gothra, setGothra] = useState("Select Gothra");
  const [nakshatra, setNakshatra] = useState("Select Nakshatra");
  const [anotherMarriage, setAnotherMarriage] = useState(false);
  const handleChangeType = (event) => {
    setIsKannada(event.target.value);
  };
  const handleChangeGothra = (event) => {
    setGothra(event.target.value);
  };
  const handleChangeNakshatra = (event) => {
    setNakshatra(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      date,
      height,
      gothra,
      star,
      education,
      profession,
      salary,
      contactPerson,
      contactPersonNum,
      altNum,
      residence,
    } = matrimonyDetails;
    if (
      gender &&
      name &&
      date &&
      height &&
      gothra &&
      star &&
      isKannada &&
      education &&
      profession &&
      salary &&
      contactPerson &&
      contactPersonNum &&
      altNum &&
      residence
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
          <h3 className={classes.description}>
            Registration for Matrimony section in Shri Sudha Tmail magazine
          </h3>
          <form onSubmit={handleSubmit}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <h5 className={classes.description}>Personal Details</h5>
              </GridItem>
              <GridItem xs={12} sm={12} md={12} container justify="center">
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    name="row-radio-buttons-group"
                    value={gender}
                    onChange={handleChangeGender}
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio color="secondary" />}
                      label="Vara"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio color="secondary" />}
                      label="Vadhu"
                    />
                  </RadioGroup>
                </FormControl>
              </GridItem>

              <GridItem xs={12} sm={12} md={4}>
                <TextField
                  label="Your Name"
                  color="secondary"
                  fullWidth
                  value={matrimonyDetails?.name || ""}
                  required
                  margin="dense"
                  onChange={(e) =>
                    setMatrimonyDetails({
                      ...matrimonyDetails,
                      name: e.target.value,
                    })
                  }
                />
              </GridItem>

              <GridItem xs={12} sm={12} md={4}>
                <TextField
                  type="date"
                  color="secondary"
                  fullWidth
                  value={matrimonyDetails?.date || ""}
                  required
                  margin="dense"
                  onChange={(e) =>
                    setMatrimonyDetails({
                      ...matrimonyDetails,
                      date: e.target.value,
                    })
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <TextField
                  label="Height"
                  color="secondary"
                  fullWidth
                  value={matrimonyDetails?.height || ""}
                  required
                  margin="dense"
                  onChange={(e) =>
                    setMatrimonyDetails({
                      ...matrimonyDetails,
                      height: e.target.value,
                    })
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4} style={{ margin: "10px 0px" }}>
                <FormControl fullWidth>
                  <InputLabel color="secondary" style={{ marginBottom: "4px" }}>
                    Gothra *
                  </InputLabel>

                  <Select
                    margin="dense"
                    variant="outlined"
                    value={gothra}
                    label="Gothra"
                    color="secondary"
                    onChange={handleChangeGothra}
                    fullWidth
                    required
                    style={{ padding: "8px" }}
                  >
                    <MenuItem
                      value={"Select Gothra"}
                      disabled
                      style={{ padding: "8px" }}
                    >
                      Select Gothra
                    </MenuItem>
                    {GothraData.map((gothra, index) => {
                      return (
                        <MenuItem
                          key={index}
                          value={gothra}
                          style={{ padding: "8px 4px" }}
                        >
                          {gothra.gothra}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem xs={12} sm={12} md={4} style={{ margin: "10px 0px" }}>
                <FormControl fullWidth>
                  <InputLabel color="secondary" style={{ marginBottom: "4px" }}>
                    Nakshathra *
                  </InputLabel>

                  <Select
                    margin="dense"
                    variant="outlined"
                    value={nakshatra}
                    color="secondary"
                    label="Nakshathra"
                    onChange={handleChangeNakshatra}
                    fullWidth
                    required
                    style={{ padding: "8px 0px" }}
                  >
                    <MenuItem
                      value={"Select Nakshatra"}
                      disabled
                      style={{ padding: "8px 4px" }}
                    >
                      Select Nakshathra
                    </MenuItem>
                    {NakshathraData.map((nakshathra, index) => {
                      return (
                        <MenuItem
                          key={index}
                          value={nakshathra.value}
                          style={{ padding: "8px 4px" }}
                        >
                          {nakshathra.nakshathra}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem xs={12} sm={12} md={4} style={{ margin: "10px 0px" }}>
                <FormControl fullWidth>
                  <InputLabel color="secondary" style={{ marginBottom: "4px" }}>Type</InputLabel>

                  <Select
                    margin="dense"
                    variant="outlined"
                    value={isKannada}
                    color="secondary"
                    onChange={handleChangeType}
                    label="Age"
                    fullWidth
                    style={{ padding: "8px 0px" }}
                  >
                    <MenuItem
                      value={"Madhwa Kannada"}
                      style={{ padding: "8px 4px" }}
                    >
                      Madhwa Kannada
                    </MenuItem>
                    <MenuItem value={"Desistha"} style={{ padding: "8px 4px" }}>
                      Desistha
                    </MenuItem>
                  </Select>
                </FormControl>
              </GridItem>

              <GridItem xs={12} sm={12} md={4}>
                <TextField
                  label="Education"
                  color="secondary"
                  fullWidth
                  value={matrimonyDetails?.education || ""}
                  required
                  margin="dense"
                  onChange={(e) =>
                    setMatrimonyDetails({
                      ...matrimonyDetails,
                      education: e.target.value,
                    })
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <TextField
                  label="Profession"
                  color="secondary"
                  fullWidth
                  value={matrimonyDetails?.profession || ""}
                  required
                  margin="dense"
                  onChange={(e) =>
                    setMatrimonyDetails({
                      ...matrimonyDetails,
                      profession: e.target.value,
                    })
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <TextField
                  label="Salary"
                  color="secondary"
                  fullWidth
                  value={matrimonyDetails?.salary || ""}
                  required
                  margin="dense"
                  onChange={(e) =>
                    setMatrimonyDetails({
                      ...matrimonyDetails,
                      salary: e.target.value,
                    })
                  }
                />
              </GridItem>

              <GridItem xs={12} sm={12} md={12}>
                <br />
                <h5 className={classes.description}>Contact Details</h5>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  label="Contact Person Name"
                  color="secondary"
                  fullWidth
                  value={matrimonyDetails?.contactPerson || ""}
                  required
                  margin="dense"
                  onChange={(e) =>
                    setMatrimonyDetails({
                      ...matrimonyDetails,
                      contactPerson: e.target.value,
                    })
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  label="Contact Person number"
                  color="secondary"
                  fullWidth
                  value={matrimonyDetails?.contactPersonNum || ""}
                  required
                  margin="dense"
                  onChange={(e) =>
                    setMatrimonyDetails({
                      ...matrimonyDetails,
                      contactPersonNum: e.target.value,
                    })
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  label="Alternate number (optional)"
                  color="secondary"
                  fullWidth
                  margin="dense"
                  value={matrimonyDetails?.altNum || ""}
                  onChange={(e) =>
                    setMatrimonyDetails({
                      ...matrimonyDetails,
                      altNum: e.target.value,
                    })
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  label="Place of residence"
                  color="secondary"
                  fullWidth
                  required
                  margin="dense"
                  value={matrimonyDetails?.residence || ""}
                  onChange={(e) =>
                    setMatrimonyDetails({
                      ...matrimonyDetails,
                      residence: e.target.value,
                    })
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      checked={anotherMarriage}
                      onChange={() => setAnotherMarriage(!anotherMarriage)}
                    />
                  }
                  label={
                    <b>* If any second marriage kindly please check this </b>
                  }
                />
              </GridItem>
              <GridItem
                align="center"
                xs={12}
                sm={12}
                md={6}
                style={{ margin: "auto" }}
              >
                <Button fullWidth type="submit" color="primary">
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
