import {rerenderEntireTree} from "../render";

let state = {

  text : {
    id : 1,
    messageInside : "Ты думаешь ты самый умный чел на земле ? LOL"
  },

  profilePage : {
    postData : [
      {id: 1, message: "How are you ?", likesCount: 'like 23'},
      {id: 2, message: "It'/s my first post", likesCount: 'like 2'},
      {id: 3, message: "wow its work", likesCount: 'like 13'},

    ],
    newPostText : "My favorite",
    sidebar : {
     mess : "asdqweqwe sad qw eq weq e"
    }, // внести сюда картинки для лого

  },

 dialogsPage : {
    messagesData : [
      {id: 1, message: "How are you ?"},
      {id: 2, message: "It'"},
      {id: 3, message: "wow"},
      {id: 4, message: "wow"},
      {id: 5, message: "wow"},

    ],
    dialogsData : [
      {id: 1, name: "Sergodjan"},
      {id: 2, name: "Alex"},
      {id: 3, name: "Martin"},
      {id: 4, name: "Keer"},
      {id: 5, name: "Locky"},
    ],
  }

}

window.state = state;

export let addPost;

addPost = () => {

  let newPost = {
     id : 5,
     message : state.profilePage.newPostText ,
     likesCount : 0
  };
  state.profilePage.postData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state)
}

export let updateNewPostText = (newTetx) => {
  state.profilePage.newPostText = newTetx;
  rerenderEntireTree(state)
}

export default state;
