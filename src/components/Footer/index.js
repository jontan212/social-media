import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <div className="container flex">
        <section>
          <b className="letter-10">ALTERNATIVES</b>
          <div className="flex">
            <a href="#Buffer">Buffer</a>
            <a href="#Sendible">Sendible</a>
            <a href="#Later">Later</a>
            <a href="#Social">Social Pilot</a>
          </div>
        </section>
        <section>
          <b className="letter-10">SITEMAP</b>
          <div className="flex">
            <a href="#Top">Top</a>
            <a href="#Features">Features</a>
            <a href="#Reasons">Reasons</a>
            <a href="#Alternatives">Alternatives</a>
            <a href="#Login">Login</a>
          </div>
        </section>
        <section>
          <b className="letter-10">COMPANY</b>
          <div className="flex">
            <a href="#About">About Us</a>
            <a href="#Contact">Contact</a>
            <a href="#Privacy">Privacy Policy</a>
            <a href="#Terms">Terms of Service</a>
            <a href="#Help">Help</a>
          </div>
        </section>
        <section>
          <b className="letter-10">GET IN TOUCH</b>
          <div className="flex">
            <a href="#Twitter">Twitter</a>
            <a href="#Facebook">Facebook</a>
            <a href="#Dribbble">Dribbble</a>
          </div>
        </section>
      </div>
      <p className="container text-center weight-600 letter-10">COPYRIGHT © 2022 — DESIGN NAUVAL</p>
    </footer>
  );
};

export default Footer;
