import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './CountButton.style';

const CountButton = ({text, onPress, isDisabled}) => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={[styles.Button, {opacity: isDisabled ? 0.5 : 1}]}
        onPress={onPress}
        disabled={isDisabled}
        activeOpacity={isDisabled ? 0.6 : 1}>
        <Text style={styles.ButtonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CountButton;
