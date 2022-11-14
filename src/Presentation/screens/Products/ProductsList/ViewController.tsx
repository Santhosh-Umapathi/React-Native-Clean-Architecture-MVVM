import {useCallback} from 'react';
import {getProducts} from 'src/domain/Products';
import {ProductsStackParamList} from 'src/Presentation/navigation/ProductsStack';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import useProductsListViewModel from './ViewModel';

const useProductsListViewController = () => {
  const {updateProducts, products, users} = useProductsListViewModel();

  const {navigate} =
    useNavigation<
      NativeStackScreenProps<ProductsStackParamList, 'AddProduct'>['navigation']
    >();

  const getProductsCallback = async () => {
    const {results} = await getProducts();
    results && updateProducts(results);
  };

  useFocusEffect(
    useCallback(() => {
      products.products.length < 1 && getProductsCallback();
    }, [products.products.length]),
  );

  const onPressItem = (id: string) => {
    navigate('AddProduct', {id});
  };

  const onPressAdd = () => {
    navigate('AddProduct', {});
  };

  return {products, onPressItem, onPressAdd, users};
};

export default useProductsListViewController;
