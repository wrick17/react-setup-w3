import React from 'react';
import { Link } from 'react-router-dom';

export default class Dummy extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/">home</Link>
        <h2>This is a dummy page</h2>
      </div>
    );
  }
}
