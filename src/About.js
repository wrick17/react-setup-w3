import React from 'react';
const appleImage = require('../assets/apple.jpg');
import { Link } from 'react-router';

import injectSheet from 'react-jss';

const styles = {
  block: {
    color: 'blue'
  }
}

@injectSheet(styles) // do this, else the styles won't come... very important
export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.block}>
        This is an apple below.... see. nice naa?
        <div>
          <img src={appleImage} />
        </div>
        <Link to="/">home</Link>
      </div>
    );
  }
}
