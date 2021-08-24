import React from "react";
import friendsModules from "./friends.module.css"



const Friend = () => {

  return (

    <div className={friendsModules.sayhi}>Friends
      <div className={friendsModules.insideFriends}>
       <div className={friendsModules.numbers}>
         <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png"></img>
       </div>
       <div className={friendsModules.numbers}>
         <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png"></img>
       </div>
       <div className={friendsModules.numbers}>
         <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png"></img>
       </div>

      </div>
    </div>



  )
}

export default Friend;