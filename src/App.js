import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom";
import Friend from "./components/People/friends";


const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">

        <Header/>
        <Navbar/>



        <div class="app-wrapper-content">

          <Route path="/dialogs" render={() =>
            <Dialogs state={props.state.dialogsPage}/>}/>

          <Route path="/profile" render={() =>
            <Profile state={props.state.profilePage}/>} />



          <Route path="/news" component={News}/>
          <Route path="/navbar" component={Navbar}/>

          {/*<Route path="/friends" render={() =>*/}
          {/*  <Friend state={props.state.profilePage.sidebar.pictures}/>}/>*/}


        </div>


      </div>

    </BrowserRouter>
  );


}
export default App;


