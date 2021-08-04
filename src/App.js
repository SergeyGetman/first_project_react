import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom";



const App = (props) => {

  return (


    <BrowserRouter>
      <div className="app-wrapper">

        <Header/>
        <Navbar/>


        <div class="app-wrapper-content">

          <Route path="/dialogs" render={() =>
            <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>

          <Route path="/profile" render={() => <Profile postData={props.postData}/>} />
          <Route path="/news" component={News}/>
          <Route path="/navbar" component={Navbar}/>


        </div>


      </div>

    </BrowserRouter>
  );


}
export default App;


