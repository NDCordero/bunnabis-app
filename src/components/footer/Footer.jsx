import React from "react";
import { BsInstagram } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 my-3 mt-4 border-top bottom-0">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-muted">&copy; 2024 Proyecto Bunnabis</span>
          <Link className="mb-3 mb-md-0" to="https://www.instagram.com/proyectobunnabis/" target="_blank">
            <BsInstagram className="text-black-50 ms-3" />
          </Link>
        </div>

        <div className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <Link to="https://github.com/NDCordero" target="_blank" className="text-decoration-none text-black-50">Desarrollado por NDCordero
          </Link>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
