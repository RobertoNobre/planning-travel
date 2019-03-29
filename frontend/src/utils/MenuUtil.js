import HomeContainer from '../home/HomeContainer';

import { logout } from './SecurityUtil';

export const onSelect = (key, history) => {
  switch (key) {
    case 1:
      history.push('/');
      break;
    default:
      break;
  }
} 


export const routes = [
  { type: 'protected', mode: "view", exact: true, path: "/", component: HomeContainer },
];