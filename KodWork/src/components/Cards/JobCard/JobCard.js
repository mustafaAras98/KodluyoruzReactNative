import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './JobCard.style';

const JobCard = ({job, onPress}) => {
  return (
    <TouchableOpacity style={styles.Container} onPress={onPress}>
      <Text>{job?.name}</Text>
      <Text>Category: {job.categories[0]?.name}</Text>
      <Text>Location: {job.locations[0]?.name}</Text>
      <Text>Level: {job.levels[0]?.name}</Text>
    </TouchableOpacity>
  );
};

export default JobCard;
