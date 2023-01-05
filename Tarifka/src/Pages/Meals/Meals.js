import React from 'react';
import {View, FlatList} from 'react-native';

import Config from 'react-native-config';
import useFetch from '../../Hooks/useFetch';

import Error from '../../Components/Error';
import Loading from '../../Components/Loading';
import MealCard from '../../Components/Cards/MealCard';

const Meals = ({route, navigation}) => {
  const {categoryName} = route.params;

  const {data, loading, error} = useFetch(
    `${Config.API_URL}/filter.php?c=${categoryName}`,
  );

  const renderItem = ({item}) => {
    return (
      <MealCard
        title={item.strMeal}
        image={item.strMealThumb}
        onPress={() => handleSelection(item.idMeal)}
      />
    );
  };
  const handleSelection = mealID => {
    navigation.navigate('Detail', {mealID});
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
        data={data.meals}
        renderItem={renderItem}
        keyExtractor={item => item.idMeal}
      />
    </View>
  );
};

export default Meals;
