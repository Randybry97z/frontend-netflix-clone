import React, { useState, useEffect } from 'react'
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix logo" />
      <img
        className="nav__avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"
        alt="Avatar" />
    </div>
  )
}

export default Nav
