import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type RootStackParamList = {
  UsersList: undefined;
  UserDetail: undefined;
  AddUser: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const UsersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UsersList" component={() => <></>} />
      <Stack.Screen name="UserDetail" component={() => <></>} />
      <Stack.Screen name="AddUser" component={() => <></>} />
    </Stack.Navigator>
  );
};

export default UsersStack;
