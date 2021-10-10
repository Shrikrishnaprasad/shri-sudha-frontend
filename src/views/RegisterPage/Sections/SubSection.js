import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import { useHistory } from "react-router";
import { TextField } from "@mui/material";

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
                <TextField
                  label="Your Name"
                  color="secondary"
                  fullWidth
                  value={newSubscriber?.userName || ""}
                  required
                  margin="dense"
                  onChange={(e) =>
                    setNewSubscriber({
                      ...newSubscriber,
                      userName: e.target.value,
                    })
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  type="number"
                  label="Mobile Number"
                  color="secondary"
                  fullWidth
                  value={newSubscriber?.mobile || ""}
                  required
                  margin="dense"
                  onChange={(e) =>
                    setNewSubscriber({
                      ...newSubscriber,
                      mobile: e.target.value,
                    })
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <TextField
                  type="email"
                  label="Email address"
                  color="secondary"
                  fullWidth
                  value={newSubscriber?.email || ""}
                  required
                  margin="dense"
                  onChange={(e) =>
                    setNewSubscriber({
                      ...newSubscriber,
                      email: e.target.value,
                    })
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  label="Address Line 1"
                  color="secondary"
                  fullWidth
                  value={newSubscriber?.address1 || ""}
                  required
                  margin="dense"
                  onChange={(e) =>
                    setNewSubscriber({
                      ...newSubscriber,
                      address1: e.target.value,
                    })
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  label="Address Line 2"
                  color="secondary"
                  fullWidth
                  value={newSubscriber?.address2 || ""}
                  required
                  margin="dense"
                  onChange={(e) =>
                    setNewSubscriber({
                      ...newSubscriber,
                      address2: e.target.value,
                    })
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  label="City"
                  color="secondary"
                  fullWidth
                  value={newSubscriber?.city || ""}
                  required
                  margin="dense"
                  onChange={(e) =>
                    setNewSubscriber({
                      ...newSubscriber,
                      city: e.target.value,
                    })
                  }
                />
              </GridItem>
              <GridItem xs={6} sm={6} md={3}>
                <TextField
                  label="State"
                  color="secondary"
                  fullWidth
                  value={newSubscriber?.state || ""}
                  required
                  margin="dense"
                  onChange={(e) =>
                    setNewSubscriber({
                      ...newSubscriber,
                      state: e.target.value,
                    })
                  }
                />
              </GridItem>
              <GridItem xs={6} sm={6} md={3}>
                <TextField
                  type="number"
                  label="Pin Code"
                  color="secondary"
                  fullWidth
                  value={newSubscriber?.pincode || ""}
                  required
                  margin="dense"
                  onChange={(e) =>
                    setNewSubscriber({
                      ...newSubscriber,
                      pincode: e.target.value,
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
