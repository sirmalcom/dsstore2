import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="https://wa.me/51951931381">
        <Button>Contactanos para pedir informacion por whatsapp haciendo click aqui</Button>
      </a>
    </div>
  );
};

export default Contact;
