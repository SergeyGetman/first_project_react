import React from "react";
import dialogStyle from './../Dialog.module.css';
import {NavLink} from "react-router-dom"



//компонента на вынос функции
const DialogItem = (props) => {
  let path = "/dialogs/" + props.id; // записываем путь в переменную
  return <div className={dialogStyle.dialogs + " " + dialogStyle.active}>
    <NavLink to={path}> {props.name} </NavLink>
  </div>

}

export default DialogItem;





