import {useCallback} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {User} from '../../../../di/instantiate';
import {UsersStackParamList} from '../../../navigation/UsersStack';
import useUsersListViewModel from './ViewModel';

const useUsersListViewController = () => {
  const {updateUsers, users} = useUsersListViewModel();

  const {navigate} =
    useNavigation<
      NativeStackScreenProps<UsersStackParamList, 'UsersList'>['navigation']
    >();

  const getUsersCallback = async () => {
    const results = await User.getUsers.execute();
    results && updateUsers(results);
  };

  useFocusEffect(
    useCallback(() => {
      users.users.length < 1 && getUsersCallback();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [users.users.length]),
  );

  const onPressItem = (id: number) => {
    navigate('AddUser', {id});
  };

  const onPressAdd = () => {
    navigate('AddUser', {});
  };

  return {users, onPressItem, onPressAdd};
};

export default useUsersListViewController;
