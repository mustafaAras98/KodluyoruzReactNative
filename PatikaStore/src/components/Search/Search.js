import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './Search.style';

const Search = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Search..."
        onChangeText={() => {}}
      />
    </View>
  );
};

export default Search;
