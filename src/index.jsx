import React from 'react';
import { render } from 'react-dom';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import store from './store';
import App from './components/App';
import Settings from './components/Settings';
import Services from './components/Services';

const history = syncHistoryWithStore(browserHistory, store);

let reactElement = document.getElementById('app');
render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="settings" component={Settings} />
        <Route path="services" component={Services} />
      </Route>
    </Router>
  </Provider>,
  reactElement
);
