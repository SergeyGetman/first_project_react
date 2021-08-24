import React from "react";
import classes from './Navbar.module.css';
import {BrowserRouter, NavLink} from "react-router-dom";
import Friend from "../People/friends";
import state from "../../redux/state";



const Navbar = (props) => {

    return (
        <nav className={classes.nav}>

          {/*сюда создаём новый компонент friends*/}

            <div className={classes.item}>
               <NavLink to="/profile" activeClassName={classes.activeLink}> Profile </NavLink>
            </div>
            <div className={`${classes.item} ${classes.activeLink}`}>
              <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages </NavLink>

            </div>
            <div className={classes.item}>
              <NavLink to="/news" activeClassName={classes.activeLink}>News </NavLink>
            </div>
            <div className={classes.item}>
              <NavLink to="/navbar" activeClassName={classes.activeLink}>Dublicate </NavLink>
            </div>

          {/*<Friend state={props.state.profilePage.sidebar.pictures}/>*/}

          <Friend/>
        </nav>

    )
}

export default Navbar;









