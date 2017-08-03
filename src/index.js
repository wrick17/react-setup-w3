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

let sagaTask = sagaMiddleware.run(function* () {
  yield RootSaga();
});

// and react will render the whole stuff into the div with hot module stuff
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App/>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
  
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('reducers/root_reducer', () => {
    store.replaceReducer(require('reducers/root_reducer'));
  });

  // Enable Webpack hot module replacement for sagas
  module.hot.accept('sagas/root_saga', () => {
    const getNewSagas = require('sagas/root_saga').default;
    sagaTask.cancel();
    sagaTask.done.then(() => {
      sagaTask = sagaMiddleware.run(function* () {
        yield getNewSagas();
      });
    });
  });

  // Enable Webpack hot module replacement for the app
  module.hot.accept('./App', () => {
    
    const NextApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      document.getElementById('root')
    );

  });
}