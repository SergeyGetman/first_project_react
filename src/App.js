import React from "react";
import './App.css';
import Content from "./Content";



const App = () =>  {

  return (
      <div className="app-wrapper">
        <header className="header">

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/647px-Apple_logo_black.svg.png"/>
            <b> Apple</b>
        </header>
          <nav className="nav">
              <div>
                  Profile
              </div>
              <div>
                  Messages
              </div>
              <div>
                  News
              </div>
              <div>
                 Music
              </div>


          </nav>
              <div className="content">
                  <img src="https://klike.net/uploads/posts/2020-01/1578662816_1.jpg" height="200px" width="400px" />

                  Main Content

                  <div>
                      <b>  <span class="letter"> А</span> va <span className="letter"> D</span>escription </b>
                  </div>

                  <div>
                      <h3><span class="letter">M</span> y Pictures </h3>
                      <img src="https://static.vecteezy.com/system/resources/thumbnails/000/270/464/small/fox.jpg"/>
                  </div>


                  <Content/>

                  <div class="post">
                      <div>post one </div>
                      <div>post two</div>
                      <div>post three</div>
                      <div>post four</div>
                  </div>


              </div>

              </div>


  );


}
export default App;
