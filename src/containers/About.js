import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import ACTION from 'common/action_constants';
const appleImage = require('images/apple.jpg');

import injectSheet from 'react-jss';

const styles = {
  block: {
    color: 'blue'
  }
};

@injectSheet(styles) // do this, else the styles won't come... very important
class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.block}>
        <Link to="/">home</Link>
        <h5>This is an apple below.... see. nice naa?</h5>
        {!this.props.about.load &&
        <div>Loading Apple... Please Wait</div>
        }
        {this.props.about.load && 
          <div>
            <img src={appleImage} />
          </div>
        }
      </div>
    );
  }
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({type:ACTION.ABOUT.GETABOUT});
  }
}
const mapStateToProps = (state) => {
  return {
    about: state.app.about
  };
};
export default connect(mapStateToProps)(About);
