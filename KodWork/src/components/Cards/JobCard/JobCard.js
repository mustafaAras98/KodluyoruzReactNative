import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './JobCard.style';

const JobCard = ({job, onPress}) => {
  return (
    <TouchableOpacity style={styles.Container} onPress={onPress}>
      <Text style={styles.NameText}>{job?.name}</Text>
      <Text style={styles.CategoryText}>{job.categories[0]?.name}</Text>
      <Text style={styles.LocationText}>{job.locations[0]?.name}</Text>
      <Text style={styles.LevelText}>{job.levels[0]?.name}</Text>
    </TouchableOpacity>
  );
};

export default JobCard;
