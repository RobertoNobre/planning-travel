import React, { Fragment, PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import { routes } from './utils/MenuUtil';
import AnonymousRoute from './commons/AnonymousRoute';
import ProtectedRoute from './commons/ProtectedRoute';

library.add(faSignOutAlt)
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
