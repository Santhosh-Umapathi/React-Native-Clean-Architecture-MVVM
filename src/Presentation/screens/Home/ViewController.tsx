const useHomeViewController = () => {
  const onUsersPress = () => {
    console.log('users pressed');
  };

  const onProductsPress = () => {
    console.log('products pressed');
  };

  return {onUsersPress, onProductsPress};
};

export default useHomeViewController;
