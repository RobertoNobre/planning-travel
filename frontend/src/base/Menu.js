import React, { useState, useEffect } from 'react';
import { onSelect } from '../utils/MenuUtil';
import {Sidebar, SidebarHeader} from 'carbon-react/lib/components/sidebar';
import {MenuList, MenuListItem} from 'carbon-react/lib/components/menu-list';
import Link from 'carbon-react/lib/components/link';
import Portrait from 'carbon-react/lib/components/portrait';
import NavigationBar from 'carbon-react/lib/components/navigation-bar';
import Detail from 'carbon-react/lib/components/detail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { I18n } from 'react-i18nify';
import DecryptToken from './../commons/DecryptToken';

export default function MenuComponent({history}) {
  function onSelectClick(key){ onSelect(key, history); }
  const [user, setUser] = useState({ name: '', email: '', initials: '' });

  useEffect(() => {
    const { email, name } = DecryptToken();
    var initials = name.match(/\b\w/g) || [];
    setUser({email, name, initials: ((initials.shift() || '') + (initials.pop() || '')).toUpperCase()});
  }, []);

  return (
    <>
      <Sidebar open={ true } enableBackgroundUI={ true }
        position="left" size="extra-small" >
      <SidebarHeader>
        <Portrait size="extra-large" shape="circle" initials={user.initials} />
        <Detail footnote={user.email} > {user.name} </Detail>
      </SidebarHeader>
        <MenuList
                onSelect={onSelectClick}>
          <MenuListItem>
            <Link onClick={() => onSelectClick(1)}>Home</Link>
          </MenuListItem>
        </MenuList>
      </Sidebar>
      <NavigationBar as="secondary" >
        <Link onClick={() => onSelectClick(2)} style={{float: 'right', color: 'white'}}>
          <FontAwesomeIcon icon="sign-out-alt" style={{marginRight: '10px'}} /> 
          { I18n.t('buttons.quit') }
        </Link>
      </NavigationBar>
      {/* <Breadcrumbs {...this.props}/> */}
    </>
  );
}
