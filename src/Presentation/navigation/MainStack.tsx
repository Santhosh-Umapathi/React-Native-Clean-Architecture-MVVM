import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens';
import ProductsStack from './ProductsStack';
import UsersStack from './UsersStack';

export type RootStackParamList = {
  Home: undefined;
  ProductsStack: undefined;
  UsersStack: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: true}}
      />
      <Stack.Screen name="ProductsStack" component={ProductsStack} />
      <Stack.Screen name="UsersStack" component={UsersStack} />
    </Stack.Navigator>
  );
};

export default MainStack;
