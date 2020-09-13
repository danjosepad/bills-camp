import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Project imports

import HomePage from './pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/"component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;