import {atom} from 'recoil';
import {TUsers} from '../../../types/User.types';

export const users = atom<TUsers>({
  key: 'users',
  default: {
    users: [],
    total: 0,
    skip: 0,
    limit: 0,
  },
});
