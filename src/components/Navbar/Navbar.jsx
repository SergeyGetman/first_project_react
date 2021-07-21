import React from "react";
 import classes from './Navbar.module.css';



const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
               <a href="/profile" > Profile </a>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
              <a href="/dialogs">Messages </a>
            </div>
            <div className={classes.item}>
                News
            </div>
            <div className={classes.item}>
                Music
            </div>


        </nav>

    )
}

export default Navbar;

