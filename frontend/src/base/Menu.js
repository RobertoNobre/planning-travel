import React, { PureComponent, Fragment } from 'react';
import {
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { onSelect } from '../utils/MenuUtil';
import styled from 'styled-components';
import Breadcrumbs from './Breadcrumbs';
import jwt from 'jsonwebtoken';
import {Sidebar, SidebarHeader} from 'carbon-react/lib/components/sidebar';
import {MenuList, MenuListItem} from 'carbon-react/lib/components/menu-list';
import Link from 'carbon-react/lib/components/link';
import NavigationBar from 'carbon-react/lib/components/navigation-bar';

class MenuComponent extends PureComponent {
  onSelectClick = key => {onSelect(key, this.props.history)};

  render() {
    return (
      <Fragment>
        <Sidebar
          open={ true }
          enableBackgroundUI={ true }
          position="left"
          size="extra-small"
        >
        <SidebarHeader>
          Header Content
        </SidebarHeader>
          <MenuList
                  onSelect={this.onSelectClick}>
            <MenuListItem>
              <Link onClick={() => this.onSelectClick(1)}>Menu Item One</Link>
            </MenuListItem>
          </MenuList>
        </Sidebar>
        <NavigationBar
          as="secondary"
        >
</NavigationBar>
        {/* <Breadcrumbs {...this.props}/> */}
      </Fragment>
    );
  }
}

export default MenuComponent;
