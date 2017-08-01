import React from 'react';
import L from 'react-loadable';
import Loading from 'components/loading';

const Loadable = opts =>
  L({
    loading : Loading,
    ...opts,
    render(loaded, props) {
      let Component = loaded.default;
      return <Component {...props}/>;
    }
  });

export default Loadable;