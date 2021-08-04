import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const postData = [
  {id: 1, message: "How are you ?", likesCount: 'like 23'},
  {id: 2, message: "It'/s my first post", likesCount: 'like 2'},
  {id: 3, message: "wow its work", likesCount: 'like 13'},

]

const dialogsData = [
  {id: 1, name: "Sergodjan"},
  {id: 2, name: "Alex"},
  {id: 3, name: "Martin"},
  {id: 4, name: "Keer"},
  {id: 5, name: "Locky"},
];

const messagesData = [
  {id: 1, message: "How are you ?"},
  {id: 2, message: "It'"},
  {id: 3, message: "wow"},
  {id: 4, message: "wow"},
  {id: 5, message: "wow"},

]

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')

);


