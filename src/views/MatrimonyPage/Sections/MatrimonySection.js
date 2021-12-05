import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import { TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const useStyles = makeStyles(styles);

export default function MatrimonySection() {
  const classes = useStyles();
  const [matrimonyDetails, setMatrimonyDetails] = useState({});
  const [isKannada, setIsKannada] = useState("kannada");
  const [gender, setGender] = useState("male");

  const handleChange = (event) => {
    setIsKannada(event.target.value);
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
          <h4 className={classes.description}>
            Registration for Matrimony section in Shri Sudha Tmail magazine
          </h4>
          <form onSubmit={handleSubmit}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <h6 className={classes.description}>Personal Details</h6>
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

              <GridItem xs={12} sm={12} md={6}>
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

              <GridItem xs={6} sm={6} md={4}>
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
              <GridItem xs={6} sm={6} md={2}>
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
              <GridItem xs={6} sm={6} md={4}>
                <TextField
                  label="Gothra"
                  color="secondary"
                  fullWidth
                  value={matrimonyDetails?.gothra || ""}
                  required
                  margin="dense"
                  onChange={(e) =>
                    setMatrimonyDetails({
                      ...matrimonyDetails,
                      gothra: e.target.value,
                    })
                  }
                />
              </GridItem>
              <GridItem xs={6} sm={6} md={4}>
                <TextField
                  label="Star (Nakshathra)"
                  color="secondary"
                  fullWidth
                  value={matrimonyDetails?.star || ""}
                  required
                  margin="dense"
                  onChange={(e) =>
                    setMatrimonyDetails({
                      ...matrimonyDetails,
                      star: e.target.value,
                    })
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    name="row-radio-buttons-group"
                    value={isKannada}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="kannada"
                      control={<Radio color="secondary" />}
                      label="Madhwa Kannada"
                    />
                    <FormControlLabel
                      value="desistha"
                      control={<Radio color="secondary" />}
                      label="Desistha"
                    />
                  </RadioGroup>
                </FormControl>
              </GridItem>

              <GridItem xs={6} sm={6} md={4}>
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
              <GridItem xs={6} sm={6} md={4}>
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
              <GridItem xs={6} sm={6} md={4}>
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
                <h6 className={classes.description}>Contact Details</h6>
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
              <GridItem xs={12} sm={12} md={12}>
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
