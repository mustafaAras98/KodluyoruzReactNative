import React from 'react';
import {Provider} from 'react-redux';

import Store from './redux/store';
import Router from './Router';

const Wrapper = () => {
  return (
    <Provider store={Store}>
      <Router />
    </Provider>
  );
};

export default Wrapper;
