import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Product.style';

const Product = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image style={styles.image} source={{ uri: item.imgURL }} />
      </View>
      <View style={styles.inner_container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.inStock}>{item.inStock ? '' : 'Stokta Yok'}</Text>
      </View>
    </View>
  );
};

export default Product;
