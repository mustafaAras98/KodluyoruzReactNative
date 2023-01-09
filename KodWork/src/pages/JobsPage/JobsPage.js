import React from 'react';
import {View, Text, Button} from 'react-native';

const JobsPage = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('JobsDetails');
  };
  return (
    <View>
      <Text> jobsPage</Text>
      <Button title="Go To Details.." onPress={handlePress} />
    </View>
  );
};

export default JobsPage;
