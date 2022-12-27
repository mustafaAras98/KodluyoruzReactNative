import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './ToDoItem.styles';

const ToDoItem = ({toDoItem, setToDoList}) => {
  const handleRemoveButton = () => {
    setToDoList(current => current.filter(item => item.id !== toDoItem.id));
  };
  const handleCheckButton = () => {
    setToDoList(prevState =>
      prevState.map(item =>
        item.id === toDoItem.id ? {...item, isCheck: !toDoItem.isCheck} : item,
      ),
    );
  };

  return (
    <View style={styles.Container}>
      <View style={styles.TextContainer}>
        <Text
          style={[
            toDoItem.isCheck ? styles.CheckedText : styles.NotCheckedText,
          ]}>
          <Text style={styles.BoldText}>Title: </Text> {toDoItem.title}
        </Text>
        <Text style={[toDoItem.isCheck ? styles.DisplayNone : styles.Text]}>
          <Text style={styles.BoldText}>Description: </Text>
          {toDoItem.description}
        </Text>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity
          style={styles.CheckButton}
          onPress={handleCheckButton}>
          <Text>Check</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.RemoveButton}
          onPress={handleRemoveButton}>
          <Text>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ToDoItem;
