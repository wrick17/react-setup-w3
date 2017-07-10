import React from 'react';
import routes from './routes';
import Helmet from 'react-helmet';
import sheet from './fonts';
import injectSheet from 'react-jss';

@injectSheet(sheet) // do this, else the styles won't come... very important
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return routes;
  }
}
