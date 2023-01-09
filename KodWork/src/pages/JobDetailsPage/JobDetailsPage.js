import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Button,
  useWindowDimensions,
  Linking,
  Alert,
} from 'react-native';

import Config from 'react-native-config';
import {RenderHTML} from 'react-native-render-html';

import useFetch from '../../hooks/useFetch';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

const JobDetailsPage = ({route, navigation}) => {
  const {ID} = route.params;
  const {data, loading, error} = useFetch(`${Config.API_URL}/${ID}`);

  const {width} = useWindowDimensions();

  const handleSubmit = async url => {
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
    <ScrollView>
      <Text>Name: {data?.name}</Text>
      <Text>Location: {data.locations[0]?.name}</Text>
      <Text>Job Level: {data.levels[0]?.name}</Text>
      <View>
        {<RenderHTML contentWidth={width} source={{html: data.contents}} />}
      </View>
      <Button
        title="Submit"
        onPress={() => handleSubmit(data.refs.landing_page)}
      />
      <Button title="Favorite" />
    </ScrollView>
  );
};

export default JobDetailsPage;
