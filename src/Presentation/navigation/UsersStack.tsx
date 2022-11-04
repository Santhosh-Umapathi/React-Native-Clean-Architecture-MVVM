import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddUser, UserDetail, UsersList} from '../screens/Users';

export type UsersStackParamList = {
  UsersList: undefined;
  UserDetail: {id: string};
  AddUser: undefined;
};
const Stack = createNativeStackNavigator<UsersStackParamList>();

const UsersStack = () => {
  return (
    <Stack.Navigator initialRouteName="UsersList">
      <Stack.Screen name="UsersList" component={UsersList} />
      <Stack.Screen name="UserDetail" component={UserDetail} />
      <Stack.Screen name="AddUser" component={AddUser} />
    </Stack.Navigator>
  );
};

export default UsersStack;
