import React from 'react';
import {View, FlatList, Linking, Alert} from 'react-native';

import Config from 'react-native-config';
import useFetch from '../../Hooks/useFetch';

import Error from '../../Components/Error';
import Loading from '../../Components/Loading';
import DetailCard from '../../Components/Cards/DetailCard';

const Detail = ({route, navigation}) => {
  const {mealID} = route.params;
  const {data, loading, error} = useFetch(
    `${Config.API_URL}/lookup.php?i=${mealID}`,
  );

  const renderItem = ({item}) => {
    return (
      <DetailCard details={item} onPress={() => handlePress(item.strYoutube)} />
    );
  };

  const handlePress = async url => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
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

export default Detail;
