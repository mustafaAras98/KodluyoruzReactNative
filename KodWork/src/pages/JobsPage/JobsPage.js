import React, {useState} from 'react';
import {View, Text, Button, FlatList} from 'react-native';

import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';

const JobsPage = ({navigation}) => {
  const [page, setPage] = useState(1);
  const {data, loading, error} = useFetch(`${Config.API_URL}?page=${page}`);
  const handlePress = () => {
    navigation.navigate('JobsDetails');
  };

  return (
    <View>
      <Text> jobspage: </Text>
      <FlatList
        data={data.results}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.short_name}</Text>
            </View>
          );
        }}
        keyExtractor={item => item.id}
        extraData={data}
      />
      <Button title="Go To Details.." onPress={handlePress} />
      <Button title="+" onPress={() => setPage(page + 1)} />
      <Button title="-" onPress={() => setPage(page - 1)} />
    </View>
  );
};

export default JobsPage;
