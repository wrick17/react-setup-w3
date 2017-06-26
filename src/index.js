import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {

  render() {
    return (<div>MyComponent</div>);
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
