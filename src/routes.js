import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route } from 'react-router';
import { routerReducer } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import Home from 'containers/Home';
import About from 'containers/About';
import RootSaga from 'sagas/root_saga';
import reducers from 'reducers/root_reducer';

const sagaMiddleware = createSagaMiddleware();

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    app: reducers,
    routing: routerReducer
  }),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(RootSaga);

const routes = (
  <Provider store = {store}>
    <Router history={browserHistory} >
      <Route path='/' component={Home} />
      <Route path='/about' component={About} />
    </Router>
  </Provider>
);

export default routes;
