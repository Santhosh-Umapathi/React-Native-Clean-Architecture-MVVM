import {atom} from 'recoil';
import {UsersEntity} from '../../../domain/entities';

export const users = atom<UsersEntity>({
  key: 'users',
  default: {
    users: [],
    total: 0,
    skip: 0,
    limit: 0,
  },
});
