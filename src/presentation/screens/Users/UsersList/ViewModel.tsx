import {UsersEntity} from '../../../../domain/entities/user/UsersEntity';
import {actions as Actions} from '../../../model';

const useUsersListViewModel = () => {
  const {state, actions} = Actions.UsersActions();

  const updateUsers = (payload: UsersEntity) => {
    actions.setUsers(payload);
  };

  return {users: state.users, updateUsers};
};

export default useUsersListViewModel;
