import HomeContainer from '../home/HomeContainer';
import LoginContainer from '../auth/LoginContainer';
import TravelContainer from '../travel/TravelContainer';

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
    case 3:
      history.push('/travel');
      break;
    default:
      break;
  }
} 


export const routes = [
  { type: 'protected', mode: "view", exact: true, path: "/", component: HomeContainer },
  { type: 'anonymous', mode: "view", exact: true, path: "/auth/signin", component: LoginContainer },
  { type: 'protected', mode: "view", exact: true, path: "/travel", component: TravelContainer },
];