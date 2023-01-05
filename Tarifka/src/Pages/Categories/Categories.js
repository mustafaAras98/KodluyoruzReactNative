import React from 'react';
import {View, FlatList} from 'react-native';

import Config from 'react-native-config';
import useFetch from '../../Hooks/useFetch';

import Error from '../../Components/Error';
import Loading from '../../Components/Loading';
import CategoryCard from '../../Components/Cards/CategoryCard/CategoryCard';

const Categories = ({navigation}) => {
  const {data, loading, error} = useFetch(`${Config.API_URL}/categories.php`);

  const renderItem = ({item}) => {
    return (
      <CategoryCard
        title={item.strCategory}
        image={item.strCategoryThumb}
        onPress={() => handleSelection(item.strCategory)}
      />
    );
  };
  const handleSelection = categoryName => {
    navigation.navigate('Meals', {categoryName});
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View>
      <FlatList
        data={data.categories}
        renderItem={renderItem}
        keyExtractor={item => item.idCategory}
      />
    </View>
  );
};

export default Categories;
