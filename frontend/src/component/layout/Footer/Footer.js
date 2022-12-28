import React from "react";
//import playStore from "../../../images/playstore.png";
//import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      {/*<div className="leftFooter">
        <h4>Descarga nuestra app</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>*/}

      <div className="midFooter">
        <h1>DS STORE</h1>
        <p>Productos novedosos a tu alcance</p>

        <p>Todos los derechos reservados 2022 &copy; Sir Malcom</p>
      </div>

      <div className="rightFooter">
        <h4>Siguennos</h4>
        <a href="https://www.instagram.com/ds_store.pe/">Instagram</a>
        <a href="https://www.facebook.com/DragonSilveryStore">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
