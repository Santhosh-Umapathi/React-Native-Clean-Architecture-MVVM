import {TUsers} from 'src/dtypes/User.types';
import {actions as Actions} from '../../../model';

const useUsersListViewModel = () => {
  const {state, actions} = Actions.UsersActions();

  const updateUsers = (payload: TUsers) => {
    actions.setUsers(payload);
  };

  return {users: state.users, updateUsers};
};

export default useUsersListViewModel;
