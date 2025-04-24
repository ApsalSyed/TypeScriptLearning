import React from 'react';
import {Text, View, Button, StyleSheet, Alert} from 'react-native';

interface CustomCounterProps {
  title: string[];
  count: number;
  noofButton?: number;
  buttonHandlers?: (() => void)[];
}

const CustomCounter: React.FC<CustomCounterProps> = ({
  title = [],
  count = 0,
  noofButton = 1,
  buttonHandlers = [],
}) => {
  const buttons = Array.from({length: noofButton}, (_, i) => i);

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>Count: {count}</Text>
      {buttons.map((_, index) => (
        <View key={index} style={styles.buttonWrapper}>
          <Button
            title={title[index]}
            onPress={
              buttonHandlers[index] ||
              (() => Alert.alert(`Default action ${index + 1}`))
            }
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  countText: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonWrapper: {
    marginVertical: 5,
    width: 200,
  },
});

export default CustomCounter;
