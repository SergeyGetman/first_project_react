import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";

import {BrowserRouter, Route} from "react-router-dom";

import dialogStyle from "./components/Dialogs/Dialog.module.css";

const App = () => {
  return (

    <BrowserRouter>
      <div className="app-wrapper">

        <Header/>
        <Navbar/>


        <div class="app-wrapper-content">

          <Route path="/dialogs" component={Dialogs}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/news" component={News} />
          <Route path="/navbar" component={Navbar}/>

        </div>


      </div>

    </BrowserRouter>
  );


}
export default App;


