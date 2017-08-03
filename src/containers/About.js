import React from 'react';
import {connect} from 'react-redux';
import ACTION from 'common/action_constants';
const appleImage = require('images/apple.jpg');
import { Link } from 'react-router-dom';

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
class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.block}>
        <Link to="/">home</Link>
        <h5>To to go to the dummy page click below</h5>
        <Link to="/dummy">dummy</Link>
        <h5>This is an apple below.... see. nice naa?</h5>
        {!this.props.about.load &&
        <div>Loading Apple.... Please Wait</div>
        }
        {this.props.about.load && 
          <div>
            <img className={classes.img} src={appleImage} />
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
    about: state.about
  };
};
export default connect(mapStateToProps)(About);
