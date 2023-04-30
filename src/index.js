import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/card';
import {robot_list} from './components/robots';
import Cardlist from './components/cardlist';

ReactDOM.render(

  <div>
    <Cardlist robots={robot_list}/>
  </div>,
  document.getElementById("root")

)