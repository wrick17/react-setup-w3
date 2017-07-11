import React from 'react';
import { Link } from 'react-router';
import injectSheet from 'react-jss';
import JsonView from 'components/JsonView';

const styles = {
  heading: {
    fontWeight: 'bold',
    color: 'red'
  }
};

@injectSheet(styles) // do this, else the styles won't come... very important
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <Link to="/about" >about</Link>
        <h1 className={classes.heading}>You are on the home page</h1>
        <JsonView />
      </div>
    );
  }
}
