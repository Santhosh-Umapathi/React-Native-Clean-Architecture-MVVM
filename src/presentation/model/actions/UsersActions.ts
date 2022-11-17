import {useRecoilState} from 'recoil';
import {UsersEntity} from '../../../domain/entities';
import {UsersState} from '../state';

export default () => {
  const [users, updateUsers] = useRecoilState(UsersState.users);

  const setUsers = (payload: UsersEntity) => {
    updateUsers(payload);
  };

  const state = {users};
  const actions = {setUsers};

  return {state, actions};
};
