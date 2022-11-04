import {useState} from 'react';
import {UsersStackParamList} from 'src/Presentation/navigation/UsersStack';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import jsonData from '../../../../Data/source/Users/json/user.json';
import {addUser} from '../../../../Domain/Users';
import TProps from './types';
import useAddUserViewModel from './ViewModel';

const useAddUserViewController = () => {
  const {addUserHandler} = useAddUserViewModel();

  const {goBack} =
    useNavigation<
      NativeStackScreenProps<UsersStackParamList, 'UsersList'>['navigation']
    >();

  const [firstName, setFirstName] = useState('');
  const [address, setAddress] = useState('');

  const onChangeFirstName = (text: string) => {
    setFirstName(text);
  };

  const onChangeAddress = (text: string) => {
    setAddress(text);
  };

  const saveHandler = async () => {
    const {results} = await addUser({
      ...jsonData,
      firstName,
      domain: address,
      image: 'https://images.hdqwalls.com/wallpapers/react-js-logo-no.jpg',
    });
    results && addUserHandler(results);

    goBack();
  };

  const editHandler = () => {
    console.log('edit');
  };

  const deleteHandler = () => {
    console.log('delete');
  };

  const imageUrl = undefined;

  //   const {updateUsers, users} = useUsersListViewModel();
  //
  //   const getUsersCallback = async () => {
  //     const {results} = await getUsers();
  //     results && updateUsers(results);
  //   };
  //   useFocusEffect(
  //     useCallback(() => {
  //       getUsersCallback();
  //     }, []),
  //   );
  //   const onPressItem = (id: string) => {
  //     navigate('UserDetail', {id});
  //   };
  //   const onPressAdd = () => {
  //     navigate('AddUser');
  //   };

  return {
    firstName,
    address,
    onChangeFirstName,
    onChangeAddress,
    saveHandler,
    imageUrl,
    editHandler,
    deleteHandler,
  };
};

export default useAddUserViewController;
