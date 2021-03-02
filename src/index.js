import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import Firstpage from "./Firstpage";
import './index.css';
import {BrowserRouter} from 'react-router-dom';




ReactDOM.render(
  <BrowserRouter>
    <Firstpage />
  </BrowserRouter>,
  document.getElementById('root')
);


