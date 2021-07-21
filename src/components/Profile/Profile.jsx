import React from "react";
import profileModules from './Profile.module.css';
import Content from "../../Content";
import MyPosts from "./MyPosts/MyPosts";



const Profile = (props) => {

  return (
    <div className={profileModules.content}>

      <img src="https://klike.net/uploads/posts/2020-01/1578662816_1.jpg" height="200px" width="400px"/>

      <p>Main Content</p>

      <div className="text">
        <b> <span className={profileModules.letter}> А</span>
          va <span className={profileModules.letter}> D</span>escription </b>
      </div>

      <div>

        <h3><span className={profileModules.letter}>M</span>
          y <span className={profileModules.letter}>P</span> ictures </h3>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/270/464/small/fox.jpg"/>
      </div>

      <Content/>

      <MyPosts/>


    </div>
  )
}

export default Profile;