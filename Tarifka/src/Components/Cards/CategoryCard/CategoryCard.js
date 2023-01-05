import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './CategoryCard.style';

const CategoryCard = ({title, image, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.Container}>
        <Image
          style={styles.Image}
          source={{
            uri: `${image}`,
          }}
        />
        <Text style={styles.Title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
