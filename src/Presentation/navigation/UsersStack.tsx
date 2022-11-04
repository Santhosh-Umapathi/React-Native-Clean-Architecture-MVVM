import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddUser, UserDetail, UsersList} from '../screens/Users';

type RootStackParamList = {
  UsersList: undefined;
  UserDetail: undefined;
  AddUser: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

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
