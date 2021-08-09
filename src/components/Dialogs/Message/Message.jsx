import React from "react";
import dialogStyle from './../Dialog.module.css';

// выносим отдельную компоненту на сообщения которые внизу данного блока

const Messages = (props) => {

  return <div className={dialogStyle.message}>{props.message}</div>
}

export default Messages;