
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// eslint-disable-next-line no-unused-vars
import I18nt from './i18n/I18n';
import { Provider } from 'react-redux';
import Store from './store';
import 'carbon-react/lib/utils/css';

ReactDOM.render(
  <Provider store={Store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
