import {TUser, TUsers} from '@type/User.types';
import {actions as Actions} from '../../../model';

const useAddUserViewModel = () => {
  const {state, actions} = Actions.UsersActions();
  // console.log('🔥 --- useAddUserViewModel --- state', state.users.users);

  const updateUsers = (payload: TUsers) => {
    actions.setUsers(payload);
  };

  const addUserHandler = (payload: TUser) => {
    actions.setUsers({...state.users, users: [payload, ...state.users.users]});
  };

  const editUserHandler = (payload: TUser) => {
    const oldState = [...state.users.users];
    const index = oldState.findIndex(i => i.id === +payload.id);
    oldState[index] = payload;

    actions.setUsers({...state.users, users: oldState});
  };

  const deleteUserHandler = (payload: TUser) => {
    const oldState = [...state.users.users];
    const index = oldState.findIndex(i => i.id === payload.id);
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
