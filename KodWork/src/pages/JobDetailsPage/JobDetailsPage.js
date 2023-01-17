import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Linking,
  Alert,
} from 'react-native';
import Config from 'react-native-config';

import {useDispatch} from 'react-redux';
import {addFavorite} from '../../redux/favoriteSlice';

import {RenderHTML} from 'react-native-render-html';

import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

import styles from './JobDetailsPage.style';

const JobDetailsPage = ({route, navigation}) => {
  const {ID} = route.params;
  const {data, loading, error} = useFetch(`${Config.API_URL}/${ID}`);

  const dispatch = useDispatch();
  const {width} = useWindowDimensions();

  const handleSubmit = async url => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };
  const handleAddFavorite = () => {
    const payload = {
      ID: ID,
      Name: data?.name,
      Category: data.categories[0]?.name,
      Location: data.locations[0]?.name,
      Level: data.levels[0]?.name,
    };
    dispatch(addFavorite(payload));
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.Container}>
      <View style={styles.Title}>
        <Text style={styles.TitleText}>{data?.name}</Text>
        <Text style={styles.LocationText}>
          Locations: {data.locations[0]?.name}
        </Text>
        <Text style={styles.LevelText}>Job Level: {data.levels[0]?.name}</Text>
      </View>
      <View style={styles.Html}>
        <Text style={styles.HtmlTitle}>Job Detail</Text>
        <ScrollView>
          {<RenderHTML contentWidth={width} source={{html: data.contents}} />}
        </ScrollView>
      </View>
      <View style={styles.Footer}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handleSubmit(data.refs.landing_page)}>
          <Text style={styles.ButtonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handleAddFavorite()}>
          <Text style={styles.ButtonText}>Add Favorite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JobDetailsPage;
