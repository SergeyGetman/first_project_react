import App from './App';
import React from 'react';
import state from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import {addPost, subscribe, updateNewPostText} from "./redux/state"


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderEntireTree(state)
subscribe(rerenderEntireTree);


