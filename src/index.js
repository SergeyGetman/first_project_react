
import './index.css';
import App from './App';

import state, {addPost} from "./redux/state"
import {rerenderEntireTree} from "./render";


rerenderEntireTree(state)



