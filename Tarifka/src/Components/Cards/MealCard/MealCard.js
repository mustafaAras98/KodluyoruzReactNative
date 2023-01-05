import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './MealCard.style';

const MealCard = ({title, image, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.Container}>
        <Image
          style={styles.Image}
          source={{
            uri: `${image}`,
          }}
        />
        <View style={styles.TitleContainer}>
          <Text style={styles.Title}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MealCard;
