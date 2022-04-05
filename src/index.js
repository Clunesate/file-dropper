import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FileDropper} from "./lib";
import {ReactComponent as ExcelSvg} from "./lib/images/microsoft-excel.svg";

ReactDOM.render(
  <React.StrictMode>
    <FileDropper acceptFiles={'image/jpeg'} fileIconComponent={<ExcelSvg/>}/>
  </React.StrictMode>,
  document.getElementById('root')
);
