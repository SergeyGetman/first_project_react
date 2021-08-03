import React from "react";
import dialogStyle from './Dialog.module.css';
import {NavLink} from "react-router-dom"

import Post from "../Profile/MyPosts/Posts/Post";


//компонента на вынос функции
const DialogItem = (props) => {
  let path = "/dialogs/" + props.id; // записываем путь в переменную
  return <div className={dialogStyle.dialogs + " " + dialogStyle.active}>
    <NavLink to={path}> {props.name} </NavLink>
  </div>

}

// выносим отдельную компоненту на сообщения которые внизу данного блока

const Messages = (props) => {

  return <div className={dialogStyle.message}>{props.message}</div>

}


const Dialogs = (props) => {

  const dialogsData = [
    {id: 1, name: "Sergodjan"},
    {id: 2, name: "Alex"},
    {id: 3, name: "Martin"},
    {id: 4, name: "Keer"},
    {id: 5, name: "Locky"},
  ];

  const messagesData = [
    {id: 1, message: "How are you ?"},
    {id: 2, message: "It'"},
    {id: 3, message: "wow"},
    {id: 4, message: "wow"},
    {id: 5, message: "wow"},

  ]

  let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
  let messageElement = messagesData.map(messageOfArray => <Messages message={messageOfArray.message}/>)


  // выносим все имена и id на верх через props
  return (

    <div className={dialogStyle.dialogs}>

      <div className={dialogStyle.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={dialogStyle.messages}>
        {messageElement}
      </div>

    </div>


  )
};

export default Dialogs;














