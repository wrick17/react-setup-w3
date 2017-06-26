import React from 'react';
import injectSheet from 'react-jss'

const styles = {
  label: {
    fontWeight: 'bold',
    color: 'red'
  }
}

@injectSheet(styles)
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes, children} = this.props;
    return (
      <div>
        <label className={classes.label}>Hello Mama!!</label>
      </div>
    );
  }
}
