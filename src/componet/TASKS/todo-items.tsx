import {StyleSheet, View} from 'react-native';
import {Checkbox, Text} from 'react-native-paper';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
interface TodoItemsProps {
  todo: Todo;
  toggleCheckbox: (id: number) => void;
}

const TodoItems: React.FC<TodoItemsProps> = ({todo, toggleCheckbox}) => {
  return (
    <View style={styles.todoItem}>
      <View style={styles.row}>
        <Checkbox
          status={todo.completed ? 'checked' : 'unchecked'}
          onPress={() => toggleCheckbox(todo.id)}
        />
        <Text style={[styles.todoText, todo.completed && styles.completedText]}>
          {todo.title}
        </Text>
      </View>
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

export default TodoItems;
