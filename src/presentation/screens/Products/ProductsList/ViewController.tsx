import {useCallback} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Product} from '../../../../di/instantiate';
import {ProductsStackParamList} from '../../../navigation/ProductsStack';
import useProductsListViewModel from './ViewModel';

const useProductsListViewController = () => {
  const {updateProducts, products, users} = useProductsListViewModel();

  const {navigate} =
    useNavigation<
      NativeStackScreenProps<ProductsStackParamList, 'AddProduct'>['navigation']
    >();

  const getProductsCallback = async () => {
    const results = await Product.getProducts.execute();
    results && updateProducts(results);
  };

  useFocusEffect(
    useCallback(() => {
      products.products.length < 1 && getProductsCallback();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products.products.length]),
  );

  const onPressItem = (id: number) => {
    navigate('AddProduct', {id});
  };

  const onPressAdd = () => {
    navigate('AddProduct', {});
  };

  return {products, onPressItem, onPressAdd, users};
};

export default useProductsListViewController;
