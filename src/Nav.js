import React from 'react'
import './Nav.css';

function Nav() {
  return (
    <div className="nav">
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
