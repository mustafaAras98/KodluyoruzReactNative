import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import Header from './components/Header';
import Product from './components/Product';

import productList from './productList.json';

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Header />}
        data={productList}
        renderItem={({ item }) => <Product item={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
