import React from 'react';
import { View, Text } from 'react-native';

import Search from '../Search';

import styles from './Header.style';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PatikaStore</Text>
      <Search />
    </View>
  );
};

export default Header;
