import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import editIcon from '../../../../../assets/pencil.png';
import saveIcon from '../../../../../assets/save-file.png';
import deleteIcon from '../../../../../assets/trash.png';
import styles from './styles';
import TProps from './types';
import useAddProductViewController from './ViewController';

const AddProduct = (props: TProps) => {
  const {
    title,
    description,
    onChangeTitle,
    onChangeDescription,
    saveHandler,
    editHandler,
    deleteHandler,
    imageUrl,
  } = useAddProductViewController({
    navigation: props.navigation,
    route: props.route,
  });

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
        value={title}
        onChangeText={onChangeTitle}
        style={styles.input}
        placeholder="first name"
        placeholderTextColor={'grey'}
      />

      <TextInput
        value={description}
        onChangeText={onChangeDescription}
        style={styles.input}
        placeholder="description"
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

          <TouchableOpacity onPress={deleteHandler} style={styles.deleteButton}>
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

export default AddProduct;
