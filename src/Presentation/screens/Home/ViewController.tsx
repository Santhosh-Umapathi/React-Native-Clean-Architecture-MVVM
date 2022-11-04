import TProps from './types';

const useHomeViewController = (navigation: TProps['navigation']) => {
  const onUsersPress = () => {
    navigation.navigate('UsersStack');
  };

  const onProductsPress = () => {
    navigation.navigate('ProductsStack');
  };

  return {onUsersPress, onProductsPress};
};

export default useHomeViewController;
