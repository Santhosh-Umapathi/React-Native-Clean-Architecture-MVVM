import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import editIcon from '../../../../../assets/pencil.png';
import saveIcon from '../../../../../assets/save-file.png';
import deleteIcon from '../../../../../assets/trash.png';
import styles from './styles';
import TProps from './types';
import useAddUserViewController from './ViewController';

const AddUser = (props: TProps) => {
  const {
    firstName,
    address,
    onChangeFirstName,
    onChangeAddress,
    saveHandler,
    editHandler,
    deleteHandler,
    imageUrl,
  } = useAddUserViewController();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: imageUrl
              ? imageUrl
              : 'https://images.hdqwalls.com/wallpapers/react-js-logo-no.jpg',
          }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <TextInput
        value={firstName}
        onChangeText={onChangeFirstName}
        style={styles.input}
        placeholder="first name"
        placeholderTextColor={'grey'}
      />

      <TextInput
        value={address}
        onChangeText={onChangeAddress}
        style={styles.input}
        placeholder="address"
        placeholderTextColor={'grey'}
      />

      {imageUrl ? (
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={editHandler}>
            <Image
              source={editIcon}
              style={styles.saveIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={deleteHandler}>
            <Image
              source={deleteIcon}
              style={styles.saveIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={saveHandler}>
            <Image
              source={saveIcon}
              style={styles.saveIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default AddUser;
