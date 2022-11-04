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
      getUsersCallback();
    }, []),
  );

  const onPressItem = (id: string) => {
    navigate('UserDetail', {id});
  };

  return {users, onPressItem};
};

export default useUsersListViewController;
