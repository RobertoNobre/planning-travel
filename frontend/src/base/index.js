import React, { PureComponent, Fragment } from 'react';

import MenuComponent from './Menu';

class Index extends PureComponent {
  render() {
    return (
      <Fragment>
        <MenuComponent {...this.props} />
        <div style={{paddingLeft: '250px', paddingTop: '10px'}}>{this.props.children}</div>
      </Fragment>
    );
  }
}

export default Index;

