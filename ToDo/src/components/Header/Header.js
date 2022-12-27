import React from 'react';
import {View, Text} from 'react-native';

import styles from './Header.styles';

const Header = ({toDoCounter}) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>To Do: {toDoCounter} </Text>
    </View>
  );
};

export default Header;
