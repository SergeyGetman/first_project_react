import App from './App';
import React from 'react';
import store from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';



let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} addPost={store.addPost}
           updateNewPostText={store.updateNewPostText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree);


