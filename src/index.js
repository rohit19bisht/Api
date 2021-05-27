import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Imdb from './Imdb';
import ImdbApi from './ImdbApi'
import StataHandle from './StataHandle'
import CovidApi from './CovidApi'
import CrudCrudApi from './CrudCrudApi'


ReactDOM.render(
    // <Imdb />,
    // <StataHandle />,
    // <ImdbApi/>,
    // <CovidApi />,
    <CrudCrudApi />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
