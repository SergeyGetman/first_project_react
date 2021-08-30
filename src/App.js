import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import Friend from "./components/People/friends";
import classes from "./components/Navbar/Navbar.module.css";
import {addPost} from "./redux/state";


const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">

        <Header/>
        <Navbar/>



        <div className="app-wrapper-content">



          <Route path="/navbar" render={() =>
            <Navbar state={props.state.text.messageInside}/>}/>



          <Route path="/dialogs" render={() =>
            <Dialogs state={props.state.dialogsPage}/>}/>

          <Route path="/profile" render={() =>
            <Profile profilePage={props.state.profilePage}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}/>} />



          <Route path="/news" component={News}/>
          {/*<Route path="/navbar" component={Navbar}/>*/}

          <Route path="/friends" render={() =>
            <Friend state={props.state.profilePage.sidebar.mess}/>}/>


        </div>


      </div>

    </BrowserRouter>
  );


}
export default App;


