import React from "react";
import profileModules from './MyPosts.module.css';
import Post from "./Posts/Post";


const MyPosts = (props) => {


  let dialogsElementPost = props.postData.map(elem => <Post message={elem.message}
                                                            like={elem.likesCount}/>);

  let newPostElement = React.createRef();
  let addPost = () => {

    props.addPost()
  }

  let onPostCahge = () => {
    let onlyTetx = newPostElement.current.value
    props.updateNewPostText(onlyTetx)

  }

  return (

    <div className="text">
      <b> <span className={profileModules.letter}> А</span>
        va <span className={profileModules.letter}> D</span>escription </b>
    </div>,

      <div>

        <h3><span className={profileModules.letter}>M</span>
          y <span className={profileModules.letter}>P</span>ictures </h3>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/000/270/464/small/fox.jpg"/>
      </div>,


      <div className={profileModules.item}>

        <div>
          <textarea onChange={onPostCahge} ref={newPostElement} rows="10" cols="100"
                    value={props.newPostText}/>
          <button onClick={addPost}>Add post</button>

        </div>

        <div>
          My Post
        </div>

        {dialogsElementPost}

      </div>
  )
}
export default MyPosts;