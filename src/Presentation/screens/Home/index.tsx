import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import TProps from './types';
import useHomeViewController from './ViewController';

const Home: FC<TProps> = ({}) => {
  const {onProductsPress, onUsersPress} = useHomeViewController();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onUsersPress}>
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>Users</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onProductsPress}>
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>Products</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
