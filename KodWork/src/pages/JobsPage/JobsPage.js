import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';

import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';

import JobCard from '../../components/Cards/JobCard';
import CountButton from '../../components/Button/CountButton';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

import styles from './JobsPage.style';

const JobsPage = ({navigation}) => {
  const [page, setPage] = useState(1);
  const [isIncrementDisabled, setIsIncrementDisabled] = useState(false);
  const [isDecrementDisabled, setIsDecrementDisabled] = useState(true);

  const {data, loading, error} = useFetch(`${Config.API_URL}?page=${page}`);

  useEffect(() => {
    if (page < 2) {
      setIsDecrementDisabled(true);
      setIsIncrementDisabled(false);
    } else if (page > 98) {
      setIsIncrementDisabled(true);
      setIsDecrementDisabled(false);
    } else {
      setIsDecrementDisabled(false);
      setIsIncrementDisabled(false);
    }
  }, [page]);

  const handlePress = id => {
    navigation.navigate('JobsDetails', {ID: id});
  };
  const renderJob = ({item}) => (
    <JobCard job={item} onPress={() => handlePress(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View>
      <FlatList
        data={data.results}
        renderItem={renderJob}
        keyExtractor={item => item.id}
        extraData={data}
        ListFooterComponent={
          <View style={styles.Container}>
            <CountButton
              text="-"
              onPress={() => setPage(page - 1)}
              isDisabled={isDecrementDisabled}
            />
            <Text style={styles.PageText}>{page}</Text>
            <CountButton
              text="+"
              onPress={() => setPage(page + 1)}
              isDisabled={isIncrementDisabled}
            />
          </View>
        }
      />
    </View>
  );
};

export default JobsPage;
