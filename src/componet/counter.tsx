import {useState} from 'react';
import {Text, View} from 'react-native';
import CustomButton from './custom-button';

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{count}</Text>
      <CustomButton
        title="Count +1"
        onPress={() => setCount(count + 1)}
        buttonStyle={{backgroundColor: 'red', marginTop: 10}}
      />
      <CustomButton
        title="Reset"
        onPress={() => setCount(0)}
        buttonStyle={{backgroundColor: 'red', marginTop: 10}}
      />
    </View>
  );
};

export default Counter;
