import {useCallback} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {getUsers} from '../../../../Domain/Users';
import {UsersStackParamList} from '../../../navigation/UsersStack';
import TProps from './types';
import useUsersListViewModel from './ViewModel';

const useUsersListViewController = () => {
  const {updateUsers, users} = useUsersListViewModel();

  const {navigate} =
    useNavigation<
      NativeStackScreenProps<UsersStackParamList, 'UsersList'>['navigation']
    >();

  const getUsersCallback = async () => {
    const {results} = await getUsers();
    results && updateUsers(results);
  };

  useFocusEffect(
    useCallback(() => {
      users.users.length < 1 && getUsersCallback();
    }, []),
  );

  const onPressItem = (id: string) => {
    navigate('AddUser', {id});
  };

  const onPressAdd = () => {
    navigate('AddUser', {});
  };

  return {users, onPressItem, onPressAdd};
};

export default useUsersListViewController;
