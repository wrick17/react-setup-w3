import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader'

if (module.hot) module.hot.accept();

// this is to inject the app div to the dom
var el = document.createElement('div');
el.id = 'root';
document.body.insertBefore(el, document.body.childNodes[0]);

// and react will render the whole stuff into the div
ReactDOM.render(
  <AppContainer>
    <App/>
  </AppContainer>,
  document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
