import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
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
    app: reducers
  }),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(RootSaga);
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
// import Loadable from 'components/Loadable';

// const Home = Loadable({loader: () => import('containers/Home')});
// const About = Loadable({loader: () => import('containers/About')});
// const Dummy = Loadable({loader: () => import('containers/Dummy')});

const routes = (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        {/*<Route exact path='/dummy' component={Dummy} />*/}
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default routes;
