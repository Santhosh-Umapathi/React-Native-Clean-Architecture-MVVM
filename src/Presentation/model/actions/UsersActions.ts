import {useRecoilState} from 'recoil';
import {TUsers} from '@type/User.types';
import {UsersState} from '../state';

export default () => {
  const [users, updateUsers] = useRecoilState(UsersState.users);

  const setUsers = (payload: TUsers) => {
    updateUsers(payload);
  };

  const state = {users};
  const actions = {setUsers};

  return {state, actions};
};
