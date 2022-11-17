import {useState} from 'react';
import {User} from '../../../../di/instantiate';
import jsonData from '../../../../mock/user.json';
import TProps from './types';
import useAddUserViewModel from './ViewModel';

const useAddUserViewController = ({navigation, route}: TProps) => {
  const {addUserHandler, users, deleteUserHandler, editUserHandler} =
    useAddUserViewModel();

  const id = route?.params?.id;
  const user = users.users.find(i => i.id === id);

  if (user) {
    navigation.setOptions({title: 'Edit User'});
  }

  const [firstName, setFirstName] = useState(user?.firstName || '');
  const [address, setAddress] = useState(user?.domain || '');

  const onChangeFirstName = (text: string) => {
    setFirstName(text);
  };

  const onChangeAddress = (text: string) => {
    setAddress(text);
  };

  const saveHandler = async () => {
    const results = await User.addUser.execute({
      ...jsonData,
      firstName,
      domain: address,
      image: 'https://images.hdqwalls.com/wallpapers/react-js-logo-no.jpg',
    });
    results && addUserHandler(results);

    navigation.goBack();
  };

  const editHandler = async () => {
    const results = await User.updateUser.execute(user!.id, {
      ...jsonData,
      id: user!.id,
      firstName,
      domain: address,
      image: 'https://images.hdqwalls.com/wallpapers/react-js-logo-no.jpg',
    });
    results && editUserHandler(results);

    navigation.goBack();
  };

  const deleteHandler = async () => {
    const results = await User.deleteUser.execute(user!.id);
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
