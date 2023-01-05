import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './DetailCard.style';

const DetailCard = ({details, onPress}) => {
  return (
    <View style={styles.Container}>
      <Image
        style={styles.Image}
        source={{
          uri: `${details.strMealThumb}`,
        }}
      />
      <View style={styles.TextContainer}>
        <Text style={styles.Title}>{details.strMeal}</Text>
        <Text style={styles.NormalText}>
          <Text style={styles.BoldText}>Area: </Text>
          {details.strArea}
        </Text>
        <Text style={styles.NormalText}>
          <Text style={styles.BoldText}>Category: </Text>
          {details.strCategory}
        </Text>
        <Text style={styles.BoldText}>Instructions: </Text>
        <Text style={styles.NormalText}>{details.strInstructions}</Text>
        <TouchableOpacity style={styles.Button} onPress={onPress}>
          <Text style={styles.NormalText}>Watch On Youtube!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailCard;
