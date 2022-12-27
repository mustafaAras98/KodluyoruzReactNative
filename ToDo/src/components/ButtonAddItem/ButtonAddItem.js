import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './ButtonAddItem.styles';

import ToDoInput from '../ToDoInput';

const ButtonAddItem = ({setToDoList}) => {
  const [toDoInputFlag, setToDoInputFlag] = useState(false);
  const [id, setID] = useState(0);

  const handlePress = () => {
    setToDoInputFlag(!toDoInputFlag);
  };

  return (
    <View style={styles.Container}>
      {toDoInputFlag && (
        <ToDoInput setToDoList={setToDoList} id={id} setID={setID} />
      )}
      <TouchableOpacity onPress={handlePress} style={styles.Button}>
        <Text style={styles.ButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonAddItem;
