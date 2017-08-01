import React from 'react';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import Loadable from 'components/Loadable';

const Home = Loadable({loader: () => import('containers/Home')});
const About = Loadable({loader: () => import('containers/About')});
const Dummy = Loadable({loader: () => import('containers/Dummy')});

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/dummy' component={Dummy} />
    </Switch>
  </BrowserRouter>
);

export default routes;
