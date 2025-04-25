import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import TodoList from '../componet/TASKS/todo-list';

const HomePage: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <View style={styles.container}>
      {/* <DetailAtom lable={123} desc={'asfvjha'} />
      <DetailAtom
        lable={'Name'}
        desc={'Apsal'}
        disable={false}
        descStyle={styles.descStyle}
      /> */}

      {/* <CustomButton
        title="hello"
        onPress={() => Alert.alert('Button Pressed')}
        buttonStyle={styles.buttonStyle}
        textStyle={styles.textStyle}
      /> */}
      {/* <Counter /> */}
      {/* <CustomCounter
        title={['+1', '+2', '-1', '-2', 'RESET']}
        count={count}
        noofButton={5}
        buttonHandlers={[
          () => setCount(count + 1),
          () => setCount(count + 2),
          () => setCount(count - 1),
          () => setCount(count - 2),
          () => setCount(0),
        ]}
      /> */}

      {/* <UserCard age={20} name="Apsal" email="hello@gmail.com" showage={true} /> */}
      <TodoList />
    </View>
  );
};
export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  buttonStyle: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  textStyle: {
    fontSize: 16,
  },
  descStyle: {
    textDecorationLine: 'underline',
    color: 'red',
    fontSize: 26,
  },
});
