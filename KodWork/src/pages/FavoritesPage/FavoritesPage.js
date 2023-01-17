import React from 'react';
import {View, FlatList} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {removeFavorite} from '../../redux/favoriteSlice';

import FavoriteCard from '../../components/Cards/FavoriteCard';

const FavoritesPage = ({navigation}) => {
  const {favoriteJob} = useSelector(state => state.favorite);
  const dispatch = useDispatch();

  const handleRemoveFavorites = ID => {
    dispatch(removeFavorite(ID));
  };
  const renderJob = ({item}) => (
    <FavoriteCard item={item} onPress={() => handleRemoveFavorites(item.ID)} />
  );
  return (
    <View>
      <FlatList
        data={favoriteJob}
        renderItem={renderJob}
        keyExtractor={item => item.ID}
      />
    </View>
  );
};

export default FavoritesPage;
