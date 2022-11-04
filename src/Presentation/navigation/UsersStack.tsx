import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddUser, UserDetail, UsersList} from '../screens/Users';
import {NavigationHeader} from '../screens/Users/UsersList/NavigationHeader';

export type UsersStackParamList = {
  UsersList: undefined;
  UserDetail: {id?: string};
  AddUser: {id?: string};
};
const Stack = createNativeStackNavigator<UsersStackParamList>();

const UsersStack = () => {
  return (
    <Stack.Navigator initialRouteName="UsersList">
      <Stack.Screen
        name="UsersList"
        component={UsersList}
        options={{headerRight: NavigationHeader}}
      />
      <Stack.Screen name="UserDetail" component={UserDetail} />
      <Stack.Screen name="AddUser" component={AddUser} />
    </Stack.Navigator>
  );
};

export default UsersStack;
