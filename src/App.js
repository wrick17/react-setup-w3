import React from 'react';
import routes from './routes';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return routes;
  }
}
