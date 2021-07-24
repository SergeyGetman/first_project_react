import React from "react";
import profileModules from './MyPosts.module.css';
import Post from "./Posts/Post";


const MyPosts = () => {

  return (

    <div className="text">
      <b> <span className={profileModules.letter}> А</span>
        va <span className={profileModules.letter}> D</span>escription </b>
    </div>,

      <div>

        <h3><span className={profileModules.letter}>M</span>
          y <span className={profileModules.letter}>P</span>ictures </h3>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/270/464/small/fox.jpg"/>
      </div>,


      <div className={profileModules.item}>

        <div>
          <textarea name="textarea" id="" cols="90" rows="10"></textarea>
          <button>Add post</button>

        </div>

        <div>
          My Post
        </div>

        <Post message="How are you ?" like="like 0"/>
        <Post message="It'/s my first post" like="like 13"/>
        <Post message="wow its work" like="like 2"/>

      </div>


  )
}

export default MyPosts;