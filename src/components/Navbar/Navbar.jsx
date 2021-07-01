import React from "react";
 import classes from './Navbar.module.css';

// const classes = {
//     'nav' : 'Navbar_nav__2btIb',
//     'item' : 'Navbar_item__2ucE2'
// }
// console.log(classes)
//
// const classNewActive = `${classes.item} ${classes.active}`

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                Profile
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                Messages
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

