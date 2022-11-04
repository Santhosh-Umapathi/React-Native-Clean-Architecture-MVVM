import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type RootStackParamList = {
  ProductsList: undefined;
  ProductDetail: undefined;
  AddProduct: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const ProductsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductsList" component={() => <></>} />
      <Stack.Screen name="ProductDetail" component={() => <></>} />
      <Stack.Screen name="AddProduct" component={() => <></>} />
    </Stack.Navigator>
  );
};

export default ProductsStack;
