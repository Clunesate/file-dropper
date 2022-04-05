import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FileDropper} from "./lib";


ReactDOM.render(
  <React.StrictMode>
    <FileDropper/>
  </React.StrictMode>,
  document.getElementById('root')
);
