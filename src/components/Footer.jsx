import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <section className="inside">
        <img src={Logo} alt="" />
        <span>
          Made with ❤ by <b>Mobinkaram.</b>
        </span>
      </section>
    </footer>
  );
};

export default Footer;
