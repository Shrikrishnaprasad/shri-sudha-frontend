import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import bg from "../../assets/img/bg.jpg";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

const useStyles = makeStyles(styles);

export default function GalleryPage(props) {
  const classes = useStyles();

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  const { ...rest } = props;
  const data = [
    "https://alchetron.com/cdn/satyatma-tirtha-009be5f9-e095-4a77-9560-67d8a89b2bf-resize-750.jpeg",
    "https://i.pinimg.com/originals/b6/2c/be/b62cbe0a348b69084245f7dcf65a7d10.jpg",
    "https://anandsp1.files.wordpress.com/2015/07/um-swamiji.jpg",
    "https://www.salagram.net/Uttararadhi-Mutt-Chaturmasya2012-19.jpg",

    "https://i1.sndcdn.com/artworks-000129488824-n3speq-t500x500.jpg",
    "https://alchetron.com/cdn/satyatma-tirtha-1d61f7f7-6b76-4163-a7ec-eb7ee9ff4cf-resize-750.jpeg",

    "https://i1.sndcdn.com/artworks-000041327593-7av2vt-t500x500.jpg",
    "http://kalebala.files.wordpress.com/2013/08/995133_367010996735633_1770609406_n.jpg",

    "https://um-site.sgp1.cdn.digitaloceanspaces.com/parampara_images/41.jpg",
    "https://i.ytimg.com/vi/89T_696zLXg/mqdefault.jpg",
    "https://i.ytimg.com/vi/CzTn2pII2GI/hqdefault.jpg",
    "https://anandsp1.files.wordpress.com/2018/12/satyatma-theertharu.jpg?w=370&h=325",
  ];
  return (
    <div>
      <Header
        color="transparent"
        brand="SHRI SUDHA"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={bg} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <br />
        <h3 style={{ textAlign: "center", fontWeight: "500" }}>GALLERY</h3>
        <br />
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              {data.map((img, index) => (
                <GridItem key={index} xs={12} sm={12} md={4}>
                  <img alt="..." src={img} className={navImageClasses} />
                </GridItem>
              ))}
            </GridContainer>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
