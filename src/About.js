import React from 'react';
const appleImage = require('../assets/apple.jpg');
import { Link } from 'react-router';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        This is an apple below.... see. nice naa?
        <div>
          <img src={appleImage} />
        </div>
        <Link to="/">home</Link>
      </div>
    );
  }
}
