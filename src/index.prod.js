import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// this is to inject the app div to the dom
var el = document.createElement('div');
el.id = 'root';
document.body.insertBefore(el, document.body.childNodes[0]);

// and react will render the whole stuff into the div
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
