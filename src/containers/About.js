import React from 'react';
const appleImage = require('images/apple.jpg');
import { Link } from 'react-router';

import injectSheet from 'react-jss';

const styles = {
  block: {
    color: 'blue'
  },
  img: {
    width: '100%'
  }
};

@injectSheet(styles) // do this, else the styles won't come... very important
export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.block}>
        <Link to="/">home</Link>
        <h5>This is an apple below.... see. nice naa?</h5>
        <div>
          <img className={classes.img} src={appleImage} />
        </div>
      </div>
    );
  }
}
