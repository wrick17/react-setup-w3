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
        <Helmet>
          <meta name="viewport" content="width=device-width" />
          <title>Welcome</title>
        </Helmet>
        {routes}
      </div>
    );
  }
}
