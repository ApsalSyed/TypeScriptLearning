import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Checkbox} from 'react-native-paper';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoList = () => {
  const [todo, setTodo] = useState<Todo[]>([
    {id: 1, title: 'Trail', completed: false},
    {id: 2, title: 'Mountain', completed: false},
    {id: 3, title: 'Lake', completed: false},
    {id: 4, title: 'Lake', completed: false},
  ]);

  const toggleCheckbox = (id: number) => {
    setTodo(items =>
      items.map(item =>
        item.id === id ? {...item, completed: !item.completed} : item,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Todo List</Text>
      {todo.map(item => (
        <View key={item.id} style={styles.todoItem}>
          <View style={styles.row}>
            <Checkbox
              status={item.completed ? 'checked' : 'unchecked'}
              onPress={() => toggleCheckbox(item.id)}
            />
            <Text
              style={[styles.todoText, item.completed && styles.completedText]}>
              {item.title}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  todoItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoText: {
    fontSize: 18,
    color: '#333',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  idText: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
});

export default TodoList;
