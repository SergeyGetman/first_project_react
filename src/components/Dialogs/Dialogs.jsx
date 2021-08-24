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


  let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
  let messageElement = props.state.messagesData.map(messageOfArray => <Messages message={messageOfArray.message}/>)


  // выносим все имена и id на верх через props
  return (

    <div className={dialogStyle.dialogs}>


      <div className={dialogStyle.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={dialogStyle.messages}>
        {messageElement}
      </div>
      <div className={dialogStyle.text}>
        <textarea  rows="10" cols="30"> asd</textarea>
        <button id="butone"> push me</button>
      </div>

    </div>


  )
};

export default Dialogs;














