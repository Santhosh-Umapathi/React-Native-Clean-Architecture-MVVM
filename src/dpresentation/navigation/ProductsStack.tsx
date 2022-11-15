import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddProduct, ProductsList} from '../screens/Products';
import {NavigationHeader} from '../screens/Products/ProductsList/NavigationHeader';

export type ProductsStackParamList = {
  ProductsList: undefined;
  AddProduct: {id?: string};
};
const Stack = createNativeStackNavigator<ProductsStackParamList>();

const ProductsStack = () => {
  return (
    <Stack.Navigator initialRouteName="ProductsList">
      <Stack.Screen
        name="ProductsList"
        component={ProductsList}
        options={{headerRight: NavigationHeader}}
      />
      <Stack.Screen name="AddProduct" component={AddProduct} />
    </Stack.Navigator>
  );
};

export default ProductsStack;
