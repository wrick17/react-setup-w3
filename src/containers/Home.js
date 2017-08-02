import React from 'react';
import {connect} from 'react-redux';
import ACTION from 'common/action_constants';
import Loadable from 'components/Loadable';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';
// import JsonView from 'components/JsonView';

const styles = {
  heading: {
    fontWeight: 'bold',
    color: 'red'
  }
};

const JsonView = Loadable({loader: () => import('components/JsonView')});

@injectSheet(styles) // do this, else the styles won't come... very important
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <Link to="/about" >about</Link>
        <h1 className={classes.heading}>You are on the home page</h1>
        {this.props.home.load && <JsonView /> }
      </div>
    );
  }
  componentDidMount() {
    const {dispatch} = this.props;
    console.log('HOME 4=5');
    dispatch({type:ACTION.HOME.GETHOME});
  }
}
const mapStateToProps = (state) => {
  return {
    home: state.home
  };
};
export default connect(mapStateToProps)(Home);