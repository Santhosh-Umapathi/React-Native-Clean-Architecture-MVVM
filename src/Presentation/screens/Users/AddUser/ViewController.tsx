import {useState} from 'react';
import jsonData from '../../../../Data/source/Users/json/user.json';
import {addUser, deleteUser, updateUser} from '../../../../Domain/Users';
import TProps from './types';
import useAddUserViewModel from './ViewModel';

const useAddUserViewController = ({navigation, route}) => {
  const {addUserHandler, users, deleteUserHandler, editUserHandler} =
    useAddUserViewModel();

  // const {navigation, route} =
  //   useNavigation<NativeStackScreenProps<UsersStackParamList, 'AddUser'>>();

  const id = route?.params?.id;
  const user = users.users.find(i => String(i.id) === id);

  const [firstName, setFirstName] = useState(user?.firstName || '');
  const [address, setAddress] = useState(user?.domain || '');

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

    navigation.goBack();
  };

  const editHandler = async () => {
    const {results} = await updateUser(String(user?.id), {
      ...jsonData,
      id: String(user?.id),
      firstName,
      domain: address,
      image: 'https://images.hdqwalls.com/wallpapers/react-js-logo-no.jpg',
    });
    results && editUserHandler(results);

    navigation.goBack();
  };

  const deleteHandler = async () => {
    const {results} = await deleteUser(String(user?.id));
    results && deleteUserHandler(results);

    navigation.goBack();
  };

  return {
    firstName,
    address,
    onChangeFirstName,
    onChangeAddress,
    saveHandler,
    imageUrl: user?.image,
    editHandler,
    deleteHandler,
  };
};

export default useAddUserViewController;
