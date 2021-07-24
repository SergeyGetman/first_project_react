import React from "react";
import classes from './Header.module.css';

const Header = () => {
  return (<header className={classes.header}>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/647px-Apple_logo_black.svg.png"/>
      <b> Social</b>
      <b> Network</b>

    </header>
  )
}

export default Header;