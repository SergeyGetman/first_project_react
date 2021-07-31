import React from "react";
import profileModules from './Profile.module.css';
import Content from "../../Content";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo"



const Profile = (props) => {

  return (
    <div className={profileModules.content}>

      <ProfileInfo />
      <Content/>
      <MyPosts/>


    </div>
  )
}

export default Profile;