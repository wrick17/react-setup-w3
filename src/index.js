import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { routerReducer } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import RootSaga from 'sagas/root_saga';
import rootReducers from 'reducers/root_reducer';
import App from './App';
import { AppContainer } from 'react-hot-loader';

if (module.hot) module.hot.accept();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducers,
  applyMiddleware(sagaMiddleware)
);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers/root_reducer', () => {
    store.replaceReducer(reducers);
  });
}

sagaMiddleware.run(RootSaga);

// and react will render the whole stuff into the div with hot module stuff
ReactDOM.render(
  <Provider store={store}>
    <AppContainer>
      <App/>
    </AppContainer>
  </Provider>,
  document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    
    const NextApp = require('./App').default;
    ReactDOM.render(
      <Provider store={store}>
        <AppContainer>
          <NextApp/>
        </AppContainer>,
      </Provider>,
      document.getElementById('root')
    );

  });
}