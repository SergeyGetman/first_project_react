import React from "react";
import profileModules from './Post.module.css';


const Post = (props) => {

  return (

    <div className={profileModules.item}>
      <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"/>
      <button>{props.like} </button>
      {props.message}
      <br/>
      <span> {props.like}</span>
    </div>

  )
}
export default Post;