import React from "react";
import "./aboutSection.css";
import { Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">Sobre Nosotros</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dil4zkjpi/image/upload/v1669324237/avatars/mzro2qd6h6o2rhudbuqz.jpg"
              alt="Founder"
            />
            <Typography>DS STORE</Typography>
           <br/>
            <span>
              Somos una empresa que se dedica a la venta de productos novedosos
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Visitennos</Typography>
            <a
              href="https://www.facebook.com/DragonSilveryStore"
              target="blank"
            >
              <FacebookIcon className="facebookSvgIcon" color="primary" />
            </a>

            <a href="https://www.instagram.com/ds_store.pe/" target="blank">
              <InstagramIcon className="instagramSvgIcon" color="third" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
