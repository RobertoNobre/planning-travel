import React, { Fragment, PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { routes } from './utils/MenuUtil';

import AnonymousRoute from './commons/AnonymousRoute';
import ProtectedRoute from './commons/ProtectedRoute';

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          { 
            !!routes && routes.map(route => {
              if (route.type === 'protected') {
                return <ProtectedRoute key={route.path} mode={route.mode} exact={route.exact} path={route.path} component={route.component} />
              } else {
                return <AnonymousRoute key={route.path} mode={route.mode} exact={route.exact} path={route.path} component={route.component} />
              }
            }) 
          }
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
