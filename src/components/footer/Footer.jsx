import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 my-3 border-top bottom-0">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            {}
          </a>
          <span className="mb-3 mb-md-0 text-muted">&copy; 2024 Proyecto Bunnabis</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a href="https://www.facebook.com/bunnabis" target="_blank">
              <BsFacebook className="text-black-50"/>
            </a>
          </li>
          <li className="ms-3">
            <a href="https://www.instagram.com/proyectobunnabis/" target="_blank">
              <BsInstagram className="text-black-50" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
