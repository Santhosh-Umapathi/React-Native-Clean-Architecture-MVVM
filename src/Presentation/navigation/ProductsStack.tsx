import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddProduct, ProductDetail, ProductsList} from '../screens/Products';

export type ProductsStackParamList = {
  ProductsList: undefined;
  ProductDetail: undefined;
  AddProduct: undefined;
};
const Stack = createNativeStackNavigator<ProductsStackParamList>();

const ProductsStack = () => {
  return (
    <Stack.Navigator initialRouteName="ProductsList">
      <Stack.Screen name="ProductsList" component={ProductsList} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="AddProduct" component={AddProduct} />
    </Stack.Navigator>
  );
};

export default ProductsStack;
