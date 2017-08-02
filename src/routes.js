import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { routerReducer } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import RootSaga from 'sagas/root_saga';
import reducers from 'reducers/root_reducer';
import Loadable from 'components/Loadable';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';

const Home = Loadable({loader: () => import('containers/Home')});
const About = Loadable({loader: () => import('containers/About')});
const Dummy = Loadable({loader: () => import('containers/Dummy')});

const routes = (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/dummy' component={Dummy} />
      </Switch>
    </BrowserRouter>
);

export default routes;
