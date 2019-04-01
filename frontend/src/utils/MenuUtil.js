import HomeContainer from '../home/HomeContainer';
import LoginContainer from '../auth/LoginContainer';

import { logout } from './SecurityUtil';

export const onSelect = (key, history) => {
  switch (key) {
    case 1:
      history.push('/');
      break;
    case 2:
      logout();
      history.push('/auth/signin');
      break;
    default:
      break;
  }
} 


export const routes = [
  { type: 'protected', mode: "view", exact: true, path: "/", component: HomeContainer },
  { type: 'anonymous', mode: "view", exact: true, path: "/auth/signin", component: LoginContainer },
];