import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';

import styles from './ToDoInput.styles';
const ToDoInput = ({setToDoList, id, setID}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleInputPress = () => {
    setToDoList(oldToDo => [
      ...oldToDo,
      {
        id: id,
        title: title,
        description: description,
        isCheck: false,
      },
    ]);
    setID(id + 1);
  };
  return (
    <View style={styles.Container}>
      <TextInput
        style={styles.Input}
        onChangeText={setTitle}
        value={title}
        placeholder="Title.."
      />
      <TextInput
        style={styles.Input}
        onChangeText={setDescription}
        value={description}
        placeholder="Description.."
        multiline={true}
      />
      <Button title="Ekle" onPress={handleInputPress} />
    </View>
  );
};
export default ToDoInput;
