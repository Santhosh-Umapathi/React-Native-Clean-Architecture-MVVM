import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import TProps from './types';
import useProductsListViewController from './ViewController';

const ProductsList = (props: TProps) => {
  const {products, onPressItem, users} = useProductsListViewController();

  return (
    <FlatList
      style={styles.container}
      data={products.products}
      keyExtractor={key => String(key.id)}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            onPress={() => onPressItem(String(item.id))}
            style={styles.userCard}
          >
            <Image
              source={{
                uri:
                  item.images[0] ||
                  'https://images.hdqwalls.com/wallpapers/react-js-logo-no.jpg',
              }}
              style={styles.image}
              resizeMode="contain"
            />
            <View style={styles.textContainer}>
              <Text style={styles.userText}>{item.title}</Text>
              <Text style={styles.userText} numberOfLines={2}>
                {item.description}
              </Text>
              <Text style={styles.userText} numberOfLines={2}>
                User:{users[index]?.firstName}
              </Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default ProductsList;
