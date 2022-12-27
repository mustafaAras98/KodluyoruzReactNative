import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import Header from './components/Header';
import ButtonAddItem from './components/ButtonAddItem';
import ToDoItem from './components/ToDoItem';

const App = () => {
  const [toDoList, setToDoList] = useState([]);
  const [counter, setCounter] = useState();

  useEffect(() => {
    setCounter(toDoList.filter(item => !item.isCheck).length);
  }, [toDoList]);

  const renderItem = ({item}) => (
    <ToDoItem toDoItem={item} setToDoList={setToDoList} />
  );

  return (
    <View style={styles.Container}>
      <Header toDoCounter={counter} />
      <FlatList
        data={toDoList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <ButtonAddItem setToDoList={setToDoList} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  Container: {flex: 1, backgroundColor: '#2a9d8f'},
});
