import {TUser, TUsers} from '@type/User.types';
import {actions as Actions} from '../../../model';

const useAddUserViewModel = () => {
  const {state, actions} = Actions.UsersActions();

  const updateUsers = (payload: TUsers) => {
    actions.setUsers(payload);
  };

  const addUserHandler = (payload: TUser) => {
    actions.setUsers({...state.users, users: [payload, ...state.users.users]});
  };

  return {users: state.users, updateUsers, addUserHandler};
};

export default useAddUserViewModel;
