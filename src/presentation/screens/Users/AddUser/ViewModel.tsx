import {UserEntity, UsersEntity} from '../../../../domain/entities/user';
import {actions as Actions} from '../../../model';

const useAddUserViewModel = () => {
  const {state, actions} = Actions.UsersActions();

  const updateUsers = (payload: UsersEntity) => {
    actions.setUsers(payload);
  };

  const addUserHandler = (payload: UserEntity) => {
    actions.setUsers({...state.users, users: [payload, ...state.users.users]});
  };

  const editUserHandler = (payload: UserEntity) => {
    const oldState = [...state.users.users];
    const index = oldState.findIndex(i => payload.id && i.id === +payload.id);
    oldState[index] = payload;

    actions.setUsers({...state.users, users: oldState});
  };

  const deleteUserHandler = (payload: UserEntity) => {
    const oldState = [...state.users.users];
    const index = oldState.findIndex(i => payload.id && i.id === payload.id);
    oldState.splice(index, 1);

    actions.setUsers({...state.users, users: oldState});
  };

  return {
    users: state.users,
    updateUsers,
    addUserHandler,
    editUserHandler,
    deleteUserHandler,
  };
};

export default useAddUserViewModel;
