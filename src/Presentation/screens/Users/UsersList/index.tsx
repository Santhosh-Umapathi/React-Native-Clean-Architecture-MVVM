import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import TProps from './types';
import useUsersListViewController from './ViewController';

const UsersList = (props: TProps) => {
  const {users, onPressItem} = useUsersListViewController();
  return (
    <FlatList
      style={styles.container}
      data={users.users}
      keyExtractor={key => String(key.id)}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            onPress={() => onPressItem(String(item.id))}
            style={styles.userCard}
          >
            <Image
              source={{uri: item.image}}
              style={styles.image}
              resizeMode="contain"
            />
            <View style={styles.textContainer}>
              <Text style={styles.userText}>{item.firstName}</Text>
              <Text style={styles.userText}>{item.age}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default UsersList;
