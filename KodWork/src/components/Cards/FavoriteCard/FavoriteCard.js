import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './FavoriteCard.style';

const FavoriteCard = ({item, onPress}) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.NameText}>{item?.Name}</Text>
      <Text style={styles.CategoryText}>{item?.Category}</Text>
      <Text style={styles.LocationText}>{item?.Location}</Text>
      <Text style={styles.LevelText}>{item?.Level}</Text>
      <TouchableOpacity style={styles.RemoveButton} onPress={onPress}>
        <Text style={styles.ButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FavoriteCard;
