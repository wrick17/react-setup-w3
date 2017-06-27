import React from 'react';
import routes from './routes';
import Helmet from 'react-helmet';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {routes}
      </div>
    );
  }
}
