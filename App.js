import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todo';
import AddTodo from './components/addTodo';


export default function App () {

  const [todos, setTodos]=useState([
    { text: 'buy coffee', key: '1'},
    { text: 'sleep time', key: '2'},
    { text: 'make pasta', key: '3'}
  ]);

  const pressHandler = (key) => {
    setTodos( (prevTodos) => {
      return prevTodos.filter( todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {

    if(text.length > 3){
      setTodos( (prevTodos)=>{
        return[
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ]
      })
    }else{
      Alert.alert('HEY DUDE!', 'Text must be more than 3 characters long.', [
        {text: 'Close Alert', onPress: () => console.log('Alert closed.')}
      ])
    }

    
  }

  return (
    <TouchableWithoutFeedback onPress={ ()=>{
      Keyboard.dismiss();
    } } >
      <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <Text style={styles.contentTitle}>~ Your pending Task ~</Text>
          <FlatList 
            data={todos}
            renderItem={ ({item}) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    marginTop: 16,
    flex: 1,
  },
  contentTitle:{
    marginTop: 40,
    marginBottom: 8,
  }
});
