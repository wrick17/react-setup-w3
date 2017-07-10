import React from 'react';
import { Link } from 'react-router';
import injectSheet from 'react-jss';

const styles = {
  heading: {
    fontWeight: 'bold',
    color: 'red'
  }
}

@injectSheet(styles) // do this, else the styles won't come... very important
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <h1 className={classes.heading}>You are on the home page</h1>
        <Link to="/about" >about</Link>
      </div>
    );
  }
}
