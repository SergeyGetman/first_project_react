import React from "react";
import friendsModules from "./friends.module.css"



const Friend = () => {
  return (
    <div className={friendsModules.sayhi}>Friends
      <div className={friendsModules.avatar}>ava 1</div>
      <div className={friendsModules.avatar}>ava 2</div>
      <div className={friendsModules.avatar}>ava 3</div>
      <div className={friendsModules.avatar}>ava 4</div>
    </div>

  )
}

export default Friend;