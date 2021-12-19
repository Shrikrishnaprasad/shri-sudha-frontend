import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import bg from "../../assets/img/bg.jpg";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
// delete - import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { Card, TextField, CardContent } from "@material-ui/core";
import Button from "components/CustomButtons/Button.js";
import NavPills from "components/NavPills/NavPills";
import { Assignment } from "@material-ui/icons";

// Sections for this page

const useStyles = makeStyles(styles);

export default function Feedback(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const initialState = {
    name: "",
    email: "",
    subject: "",
    msg: "",
  };
  const [feedbackData, setFeedbackData] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, msg } = feedbackData;
    if (name && email && subject && msg) {
      alert("Thank you for your Registration !");
      setFeedbackData(initialState);
      history.push("/home");
    }
  };
  return (
    <div>
      <Header
        color="transparent"
        brand="SHRI SUDHA"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "primary",
        }}
        {...rest}
      />
      <Parallax small filter image={bg}>
        {/* image="https://i.ytimg.com/vi/9dy3TA2UQTA/maxresdefault.jpg" */}
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <NavPills
              alignCenter
              color="primary"
              tabs={[
                {
                  tabIcon: Assignment,
                  tabButton: "Feedback",
                  tabContent: (
                    <>
                      <Card>
                        <CardContent>
                          <div
                            className={classes.section}
                            style={{ padding: "10px" }}
                          >
                            <GridContainer justify="center">
                              <GridItem cs={12} sm={12} md={8}>
                                <form onSubmit={handleSubmit}>
                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                      <TextField
                                        label="Your Name"
                                        color="secondary"
                                        fullWidth
                                        value={feedbackData?.name || ""}
                                        required
                                        margin="dense"
                                        onChange={(e) =>
                                          setFeedbackData({
                                            ...feedbackData,
                                            name: e.target.value,
                                          })
                                        }
                                      />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={12}>
                                      <TextField
                                        label="Email Address"
                                        color="secondary"
                                        fullWidth
                                        type="email"
                                        value={feedbackData?.email || ""}
                                        required
                                        margin="dense"
                                        onChange={(e) =>
                                          setFeedbackData({
                                            ...feedbackData,
                                            email: e.target.value,
                                          })
                                        }
                                      />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={12}>
                                      <TextField
                                        label="Subject"
                                        color="secondary"
                                        fullWidth
                                        value={feedbackData?.subject || ""}
                                        required
                                        margin="dense"
                                        onChange={(e) =>
                                          setFeedbackData({
                                            ...feedbackData,
                                            subject: e.target.value,
                                          })
                                        }
                                      />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={12}>
                                      <TextField
                                        label="Message"
                                        color="secondary"
                                        fullWidth
                                        value={feedbackData?.msg || ""}
                                        required
                                        margin="dense"
                                        onChange={(e) =>
                                          setFeedbackData({
                                            ...feedbackData,
                                            msg: e.target.value,
                                          })
                                        }
                                      />
                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={6}>
                                      <Button
                                        type="submit"
                                        color="primary"
                                        style={{ marginTop: "16px" }}
                                      >
                                        Send
                                      </Button>
                                    </GridItem>
                                  </GridContainer>
                                </form>
                              </GridItem>
                            </GridContainer>
                          </div>
                        </CardContent>
                      </Card>
                      <br />
                      <br />
                    </>
                  ),
                },
              ]}
            />
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}